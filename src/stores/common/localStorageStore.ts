import { writable } from 'svelte/store';

export const localStorageStore = <T>(key: string, initialValue: T) => {
  const storedValue = localStorage.getItem(key);
  const value = storedValue ? JSON.parse(storedValue) as T : initialValue;

  const { subscribe, set } = writable<T>(value);

  return {
    subscribe,
    set: (newValue: T) => {
      if (newValue === null || newValue === undefined) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, JSON.stringify(newValue));
      }

      set(newValue);
    }
  };
}