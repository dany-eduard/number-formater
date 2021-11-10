import { ICurrencyParans, IParams } from './interfaces/interfaces';
/**
 * Formatting a currency
 * @param number
 * @param {ICurrencyParans} object optional
 * @returns {string} string
 */
export declare const formatToCurrency: (number: number, { locales, currency, fractionDigits }?: ICurrencyParans) => string;
/**
 * Formatting a number to decimal
 * @param number
 * @param {IParams} object optional
 * @returns string
 */
export declare const formatToDecimal: (number: number, { locales, fractionDigits }?: IParams) => string;
/**
 * Formatting a number to percent
 * @param number
 * @param {IParams} object optional
 * @returns string
 */
export declare const formatToPercent: (number: number, { locales, fractionDigits }?: IParams) => string;
//# sourceMappingURL=index.d.ts.map