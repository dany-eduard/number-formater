import { Currency, Locales } from './constans';
import { ICurrencyParans, IParams } from './interfaces/interfaces';

/**
 * Formatting a currency
 * @param number
 * @param {ICurrencyParans} object optional
 * @returns {string} string
 */
export const formatToCurrency = (
  number: number,
  { locales, currency, fractionDigits }: ICurrencyParans = {
    locales: Locales.CO,
    currency: Currency.COP,
    fractionDigits: 0,
  }
) => {
  return new Intl.NumberFormat(locales, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: fractionDigits,
  }).format(number);
};

/**
 * Formatting a number to decimal
 * @param number
 * @param {IParams} object optional
 * @returns string
 */
export const formatToDecimal = (
  number: number,
  { locales, fractionDigits }: IParams = {
    locales: Locales.CO,
    fractionDigits: 0,
  }
) => {
  return new Intl.NumberFormat(locales, {
    style: 'decimal',
    minimumFractionDigits: fractionDigits,
  }).format(number);
};

/**
 * Formatting a number to percent
 * @param number
 * @param {IParams} object optional
 * @returns string
 */
export const formatToPercent = (
  number: number,
  { locales, fractionDigits }: IParams = {
    locales: Locales.CO,
    fractionDigits: 0,
  }
) => {
  return new Intl.NumberFormat(locales, {
    style: 'percent',
    minimumFractionDigits: fractionDigits,
  }).format(number);
};
