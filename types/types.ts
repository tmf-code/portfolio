export type Optionalize<T extends K, K> = Omit<T, keyof K>;
