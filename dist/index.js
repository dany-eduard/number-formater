"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatToPercent = exports.formatToDecimal = exports.formatToCurrency = void 0;
const constans_1 = require("./constans");
/**
 * Formatting a currency
 * @param number
 * @param {ICurrencyParans} object optional
 * @returns {string} string
 */
const formatToCurrency = (number, { locales, currency, fractionDigits } = {
    locales: constans_1.Locales.CO,
    currency: constans_1.Currency.COP,
    fractionDigits: 0,
}) => {
    return new Intl.NumberFormat(locales, {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: fractionDigits,
    }).format(number);
};
exports.formatToCurrency = formatToCurrency;
/**
 * Formatting a number to decimal
 * @param number
 * @param {IParams} object optional
 * @returns string
 */
const formatToDecimal = (number, { locales, fractionDigits } = {
    locales: constans_1.Locales.CO,
    fractionDigits: 0,
}) => {
    return new Intl.NumberFormat(locales, {
        style: 'decimal',
        minimumFractionDigits: fractionDigits,
    }).format(number);
};
exports.formatToDecimal = formatToDecimal;
/**
 * Formatting a number to percent
 * @param number
 * @param {IParams} object optional
 * @returns string
 */
const formatToPercent = (number, { locales, fractionDigits } = {
    locales: constans_1.Locales.CO,
    fractionDigits: 0,
}) => {
    return new Intl.NumberFormat(locales, {
        style: 'percent',
        minimumFractionDigits: fractionDigits,
    }).format(number);
};
exports.formatToPercent = formatToPercent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9saWIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUNBQStDO0FBRy9DOzs7OztHQUtHO0FBQ0ksTUFBTSxnQkFBZ0IsR0FBRyxDQUM5QixNQUFjLEVBQ2QsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLGNBQWMsS0FBc0I7SUFDdkQsT0FBTyxFQUFFLGtCQUFPLENBQUMsRUFBRTtJQUNuQixRQUFRLEVBQUUsbUJBQVEsQ0FBQyxHQUFHO0lBQ3RCLGNBQWMsRUFBRSxDQUFDO0NBQ2xCLEVBQ0QsRUFBRTtJQUNGLE9BQU8sSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRTtRQUNwQyxLQUFLLEVBQUUsVUFBVTtRQUNqQixRQUFRLEVBQUUsUUFBUTtRQUNsQixxQkFBcUIsRUFBRSxjQUFjO0tBQ3RDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDcEIsQ0FBQyxDQUFDO0FBYlcsUUFBQSxnQkFBZ0Isb0JBYTNCO0FBRUY7Ozs7O0dBS0c7QUFDSSxNQUFNLGVBQWUsR0FBRyxDQUM3QixNQUFjLEVBQ2QsRUFBRSxPQUFPLEVBQUUsY0FBYyxLQUFjO0lBQ3JDLE9BQU8sRUFBRSxrQkFBTyxDQUFDLEVBQUU7SUFDbkIsY0FBYyxFQUFFLENBQUM7Q0FDbEIsRUFDRCxFQUFFO0lBQ0YsT0FBTyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFO1FBQ3BDLEtBQUssRUFBRSxTQUFTO1FBQ2hCLHFCQUFxQixFQUFFLGNBQWM7S0FDdEMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNwQixDQUFDLENBQUM7QUFYVyxRQUFBLGVBQWUsbUJBVzFCO0FBRUY7Ozs7O0dBS0c7QUFDSSxNQUFNLGVBQWUsR0FBRyxDQUM3QixNQUFjLEVBQ2QsRUFBRSxPQUFPLEVBQUUsY0FBYyxLQUFjO0lBQ3JDLE9BQU8sRUFBRSxrQkFBTyxDQUFDLEVBQUU7SUFDbkIsY0FBYyxFQUFFLENBQUM7Q0FDbEIsRUFDRCxFQUFFO0lBQ0YsT0FBTyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFO1FBQ3BDLEtBQUssRUFBRSxTQUFTO1FBQ2hCLHFCQUFxQixFQUFFLGNBQWM7S0FDdEMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNwQixDQUFDLENBQUM7QUFYVyxRQUFBLGVBQWUsbUJBVzFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ3VycmVuY3ksIExvY2FsZXMgfSBmcm9tICcuL2NvbnN0YW5zJztcbmltcG9ydCB7IElDdXJyZW5jeVBhcmFucywgSVBhcmFtcyB9IGZyb20gJy4vaW50ZXJmYWNlcy9pbnRlcmZhY2VzJztcblxuLyoqXG4gKiBGb3JtYXR0aW5nIGEgY3VycmVuY3lcbiAqIEBwYXJhbSBudW1iZXJcbiAqIEBwYXJhbSB7SUN1cnJlbmN5UGFyYW5zfSBvYmplY3Qgb3B0aW9uYWxcbiAqIEByZXR1cm5zIHtzdHJpbmd9IHN0cmluZ1xuICovXG5leHBvcnQgY29uc3QgZm9ybWF0VG9DdXJyZW5jeSA9IChcbiAgbnVtYmVyOiBudW1iZXIsXG4gIHsgbG9jYWxlcywgY3VycmVuY3ksIGZyYWN0aW9uRGlnaXRzIH06IElDdXJyZW5jeVBhcmFucyA9IHtcbiAgICBsb2NhbGVzOiBMb2NhbGVzLkNPLFxuICAgIGN1cnJlbmN5OiBDdXJyZW5jeS5DT1AsXG4gICAgZnJhY3Rpb25EaWdpdHM6IDAsXG4gIH1cbikgPT4ge1xuICByZXR1cm4gbmV3IEludGwuTnVtYmVyRm9ybWF0KGxvY2FsZXMsIHtcbiAgICBzdHlsZTogJ2N1cnJlbmN5JyxcbiAgICBjdXJyZW5jeTogY3VycmVuY3ksXG4gICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiBmcmFjdGlvbkRpZ2l0cyxcbiAgfSkuZm9ybWF0KG51bWJlcik7XG59O1xuXG4vKipcbiAqIEZvcm1hdHRpbmcgYSBudW1iZXIgdG8gZGVjaW1hbFxuICogQHBhcmFtIG51bWJlclxuICogQHBhcmFtIHtJUGFyYW1zfSBvYmplY3Qgb3B0aW9uYWxcbiAqIEByZXR1cm5zIHN0cmluZ1xuICovXG5leHBvcnQgY29uc3QgZm9ybWF0VG9EZWNpbWFsID0gKFxuICBudW1iZXI6IG51bWJlcixcbiAgeyBsb2NhbGVzLCBmcmFjdGlvbkRpZ2l0cyB9OiBJUGFyYW1zID0ge1xuICAgIGxvY2FsZXM6IExvY2FsZXMuQ08sXG4gICAgZnJhY3Rpb25EaWdpdHM6IDAsXG4gIH1cbikgPT4ge1xuICByZXR1cm4gbmV3IEludGwuTnVtYmVyRm9ybWF0KGxvY2FsZXMsIHtcbiAgICBzdHlsZTogJ2RlY2ltYWwnLFxuICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogZnJhY3Rpb25EaWdpdHMsXG4gIH0pLmZvcm1hdChudW1iZXIpO1xufTtcblxuLyoqXG4gKiBGb3JtYXR0aW5nIGEgbnVtYmVyIHRvIHBlcmNlbnRcbiAqIEBwYXJhbSBudW1iZXJcbiAqIEBwYXJhbSB7SVBhcmFtc30gb2JqZWN0IG9wdGlvbmFsXG4gKiBAcmV0dXJucyBzdHJpbmdcbiAqL1xuZXhwb3J0IGNvbnN0IGZvcm1hdFRvUGVyY2VudCA9IChcbiAgbnVtYmVyOiBudW1iZXIsXG4gIHsgbG9jYWxlcywgZnJhY3Rpb25EaWdpdHMgfTogSVBhcmFtcyA9IHtcbiAgICBsb2NhbGVzOiBMb2NhbGVzLkNPLFxuICAgIGZyYWN0aW9uRGlnaXRzOiAwLFxuICB9XG4pID0+IHtcbiAgcmV0dXJuIG5ldyBJbnRsLk51bWJlckZvcm1hdChsb2NhbGVzLCB7XG4gICAgc3R5bGU6ICdwZXJjZW50JyxcbiAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IGZyYWN0aW9uRGlnaXRzLFxuICB9KS5mb3JtYXQobnVtYmVyKTtcbn07XG4iXX0=