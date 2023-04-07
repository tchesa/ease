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
- [`easeInSine`](https://www.github.com/tchesa/ease/src/easeInSine#readme)
- [`easeOutSine`](https://www.github.com/tchesa/ease/src/easeOutSine#readme)
- [`easeInOutSine`](https://www.github.com/tchesa/ease/src/easeInOutSine#readme)
- [`easeInQuad`](https://www.github.com/tchesa/ease/src/easeInQuad#readme)
- [`easeOutQuad`](https://www.github.com/tchesa/ease/src/easeOutQuad#readme)
- [`easeInOutQuad`](https://www.github.com/tchesa/ease/src/easeInOutQuad#readme)
- [`easeInCubic`](https://www.github.com/tchesa/ease/src/easeInCubic#readme)
- [`easeOutCubic`](https://www.github.com/tchesa/ease/src/easeOutCubic#readme)
- [`easeInOutCubic`](https://www.github.com/tchesa/ease/src/easeInOutCubic#readme)
- [`easeInQuart`](https://www.github.com/tchesa/ease/src/easeInQuart#readme)
- [`easeOutQuart`](https://www.github.com/tchesa/ease/src/easeOutQuart#readme)
- [`easeInOutQuart`](https://www.github.com/tchesa/ease/src/easeInOutQuart#readme)
- [`easeInQuint`](https://www.github.com/tchesa/ease/src/easeInQuint#readme)
- [`easeOutQuint`](https://www.github.com/tchesa/ease/src/easeOutQuint#readme)
- [`easeInOutQuint`](https://www.github.com/tchesa/ease/src/easeInOutQuint#readme)
- [`easeInExpo`](https://www.github.com/tchesa/ease/src/easeInExpo#readme)
- [`easeOutExpo`](https://www.github.com/tchesa/ease/src/easeOutExpo#readme)
- [`easeInOutExpo`](https://www.github.com/tchesa/ease/src/easeInOutExpo#readme)
- [`easeInCirc`](https://www.github.com/tchesa/ease/src/easeInCirc#readme)
- [`easeOutCirc`](https://www.github.com/tchesa/ease/src/easeOutCirc#readme)
- [`easeInOutCirc`](https://www.github.com/tchesa/ease/src/easeInOutCirc#readme)
- [`easeInBack`](https://www.github.com/tchesa/ease/src/easeInBack#readme)
- [`easeOutBack`](https://www.github.com/tchesa/ease/src/easeOutBack#readme)
- [`easeInOutBack`](https://www.github.com/tchesa/ease/src/easeInOutBack#readme)
- [`easeInElastic`](https://www.github.com/tchesa/ease/src/easeInElastic#readme)
- [`easeOutElastic`](https://www.github.com/tchesa/ease/src/easeOutElastic#readme)
- [`easeInOutElastic`](https://www.github.com/tchesa/ease/src/easeInOutElastic#readme)
- [`easeInBounce`](https://www.github.com/tchesa/ease/src/easeInBounce#readme)
- [`easeOutBounce`](https://www.github.com/tchesa/ease/src/easeOutBounce#readme)
- [`easeInOutBounce`](https://www.github.com/tchesa/ease/src/easeInOutBounce#readme)

## Contribute
To include a new easing function:
- Create a `index.ts` inside a new folder for each easing function inside `src`, e.g. `src/newEasingFunction/index.ts`;
- include their export in `src/index.ts` file.
```ts
// ...
export { default as newEasingFunction } from "./newEasingFunction";
```

> Easing functions' implementation from See https://easings.net/.
