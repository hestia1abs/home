/**
 * @file lib/auth-context.tsx
 * @description Session context with Appwrite Auth integration.
 * Session context with Appwrite Auth integration.
 * All 12+ dashboard pages import from this path — exports are stable.
 *
 * Design decisions:
 *  - No push listener for auth state — state is updated explicitly after
 *    each action. All state transitions happen synchronously after each call.
 *  - JWT for backend: account.createJWT() issues a 15-min token used as
 *    the Bearer token on every backend request.
 *  - Email verification is URL-link based (userId + secret in URL params).
 *    See /auth/callback for the handler.
 *  - Password recovery is URL-link based. See /reset-password for handler.
 *  - updatePassword requires the old password when called in an active
 *    session (Appwrite security requirement).
 *
 * Preserved exports: AuthProvider, useAuth, AuthContextValue
 *
 * @dependencies appwrite, lib/appwrite, lib/api
 */

"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import { ID, OAuthProvider, AppwriteException, type Models } from "appwrite";
import { account, pingAppwrite } from "@/lib/appwrite";
import * as api from "@/lib/api";
import { toast } from "sonner";

// ── Types ────────────────────────────────────────────

interface User {
  id: string;
  email: string;
  role: string;
}

interface AuthState {
  user: User | null;
  session: Models.Session | null;
  token: string | null;
  loading: boolean;
  error: string | null;
  csrfToken: string | null;
  emailVerified: boolean;
  hasTenant: boolean;
  tenantSlug: string | null;
}


export interface AuthContextValue extends AuthState {
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signInWithOAuth: (provider: "github" | "google" | "gitlab") => Promise<void>;
  signOut: () => Promise<void>;
  /** Alias for signOut — preserved for all callers using logout(). */
  logout: () => Promise<void>;
  /**
   * Verify email address after signup.
   * Called from /auth/callback with userId + secret extracted from URL params.
   * Appwrite sends a link — not a typed OTP code.
   */
  verifyEmail: (userId: string, secret: string) => Promise<void>;
  /**
   * Complete the password recovery flow.
   * Called from /reset-password with userId + secret from URL params.
   */
  verifyRecovery: (
    userId: string,
    secret: string,
    newPassword: string,
  ) => Promise<void>;
  /** Send a password reset link to the given email address. */
  requestPasswordReset: (email: string) => Promise<void>;
  /**
   * Update password for a currently authenticated user.
   * Requires the old password — Appwrite enforces this for active sessions.
   * For recovery-flow password updates use verifyRecovery instead.
   */
  updatePassword: (newPassword: string, oldPassword: string) => Promise<void>;
  refreshProfile: () => Promise<User | null>;
  resendVerification: () => Promise<void>;
  emailVerified: boolean;
  hasTenant: boolean;
  tenantSlug: string | null;
}


// ── Context ──────────────────────────────────────────

const AuthContext = createContext<AuthContextValue | null>(null);


// ── Helpers ──────────────────────────────────────────

function mapOAuthProvider(
  provider: "github" | "google" | "gitlab",
): OAuthProvider {
  switch (provider) {
    case "github":
      return OAuthProvider.Github;
    case "google":
      return OAuthProvider.Google;
    case "gitlab":
      return OAuthProvider.Gitlab;
  }
}

function extractErrorMessage(err: unknown): string {
  if (err instanceof AppwriteException) return err.message;
  if (err instanceof Error) return err.message;
  return "An unexpected error occurred";
}

// ── Provider ─────────────────────────────────────────

