/**
 * @file lib/appwrite.ts
 * @description Appwrite client initialization for the HxTP dashboard.
 * @responsibility Creates the singleton Appwrite Client, Account, Databases,
 * and Storage instances used across all frontend auth and data operations.
 *
 * Configuration:
 *   - NEXT_PUBLIC_APPWRITE_ENDPOINT  — Appwrite API base URL (baked at build time)
 *   - NEXT_PUBLIC_APPWRITE_PROJECT_ID — Appwrite project identifier
 *
 *   Both variables are required. The client will warn loudly at startup if
 *   either is missing so misconfiguration surfaces immediately.
 *
 * Design:
 *   - Client is a singleton — safe to import from any component or server action.
 *   - account   → Appwrite Account service for all auth operations.
 *   - databases → Appwrite Databases service (reserved for future use).
 *   - storage   → reserved for client-side storage reads (firmware downloads
 *                 are backend-proxied only — never direct from the client).
 *
 * @dependencies appwrite
 */

import { Client, Account, Databases, Storage } from "appwrite";

const APPWRITE_ENDPOINT = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT ?? "";

const APPWRITE_PROJECT_ID = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID ?? "";

if (!APPWRITE_ENDPOINT || !APPWRITE_PROJECT_ID) {
  console.warn(
    "[Appwrite] NEXT_PUBLIC_APPWRITE_ENDPOINT or NEXT_PUBLIC_APPWRITE_PROJECT_ID " +
    "is not set. Authentication and storage will fail. " +
    "Set both variables in .env or as Docker build-args.",
  );
}

const client = new Client();

if (APPWRITE_ENDPOINT) {
  client.setEndpoint(APPWRITE_ENDPOINT);
}

if (APPWRITE_PROJECT_ID) {
  client.setProject(APPWRITE_PROJECT_ID);
}

const account = new Account(client);
const databases = new Databases(client);
const storage = new Storage(client);

/**
 * Verify Appwrite connectivity at app initialization.
 *
 * Call this once from the root layout or AuthProvider (non-blocking).
 * Logs a warning on failure — never throws, so it cannot block rendering.
 */
export async function pingAppwrite(): Promise<void> {
  if (!APPWRITE_ENDPOINT || !APPWRITE_PROJECT_ID) {
    console.warn(
      "[Appwrite] Skipping ping — endpoint or project ID is not configured.",
    );
    return;
  }
  try {
    await client.ping();
    console.info("[Appwrite] Connection verified.");
  } catch (err) {
    console.warn(
      "[Appwrite] Ping failed — check NEXT_PUBLIC_APPWRITE_ENDPOINT " +
      "and NEXT_PUBLIC_APPWRITE_PROJECT_ID.",
      err,
    );
  }
}

export { client, account, databases, storage };
