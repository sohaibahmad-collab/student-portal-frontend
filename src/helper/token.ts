
export function decodeToken<T = any>(token: string): T | null {
  try {
    const base64Payload = token.split(".")[1];
    const decoded = atob(base64Payload);
    return JSON.parse(decoded) as T;
  } catch {
    return null;
  }
}


export function isTokenExpired(token: string): boolean {
  const payload = decodeToken<{ exp?: number }>(token);
  if (!payload?.exp) return true;

  const currentTime = Math.floor(Date.now() / 1000);
  return payload.exp < currentTime;
}


export function getTokenExpiry(token: string): number | null {
  const payload = decodeToken<{ exp?: number }>(token);
  return payload?.exp ?? null;
}
