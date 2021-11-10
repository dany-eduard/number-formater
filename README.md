# number-ormater

**number-formater** is a JavaScript library built to make it faster and more efficient to use the ECMAScript (Intl) API for number formatting.

## Install

```zsh
npm i @dany-eduard/number-formater
```

## Usage

My main idea is that this library will be used client-side in JavaScript projects (Angular, React, Vue, etc.) to display decimal numbers and format currencies accurately and precisely without writing too much repetitive code. However, it can also be used in Node projects.  

### Format currencies  

```ts
import { formatToCurrency } from '@dany-eduard/number-formater'

const price = formatToCurrency({
  locales: 'es-CO',
  currency: 'COP',
  fractionDigits: 2,
  number: 2199900,
})

```  

### Format percent

```ts
import { formatToPercent } from '@dany-eduard/number-formater'

const value = formatToPercent({
  locales: 'es-CO',
  fractionDigits: 2,
  number: 848,
})

```  

### Format decimal number

```ts
import { formatToDecimal } from '@dany-eduard/number-formater'

const value = formatToDecimal({
  locales: 'es-CO',
  fractionDigits: 4,
  number: 84.8,
})

```  

## Contributions

This project is open source and is protected under the MIT license, you can feel free to fork it and create new custom features or contact me to work together.

## Source
- [Intl - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)
- [Intl.NumberFormat - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat)
- [Currency-list](https://github.dev/webplan-pro/currency-list/blob/main/src/currency-list.json)

## Impiration
- [Darle formato a monedas con JavaScript - Tato](https://tato.la/darle-formato-a-monedas-con-javascript/)
