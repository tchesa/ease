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
- [`easeInSine`](See https://easings.net/#easeInSine)
- [`easeOutSine`](See https://easings.net/#easeOutSine)
- [`easeInOutSine`](See https://easings.net/#easeInOutSine)
- [`easeInQuad`](See https://easings.net/#easeInQuad)
- [`easeOutQuad`](See https://easings.net/#easeOutQuad)
- [`easeInOutQuad`](See https://easings.net/#easeInOutQuad)
- [`easeInCubic`](See https://easings.net/#easeInCubic)
- [`easeOutCubic`](See https://easings.net/#easeOutCubic)
- [`easeInOutCubic`](See https://easings.net/#easeInOutCubic)
- [`easeInQuart`](See https://easings.net/#easeInQuart)
- [`easeOutQuart`](See https://easings.net/#easeOutQuart)
- [`easeInOutQuart`](See https://easings.net/#easeInOutQuart)
- [`easeInQuint`](See https://easings.net/#easeInQuint)
- [`easeOutQuint`](See https://easings.net/#easeOutQuint)
- [`easeInOutQuint`](See https://easings.net/#easeInOutQuint)
- [`easeInExpo`](See https://easings.net/#easeInExpo)
- [`easeOutExpo`](See https://easings.net/#easeOutExpo)
- [`easeInOutExpo`](See https://easings.net/#easeInOutExpo)
- [`easeInCirc`](See https://easings.net/#easeInCirc)
- [`easeOutCirc`](See https://easings.net/#easeOutCirc)
- [`easeInOutCirc`](See https://easings.net/#easeInOutCirc)
- [`easeInBack`](See https://easings.net/#easeInBack)
- [`easeOutBack`](See https://easings.net/#easeOutBack)
- [`easeInOutBack`](See https://easings.net/#easeInOutBack)
- [`easeInElastic`](See https://easings.net/#easeInElastic)
- [`easeOutElastic`](See https://easings.net/#easeOutElastic)
- [`easeInOutElastic`](See https://easings.net/#easeInOutElastic)
- [`easeInBounce`](See https://easings.net/#easeInBounce)
- [`easeOutBounce`](See https://easings.net/#easeOutBounce)
- [`easeInOutBounce`](See https://easings.net/#easeInOutBounce)

## Contribute
To include a new easing function:
- Create a `index.ts` inside a new folder for each easing function inside `src`, e.g. `src/newEasingFunction/index.ts`;
- include their export in `src/index.ts` file.
```ts
// ...
export { default as newEasingFunction } from "./newEasingFunction";
```

> Easing functions' implementation from See https://easings.net/.
