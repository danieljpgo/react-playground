export function getLocalStorageData<T>(key: string): T | undefined {
  const data = window.localStorage.getItem(key);
  try {
    return data ? JSON.parse(data) : undefined;
  } catch {
    return undefined;
  }
}

export function setLocalStorageData<T>(key: string, body: T) {
  window.localStorage.setItem(key, JSON.stringify(body));
}

export function removeLocalStorageData(key: string) {
  window.localStorage.removeItem(key);
}
