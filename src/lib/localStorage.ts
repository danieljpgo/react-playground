/**
 * Returns the current object from local storage associated with the given key.
 */
export function getLocalStorageData<T>(key: string): T | undefined {
  const data = window.localStorage.getItem(key);
  try {
    return data ? JSON.parse(data) : undefined;
  } catch {
    return undefined;
  }
}

/**
 * Save the value to local storage associated with the given key.
 */
export function setLocalStorageData<T>(key: string, body: T) {
  window.localStorage.setItem(key, JSON.stringify(body));
}

/**
 * Remove the value from local storage associated with the given key.
 */
export function removeLocalStorageData(key: string) {
  window.localStorage.removeItem(key);
}
