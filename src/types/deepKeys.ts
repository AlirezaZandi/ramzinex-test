export type DeepKeys<T> = T extends object
  ? {
      [K in (string | number) & keyof T]: `${K}${T[K] extends object
        ? "."
        : ""}${T[K] extends object ? DeepKeys<T[K]> : ""}`;
    }[(string | number) & keyof T]
  : never;

export type DeepKeyValue<
  T,
  K extends string
> = K extends `${infer Key}.${infer Rest}`
  ? Key extends keyof T
    ? DeepKeyValue<T[Key], Rest>
    : never
  : K extends keyof T
  ? T[K]
  : never;
