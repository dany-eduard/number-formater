export interface IObjectString {
  [key: string]: string;
}

export interface IParams {
  locales?: string;
  fractionDigits?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
}

export interface ICurrencyParans extends IParams {
  currency?: string;
}
