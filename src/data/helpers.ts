export const mapFromCollection = <TKey extends keyof TValue, TValue>(collection: TValue[], keyName: TKey): Map<TValue[TKey], TValue> => {
  return new Map(collection.map((value) => [value[keyName], value]));
}
