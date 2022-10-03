import { subjects } from './subjects.json';
import { subjectSets } from './subjectSets.json';

export type Subject = InferArray<typeof subjects>;
export { subjects };

export type SubjectSet = InferArray<typeof subjectSets>;
export { subjectSets };

type InferArray<T> = T extends (infer U)[] ? U : never;
