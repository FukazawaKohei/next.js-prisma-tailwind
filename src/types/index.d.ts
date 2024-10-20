// 一部のプロパティのみ省略可
type PartiallyPartial<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

// 一部プロパティのみ必須化
type PartiallyRequired<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>
