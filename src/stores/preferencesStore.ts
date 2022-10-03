import { writable } from "svelte/store";
import type { SubjectName } from "../subjects/subjects";
import { localStorageStore } from "./common/localStorageStore";

export const preferencesDialogOpen = writable(false);

export const preferencesSubject1 = localStorageStore<SubjectName | null>('subject1', null);
export const preferencesSubject2 = localStorageStore<SubjectName | null>('subject2', null);
export const preferencesSubject3 = localStorageStore<SubjectName | null>('subject3', null);
