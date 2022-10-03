export const mapObjectProperties = <TKey extends keyof T, T extends Record<TKey, T[TKey]>, Y>(
  baseObject: T,
  mapper: ([key, value]: [TKey, T[TKey]]) => readonly [TKey, Y]
) => {
  return Object.fromEntries(
    (Object.entries(baseObject) as [TKey, T[TKey]][]).map(mapper),
  ) as Readonly<T & Record<keyof T, Y>>;
}

export const addKeyToProperties = <TKey extends keyof T, T extends Record<TKey, T[TKey]>, TName extends string>(baseObject: T, keyName: TName) => {
  return mapObjectProperties(baseObject, ([name, value]) => [name, { ...value, [keyName]: name } as T[TKey] & { [_ in TName]: TKey }]);
}
