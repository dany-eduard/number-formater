interface IObjectString {
  [key: string]: string;
}

interface ICurrencyParans {
  locales?: string;
  currency?: string;
  fractionDigits?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  number: number;
}

interface IDePeParans {
  locales?: string;
  fractionDigits?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  number: number;
}
