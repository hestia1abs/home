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

// ── API Keys ──────────────────────────────────────────

export interface ApiKey {
  id: string;
  name: string;
  prefix: string;
  scopes: string[];
  created_at: string;
  active: boolean;
}

export async function listApiKeys(
  token: string,
): Promise<ApiResponse<{ keys: ApiKey[] }>> {
  return request<{ keys: ApiKey[] }>("/auth/api-keys", {
    headers: withAuth(token),
  });
}

export async function createApiKey(
  token: string,
  payload: { name: string; scopes: string[] },
): Promise<ApiResponse<{ key: string; prefix: string; name: string }>> {
  return request<{ key: string; prefix: string; name: string }>(
    "/auth/api-keys",
    {
      method: "POST",
      headers: withAuth(token),
      body: JSON.stringify(payload),
    },
  );
}

export async function revokeApiKey(
  token: string,
  id: string,
): Promise<ApiResponse<{ status: string }>> {
  return request<{ status: string }>("/auth/api-keys/revoke", {
    method: "POST",
    headers: withAuth(token),
    body: JSON.stringify({ key_id: id })
  });
}

export async function rotateApiKey(
  token: string,
  id: string,
): Promise<ApiResponse<{ status: string }>> {
  return request<{ status: string }>("/auth/api-keys/rotate", {
    method: "POST",
    headers: withAuth(token),
    body: JSON.stringify({ key_id: id })
  });
} // ── Homes & Rooms ────────────────────────────────────

export interface Home {
  id: string;
  home_name: string;
  timezone: string;
  created_at: string;
}


export interface Room {
  id: string;
  home_id: string;
  name: string;
  created_at: string;
}

export async function listHomes(
  token: string,
): Promise<ApiResponse<{ homes: Home[] }>> {
  return request<{ homes: Home[] }>("/homes", {
    headers: withAuth(token),
  });
}

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

export async function deleteHome(
  token: string,
  homeId: string,
): Promise<ApiResponse<{ status: string }>> {
  return request<{ status: string }>(`/homes/${homeId}`, {
    method: "DELETE",
    headers: withAuth(token),
  });
}


