import { localStorageStore } from "./common/localStorageStore";

export const themeStore = localStorageStore<'light' | 'dark' | null>('theme', null);