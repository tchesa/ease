[![npm version](https://img.shields.io/npm/v/@tchesa/ease)](https://www.npmjs.com/package/@tchesa/ease)
[![Coverage Status](https://coveralls.io/repos/github/tchesa/ease/badge.svg)](https://coveralls.io/github/tchesa/ease)

# @tchesa/ease

A tiny javascript easing package with no dependencies.

## Install

```sh
npm i @tchesa/ease
```

## Usage
```js
import { easeOutCubic } from '@tchesa/ease'

console.log(easeOutCubic(0.5)); // -> 0.875
```

## Methods
- [`easeInSine`](https://github.com/tchesa/ease/tree/master/src/easeInSine#readme)
- [`easeOutSine`](https://github.com/tchesa/ease/tree/master/src/easeOutSine#readme)
- [`easeInOutSine`](https://github.com/tchesa/ease/tree/master/src/easeInOutSine#readme)
- [`easeInQuad`](https://github.com/tchesa/ease/tree/master/src/easeInQuad#readme)
- [`easeOutQuad`](https://github.com/tchesa/ease/tree/master/src/easeOutQuad#readme)
- [`easeInOutQuad`](https://github.com/tchesa/ease/tree/master/src/easeInOutQuad#readme)
- [`easeInCubic`](https://github.com/tchesa/ease/tree/master/src/easeInCubic#readme)
- [`easeOutCubic`](https://github.com/tchesa/ease/tree/master/src/easeOutCubic#readme)
- [`easeInOutCubic`](https://github.com/tchesa/ease/tree/master/src/easeInOutCubic#readme)
- [`easeInQuart`](https://github.com/tchesa/ease/tree/master/src/easeInQuart#readme)
- [`easeOutQuart`](https://github.com/tchesa/ease/tree/master/src/easeOutQuart#readme)
- [`easeInOutQuart`](https://github.com/tchesa/ease/tree/master/src/easeInOutQuart#readme)
- [`easeInQuint`](https://github.com/tchesa/ease/tree/master/src/easeInQuint#readme)
- [`easeOutQuint`](https://github.com/tchesa/ease/tree/master/src/easeOutQuint#readme)
- [`easeInOutQuint`](https://github.com/tchesa/ease/tree/master/src/easeInOutQuint#readme)
- [`easeInExpo`](https://github.com/tchesa/ease/tree/master/src/easeInExpo#readme)
- [`easeOutExpo`](https://github.com/tchesa/ease/tree/master/src/easeOutExpo#readme)
- [`easeInOutExpo`](https://github.com/tchesa/ease/tree/master/src/easeInOutExpo#readme)
- [`easeInCirc`](https://github.com/tchesa/ease/tree/master/src/easeInCirc#readme)
- [`easeOutCirc`](https://github.com/tchesa/ease/tree/master/src/easeOutCirc#readme)
- [`easeInOutCirc`](https://github.com/tchesa/ease/tree/master/src/easeInOutCirc#readme)
- [`easeInBack`](https://github.com/tchesa/ease/tree/master/src/easeInBack#readme)
- [`easeOutBack`](https://github.com/tchesa/ease/tree/master/src/easeOutBack#readme)
- [`easeInOutBack`](https://github.com/tchesa/ease/tree/master/src/easeInOutBack#readme)
- [`easeInElastic`](https://github.com/tchesa/ease/tree/master/src/easeInElastic#readme)
- [`easeOutElastic`](https://github.com/tchesa/ease/tree/master/src/easeOutElastic#readme)
- [`easeInOutElastic`](https://github.com/tchesa/ease/tree/master/src/easeInOutElastic#readme)
- [`easeInBounce`](https://github.com/tchesa/ease/tree/master/src/easeInBounce#readme)
- [`easeOutBounce`](https://github.com/tchesa/ease/tree/master/src/easeOutBounce#readme)
- [`easeInOutBounce`](https://github.com/tchesa/ease/tree/master/src/easeInOutBounce#readme)

## Contribute
To include a new easing function:
- Create a `index.ts` inside a new folder for each easing function inside `src`, e.g. `src/newEasingFunction/index.ts`;
- include their export in `src/index.ts` file.
```ts
// ...
export { default as newEasingFunction } from "./newEasingFunction";
```

> Easing functions' implementation from See https://easings.net/.