export async function listRooms(
  token: string,
  homeId: string,
): Promise<ApiResponse<{ rooms: Room[] }>> {
  return request<{ rooms: Room[] }>(`/homes/${homeId}/rooms`, {
    headers: withAuth(token),
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

export async function deleteRoom(
  token: string,
  homeId: string,
  roomId: string,
): Promise<ApiResponse<{ status: string }>> {
  return request<{ status: string }>(`/homes/${homeId}/rooms/${roomId}`, {
    method: "DELETE",
    headers: withAuth(token),
  });
}

// ── Devices ──────────────────────────────────────────

export interface Device {
  id: string;
  device_type: string;
  firmware: string;
  active: boolean;
  revoked: boolean;
  key_version: number;
  home_id: string;
  room_id?: string;
  status?: string;
  rssi?: number;
  last_heartbeat?: string;
  created_at: string;
  updated_at: string;
}

export interface DeviceListResponse {
  devices: Device[];
  count: number;
}

export interface RegisterDevicePayload {
  device_type: string;
  home_id: string;
  room_id?: string;
}

export interface RegisterDeviceResponse {
  status: string;
  device_id: string;
  tenant_id: string;
  api_base_url: string;
  device_secret: string;
  initial_sequence: number;
  home_id: string;
  room_id?: string;
}

export async function listDevices(
  token: string,
): Promise<ApiResponse<DeviceListResponse>> {
  return request<DeviceListResponse>("/devices", {
    headers: withAuth(token),
  });
}

export async function registerDevice(
  token: string,
  payload: RegisterDevicePayload,
): Promise<ApiResponse<RegisterDeviceResponse>> {
  return request<RegisterDeviceResponse>("/device/register", {
    method: "POST",
    headers: withAuth(token),
    body: JSON.stringify(payload),
  });
}

export async function revokeDevice(
  token: string,
  deviceId: string,
): Promise<ApiResponse<{ device_id: string; status: string }>> {
  return request<{ device_id: string; status: string }>(
    `/device/${deviceId}/revoke`,
    {
      method: "POST",
      headers: withAuth(token),
    },
  );
}

export async function rotateDeviceSecret(
  token: string,
  deviceId: string,
): Promise<
  ApiResponse<{ device_id: string; new_secret: string; key_version: number }>
> {
  return request<{
    device_id: string;
    new_secret: string;
    key_version: number;
  }>(`/device/${deviceId}/rotate-secret`, {
    method: "POST",
    headers: withAuth(token),
  });
}

export async function getKeyHistory(
  token: string,
  deviceId: string,
): Promise<
  ApiResponse<{
    device_id: string;
    current_version: number;
    history: Array<Record<string, unknown>>;
  }>
> {
  return request<{
    device_id: string;
    current_version: number;
    history: Array<Record<string, unknown>>;
  }>(`/device/${deviceId}/key-history`, {
    headers: withAuth(token),
  });
}

// ── Commands ─────────────────────────────────────────

export interface CommandPayload {
  action: string;
  params?: Record<string, unknown>;
}

export interface CommandResponse {
  status: string;
  command_id: string;
  message_id: string;
}

export async function sendCommand(
  token: string,
  deviceId: string,
  payload: CommandPayload,
): Promise<ApiResponse<CommandResponse>> {
  return request<CommandResponse>(`/device/${deviceId}/command`, {
    method: "POST",
    headers: withAuth(token),
    body: JSON.stringify(payload),
  });
}

export async function sendCommandToRoom(
  token: string,
  roomId: string,
  payload: CommandPayload & { capability?: string },
): Promise<ApiResponse<{ results: any[] }>> {
  return request<{ results: any[] }>(`/rooms/${roomId}/command`, {
    method: "POST",
    headers: withAuth(token),
    body: JSON.stringify(payload),
  });
}

export async function sendCommandToGroup(
  token: string,
  groupSlug: string,
  payload: CommandPayload,
): Promise<ApiResponse<{ results: any[] }>> {
  return request<{ results: any[] }>(`/groups/${groupSlug}/command`, {
    method: "POST",
    headers: withAuth(token),
    body: JSON.stringify(payload),
  });
}

export async function getCommandHistory(
  token: string,
  deviceId: string,
): Promise<ApiResponse<{ commands: Array<Record<string, unknown>> }>> {
  return request<{ commands: Array<Record<string, unknown>> }>(
    `/device/${deviceId}/commands`,
    {
      headers: withAuth(token),
    },
  );
}

// ── Provisioning ─────────────────────────────────────

export interface ClaimPayload {
  public_key: string;
  device_type: string;
  signature: string;
  timestamp: string;
}

export interface ClaimResponse {
  device_id: string;
  encrypted_secret: {
    ephemeral_public_key: string;
    iv: string;
    tag: string;
    ciphertext: string;
  };
  key_version: number;
  protocol_version: string;
  mqtt_endpoint: string;
}

export async function claimDevice(
  token: string,
  payload: ClaimPayload,
): Promise<ApiResponse<ClaimResponse>> {
  return request<ClaimResponse>("/device/claim", {
    method: "POST",
    headers: withAuth(token),
    body: JSON.stringify(payload),
  });
}

// ── Firmware / OTA ───────────────────────────────────

export interface FirmwareCheckResponse {
  update_available: boolean;
  version?: string;
  checksum?: string;
  ed25519_signature?: string | null;
  download_url?: string | null;
}

export async function checkFirmware(
  token: string,
  params: { device_type: string; current_version: string; device_id?: string },
): Promise<ApiResponse<FirmwareCheckResponse>> {
  const qs = new URLSearchParams(params as Record<string, string>);
  return request<FirmwareCheckResponse>(`/firmware/check?${qs.toString()}`, {
    headers: withAuth(token),
  });
}

export async function uploadFirmware(
  token: string,
  formData: FormData,
): Promise<
  ApiResponse<{ version: string; device_type: string; checksum: string }>
> {
  const res = await fetch(`${BASE}/firmware/upload`, {
    method: "POST",
    credentials: "include",
    headers: { Authorization: `Bearer ${token}` },
    body: formData,
  });

  let data: { version: string; device_type: string; checksum: string };
  try {
    data = await res.json();
  } catch {
    data = { version: "", device_type: "", checksum: "" };
  }

  if (!res.ok) {
    throw new ApiError(res.status, data as unknown as ApiErrorBody);
  }

  return { ok: true, status: res.status, data };
}

// ── Manifests ────────────────────────────────────────

export type SafetyClass = "normal" | "sensitive" | "critical" | "restricted";

export interface CapParamProperty {
  type: "string" | "number" | "boolean" | "integer";
  description?: string;
  minimum?: number;
  maximum?: number;
  minLength?: number;
  maxLength?: number;
  enum?: (string | number | boolean)[];
  pattern?: string;
  required?: boolean;
}

export interface CapParamSchema {
  properties: Record<string, CapParamProperty>;
  additionalProperties: false;
}

export interface CapEntry {
  id: number;
  action: string;
  description: string;
  safetyClass: SafetyClass;
  paramSchema: CapParamSchema | null;
  supportsDryRun: boolean;
}

export interface ManifestResponse {
  deviceId: string;
  tenantId: string;
  version: number;
  capabilities: CapEntry[];
  registeredAt: string;
  updatedAt: string;
}

export async function getManifest(
  token: string,
  deviceId: string,
): Promise<ApiResponse<ManifestResponse>> {
  return request<ManifestResponse>(`/devices/${deviceId}/manifest`, {
    headers: withAuth(token),
  });
}

export async function registerManifest(
  token: string,
  deviceId: string,
  capabilities: CapEntry[],
): Promise<ApiResponse<{ status: string; version: number }>> {
  return request<{ status: string; version: number }>(
    `/devices/${deviceId}/manifest`,
    {
      method: "POST",
      headers: withAuth(token),
      body: JSON.stringify({ capabilities }),
    },
  );
}

export async function updateManifest(
  token: string,
  deviceId: string,
  expectedVersion: number,
  capabilities: CapEntry[],
): Promise<ApiResponse<{ status: string; version: number }>> {
  return request<{ status: string; version: number }>(
    `/devices/${deviceId}/manifest`,
    {
      method: "PUT",
      headers: withAuth(token),
      body: JSON.stringify({ expected_version: expectedVersion, capabilities }),
    },
  );
}

export async function getDeviceTypes(
  token: string,
): Promise<ApiResponse<{ categories: Record<string, Record<string, CapEntry[]>> }>> {
  return request<{ categories: Record<string, Record<string, CapEntry[]>> }>("/manifest/types", {
    headers: withAuth(token),
  });
}

export async function getGlobalCapabilities(
  token: string,
): Promise<ApiResponse<{ capabilities: Record<string, CapEntry> }>> {
  return request<{ capabilities: Record<string, CapEntry> }>("/manifest/capabilities", {
    headers: withAuth(token),
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