export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AuthState>({
    user: null,
    session: null,
    token: null,
    loading: true,
    error: null,
    csrfToken: null,
    emailVerified: false,
    hasTenant: false,
    tenantSlug: null,
  });




  // ── CSRF Token ──────────────────────────────────────

  const fetchCsrf = useCallback(async () => {
    try {
      const res = await api.getCsrfToken();
      const token = res.data.csrfToken;
      setState((s) => ({ ...s, csrfToken: token }));
      api.setCsrfToken(token);
      return token;
    } catch (err) {
      console.error("Failed to fetch CSRF token:", err);
      return null;
    }
  }, []);

  // ── Profile Refresh ─────────────────────────────────

  /**
   * Check for an active Appwrite session, obtain a short-lived JWT,
   * then fetch the HXTP user profile from the backend.
   *
   * The Appwrite JWT (from account.createJWT()) is stored in state.token
   * and forwarded as the Bearer token on all backend API requests.
   *
   * Falls back gracefully when no session exists — never throws.
   */
  const refreshProfile = useCallback(async (): Promise<User | null> => {
    try {
      const currentSession = await account.getSession("current");
      const appwriteUser = await account.get();
      const { jwt } = await account.createJWT();

      const isVerified = appwriteUser.emailVerification === true;

      let res = await api.getMe(jwt);

      // Auto-provision tenant for new users
      if (res.ok && res.data.authenticated && !res.data.has_tenant) {
        try {
          const tenantName = appwriteUser.name || appwriteUser.email.split('@')[0] || "My Home";
          await api.registerTenant(jwt, { tenant_name: tenantName });
          res = await api.getMe(jwt); // Re-fetch to get new profile with tenant attached
        } catch (e) {
          console.error("Failed to automatically provision tenant:", e);
          toast.error('Something went wrong. Please try again.');
        }
      }

      if (res.ok && res.data.authenticated && res.data.has_tenant) {
        setState((s) => ({
          ...s,
          user: res.data.user as User,
          session: currentSession,
          token: jwt,
          loading: false,
          emailVerified: isVerified,
          hasTenant: true,
          tenantSlug: (res.data.user as Record<string, unknown>)?.tenant_slug as string || null,
        }));
        return res.data.user as User;
      } else if (res.ok && res.data.authenticated) {
        // Authenticated with Appwrite but still no HXTP tenant registered
        setState((s) => ({
          ...s,
          user: res.data.user as User,
          session: currentSession,
          token: jwt,
          loading: false,
          emailVerified: isVerified,
          hasTenant: false,
          tenantSlug: null,
        }));
        return res.data.user as User;
      } else {
        // Appwrite session valid but HXTP backend rejected (e.g. system down)
        setState((s) => ({
          ...s,
          user: null,
          session: currentSession,
          token: jwt,
          loading: false,
          emailVerified: isVerified,
          hasTenant: false,
        }));
        return null;
      }
    } catch {
      // No active Appwrite session — clear state silently
      setState((s) => ({
        ...s,
        user: null,
        session: null,
        token: null,
        loading: false,
        emailVerified: false,
        hasTenant: false,
      }));
      return null;
    }
  }, []);

  // ── Startup Effect ──────────────────────────────────

  useEffect(() => {
    pingAppwrite();
    // Fetch CSRF token for backend form submissions
    // Check for an existing Appwrite session on startup.
    // NOTE: All state transitions happen explicitly after each action —
    //       there is no background push listener.
    const init = async () => {
      await fetchCsrf();
      await refreshProfile();
    };
    init();
  }, [fetchCsrf, refreshProfile]);

  // ── Auth Actions ────────────────────────────────────

  const signUp = useCallback(
    async (email: string, password: string) => {
      setState((s) => ({ ...s, loading: true, error: null }));
      try {
        // 1. Create the Appwrite account
        await account.create({ userId: ID.unique(), email, password });
        // 2. Establish a session immediately after creation
        await account.createEmailPasswordSession({ email, password });
        // 3. Dispatch verification email
        await account.createVerification({ url: "https://auth.hestialabs.in/callback" });

        // 4. Sync HXTP profile (will have no tenant yet)
        await refreshProfile();
        setState((s) => ({ ...s, loading: false }));
        toast.success(
          "Account created! Welcome.",
        );
      } catch (err) {
        const msg = extractErrorMessage(err);
        setState((s) => ({ ...s, loading: false, error: msg }));
        throw err;
      }
    },
    [refreshProfile],
  );

  const signIn = useCallback(
    async (email: string, password: string) => {
      setState((s) => ({ ...s, loading: true, error: null }));
      try {
        await account.createEmailPasswordSession({ email, password });
        // refreshProfile fetches the Appwrite JWT and HXTP user profile
        await refreshProfile();
      } catch (err) {
        const msg = extractErrorMessage(err);
        setState((s) => ({ ...s, loading: false, error: msg }));
        throw err;
      }
    },
    [refreshProfile],
  );

  const signInWithOAuth = useCallback(
    async (provider: "github" | "google" | "gitlab") => {
      setState((s) => ({ ...s, loading: true, error: null }));
      try {
        // createOAuth2Session redirects the browser to the OAuth provider.
        // loading intentionally remains true — browser navigates away.
        account.createOAuth2Session({
          provider: mapOAuthProvider(provider),
          success: "https://auth.hestialabs.in/callback",
          failure: "https://auth.hestialabs.in/signin?error=oauth_failed",
        });
      } catch (err) {
        const msg = extractErrorMessage(err);
        setState((s) => ({ ...s, loading: false, error: msg }));
        toast.error(`OAuth sign-in failed: ${msg}`);
        throw err;
      }
    },
    [],
  );

  const verifyEmail = useCallback(
    async (userId: string, secret: string) => {
      setState((s) => ({ ...s, loading: true, error: null }));
      try {
        await account.updateVerification({ userId, secret });
        await refreshProfile();
        setState((s) => ({ ...s, loading: false }));
        toast.success("Email verified successfully!");
      } catch (err) {
        const msg = extractErrorMessage(err);
        setState((s) => ({ ...s, loading: false, error: msg }));
        throw err;
      }
    },
    [refreshProfile],
  );

  const verifyRecovery = useCallback(
    async (userId: string, secret: string, newPassword: string) => {
      setState((s) => ({ ...s, loading: true, error: null }));
      try {
        await account.updateRecovery({ userId, secret, password: newPassword });
        setState((s) => ({ ...s, loading: false }));
        toast.success("Password updated. You can now sign in.");
        window.location.href = "https://auth.hestialabs.in/signin";
      } catch (err) {
        const msg = extractErrorMessage(err);
        setState((s) => ({ ...s, loading: false, error: msg }));
        throw err;
      }
    },
    [],
  );

  const signOut = useCallback(async () => {
    try {
      await account.deleteSession({ sessionId: "current" });
    } catch {
    }
    try {
      await api.logout();
    } catch {
    }
    setState((s) => ({
      user: null,
      session: null,
      token: null,
      loading: false,
      error: null,
      csrfToken: s.csrfToken,
      emailVerified: false,
      hasTenant: false,
      tenantSlug: null,
    }));
    window.location.href = "https://auth.hestialabs.in/signin";
  }, []);

  const requestPasswordReset = useCallback(async (email: string) => {
    setState((s) => ({ ...s, loading: true, error: null }));
    try {
      await account.createRecovery({
        email,
        url: "https://auth.hestialabs.in/reset-password",
      });
      setState((s) => ({ ...s, loading: false }));
      toast.success("Password reset link sent to your email.");
    } catch (err) {
      const msg = extractErrorMessage(err);
      setState((s) => ({ ...s, loading: false, error: msg }));
      throw err;
    }
  }, []);

  const updatePassword = useCallback(
    async (newPassword: string, oldPassword: string) => {
      setState((s) => ({ ...s, loading: true, error: null }));
      try {
        await account.updatePassword({ password: newPassword, oldPassword });
        setState((s) => ({ ...s, loading: false }));
        toast.success("Password updated successfully!");
        window.location.href = "https://cloud.hestialabs.in/dashboard";
      } catch (err) {
        const msg = extractErrorMessage(err);
        setState((s) => ({ ...s, loading: false, error: msg }));
        throw err;
      }
    },
    [],
  );

  const resendVerification = useCallback(async () => {
    try {
      await account.createVerification({ url: "https://auth.hestialabs.in/callback" });
      toast.success("Verification email sent. Please check your inbox.");
    } catch (err) {
      const msg = extractErrorMessage(err);
      toast.error(`Failed to send verification email: ${msg}`);
    }
  }, []);

  // ── Derived State ────────────────────────────────────


  return (
    <AuthContext.Provider
      value={{
        ...state,
        signIn,
        signUp,
        signInWithOAuth,
        signOut,
        logout: signOut,
        verifyEmail,
        verifyRecovery,
        requestPasswordReset,
        updatePassword,
        refreshProfile,
        resendVerification,
        emailVerified: state.emailVerified,
        hasTenant: state.hasTenant,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// ── Hook ─────────────────────────────────────────────

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
