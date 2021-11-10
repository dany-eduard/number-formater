# Number Formatter

![GitHub package.json version](https://img.shields.io/github/package-json/v/dany-eduard/number-formater)
![NPM](https://img.shields.io/npm/l/number-formater)


[![NPM](https://nodei.co/npm/number-formater.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/number-formater/)


[**`number-formater`**](https://www.npmjs.com/package/number-formater) is a JavaScript library built to make it faster and more efficient to use the ECMAScript (Intl) API for number formatting.

## Install

```zsh
npm i number-formater
```

## Usage

My main idea is that this library will be used client-side in JavaScript projects (Angular, React, Vue, etc.) to display decimal numbers and format currencies accurately and precisely without writing too much repetitive code. However, it can also be used in Node projects.  

### Format currencies  

```ts
import { formatToCurrency } from 'number-formater'

const currency = formatToCurrency(988900);
console.log(currency) // $ 988.900


const currencyCOL = formatToCurrency(988900, {
  locales: 'es-CO',
  currency: 'COP',
  fractionDigits: 2,
});

console.log(currencyCOL); // $ 988.900,00


const currencyUS = formatToCurrency(988900, {
  locales: 'en-US',
  currency: 'USD',
  fractionDigits: 2,
});

console.log(currencyUS); // $988,900.00

```  

### Format percent

```ts
import { formatToPercent } from 'number-formater'

const percent = formatToPercent(0.9);
console.log(percent); // 90 %

```  

### Format decimal number

```ts
import { formatToDecimal } from 'number-formater'

const decimal = formatToDecimal(8277.0);
console.log(decimal); // 8.277

```  

## Contributions

This project is open source and is protected under the MIT license, you can feel free to fork it and create new custom features or contact me to work together.

## Source
- [Intl - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)
- [Intl.NumberFormat - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat)
- [Currency-list](https://github.dev/webplan-pro/currency-list/blob/main/src/currency-list.json)

## Inspiration
- [Darle formato a monedas con JavaScript - Tato](https://tato.la/darle-formato-a-monedas-con-javascript/)
