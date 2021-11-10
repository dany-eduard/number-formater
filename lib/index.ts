import { Currency, Locales } from './constans';

/**
 * Formatting a currency
 * @param {ICurrencyParans} object
 * @returns {string} string. Example: $ 98.890.098,00
 */
export const formatToCurrency = ({
  locales = Locales.CO,
  currency = Currency.COP,
  fractionDigits = 0,
  number,
}: ICurrencyParans) => {
  return new Intl.NumberFormat(locales, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: fractionDigits,
  }).format(number);
};

/**
 * Formatting a number to decimal
 * @param {IDePeParans} object
 * @returns string
 */
export const formatToDecimal = ({
  locales = Locales.CO,
  fractionDigits = 0,
  number,
}: IDePeParans) => {
  return new Intl.NumberFormat(locales, {
    style: 'decimal',
    minimumFractionDigits: fractionDigits,
  }).format(number);
};

/**
 * Formatting a number to percent
 * @param {IDePeParans} object
 * @returns
 */
export const formatToPercent = ({
  locales = Locales.CO,
  fractionDigits = 0,
  number,
}: IDePeParans) => {
  return new Intl.NumberFormat(locales, {
    style: 'percent',
    minimumFractionDigits: fractionDigits,
  }).format(number);
};
