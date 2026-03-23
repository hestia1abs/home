/**
 * @file lib/api.ts
 * @description Typed API client for the HxTP backend.
 * All calls go through Next.js rewrites → backend Fastify server.
 * Never duplicates backend logic. Never signs anything client-side.
 */

const BASE = process.env.NEXT_PUBLIC_API_BASE_URL ? `${process.env.NEXT_PUBLIC_API_BASE_URL.trim().replace(/\/$/, '')}/v1` : "/api/v1";

let _csrfToken: string | null = null;

export function setCsrfToken(token: string | null) {
  _csrfToken = token;
}

interface ApiResponse<T = unknown> {
  ok: boolean;
  status: number;
  data: T;
}

interface ApiErrorBody {
  error: string;
  reason?: string;
  dry_run_token?: string;
}

class ApiError extends Error {
  public readonly dryRunToken?: string;

  constructor(
    public readonly status: number,
    public readonly body: ApiErrorBody,
  ) {
    super(body.error);
    this.name = "ApiError";
    this.dryRunToken = body.dry_run_token;
  }
}

async function request<T>(
  path: string,
  init?: RequestInit,
): Promise<ApiResponse<T>> {
  const url = `${BASE}${path}`;

  // Use Headers API for type-safe header management
  const headers = new Headers(init?.headers);
  if (!headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }

  const method = init?.method?.toUpperCase() || "GET";
  const isMutation = ["POST", "PUT", "DELETE", "PATCH"].includes(method);
  if (isMutation && _csrfToken) {
    headers.set("X-CSRF-Token", _csrfToken);
  }

  // Support for Fastify 5.0+: Ensure mutation requests have at least an empty object body
  // if Content-Type is application/json to avoid 400 Bad Request.
  let body = init?.body;
  if (isMutation && !body && headers.get("Content-Type") === "application/json") {
    body = JSON.stringify({});
  }

  const res = await fetch(url, {
    credentials: "include",
    ...init,
    headers,
    body,
  });

  let data: T;
  try {
    const text = await res.text();
    data = text ? JSON.parse(text) : ({} as T);
  } catch {
    data = {} as T;
  }

  if (!res.ok) {
    throw new ApiError(res.status, data as unknown as ApiErrorBody);
  }

  return { ok: true, status: res.status, data };
}

function withAuth(token: string): Record<string, string> {
  return { Authorization: `Bearer ${token}` };
}

// ── Session ──────────────────────────────────────────

export interface UserProfileResponse {
  authenticated: boolean;
  has_tenant: boolean;
  user: {
    id: string;
    appwrite_id: string;
    email: string;
    role: string;
    tenant_id?: string;
  };
}

export async function getMe(
  token: string,
): Promise<ApiResponse<UserProfileResponse>> {
  return request<UserProfileResponse>("/auth/me", {
    headers: withAuth(token),
  });
}

export async function logout(): Promise<ApiResponse<{ status: string }>> {
  return request<{ status: string }>("/auth/logout", { method: "POST" });
}

export async function getCsrfToken(): Promise<
  ApiResponse<{ csrfToken: string }>
> {
  return request<{ csrfToken: string }>("/auth/csrf");
}

// ── Homes & Rooms ────────────────────────────────────



export async function createHome(
  token: string,
  payload: { home_name: string; timezone?: string },
): Promise<ApiResponse<{ status: string; id: string }>> {
  return request<{ status: string; id: string }>("/homes", {
    method: "POST",
    headers: withAuth(token),
    body: JSON.stringify(payload),
  });
}


export async function updateHome(
  token: string,
  homeId: string,
  payload: { home_name?: string; timezone?: string },
): Promise<ApiResponse<{ status: string }>> {
  return request<{ status: string }>(`/homes/${homeId}`, {
    method: "PATCH",
    headers: withAuth(token),
    body: JSON.stringify(payload),
  });
}



export async function createRoom(
  token: string,
  homeId: string,
  payload: { name: string },
): Promise<ApiResponse<{ status: string; id: string }>> {
  return request<{ status: string; id: string }>(`/homes/${homeId}/rooms`, {
    method: "POST",
    headers: withAuth(token),
    body: JSON.stringify(payload),
  });
}





// ── Tenant Registration ──────────────────────────────

export interface TenantRegisterPayload {
  tenant_name: string;
}

export async function registerTenant(
  token: string,
  payload: TenantRegisterPayload,
): Promise<ApiResponse<{ tenant_id: string; user_id: string }>> {
  return request<{ tenant_id: string; user_id: string }>("/tenant/register", {
    method: "POST",
    headers: withAuth(token),
    body: JSON.stringify(payload),
  });
}

export { ApiError };
