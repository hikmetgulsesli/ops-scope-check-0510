const STORAGE_KEY = 'ops-scope-check-0510-data';

export function getStorageItem<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(`${STORAGE_KEY}:${key}`);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function setStorageItem<T>(key: string, value: T): boolean {
  try {
    localStorage.setItem(`${STORAGE_KEY}:${key}`, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

export function removeStorageItem(key: string): boolean {
  try {
    localStorage.removeItem(`${STORAGE_KEY}:${key}`);
    return true;
  } catch {
    return false;
  }
}

export function clearAllStorage(): boolean {
  try {
    Object.keys(localStorage)
      .filter((k) => k.startsWith(`${STORAGE_KEY}:`))
      .forEach((k) => localStorage.removeItem(k));
    return true;
  } catch {
    return false;
  }
}
