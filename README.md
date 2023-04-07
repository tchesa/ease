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
- [`easeInSine`](https://easings.net/#easeInSine)
- [`easeOutSine`](https://easings.net/#easeOutSine)
- [`easeInOutSine`](https://easings.net/#easeInOutSine)
- [`easeInQuad`](https://easings.net/#easeInQuad)
- [`easeOutQuad`](https://easings.net/#easeOutQuad)
- [`easeInOutQuad`](https://easings.net/#easeInOutQuad)
- [`easeInCubic`](https://easings.net/#easeInCubic)
- [`easeOutCubic`](https://easings.net/#easeOutCubic)
- [`easeInOutCubic`](https://easings.net/#easeInOutCubic)
- [`easeInQuart`](https://easings.net/#easeInQuart)
- [`easeOutQuart`](https://easings.net/#easeOutQuart)
- [`easeInOutQuart`](https://easings.net/#easeInOutQuart)
- [`easeInQuint`](https://easings.net/#easeInQuint)
- [`easeOutQuint`](https://easings.net/#easeOutQuint)
- [`easeInOutQuint`](https://easings.net/#easeInOutQuint)
- [`easeInExpo`](https://easings.net/#easeInExpo)
- [`easeOutExpo`](https://easings.net/#easeOutExpo)
- [`easeInOutExpo`](https://easings.net/#easeInOutExpo)
- [`easeInCirc`](https://easings.net/#easeInCirc)
- [`easeOutCirc`](https://easings.net/#easeOutCirc)
- [`easeInOutCirc`](https://easings.net/#easeInOutCirc)
- [`easeInBack`](https://easings.net/#easeInBack)
- [`easeOutBack`](https://easings.net/#easeOutBack)
- [`easeInOutBack`](https://easings.net/#easeInOutBack)
- [`easeInElastic`](https://easings.net/#easeInElastic)
- [`easeOutElastic`](https://easings.net/#easeOutElastic)
- [`easeInOutElastic`](https://easings.net/#easeInOutElastic)
- [`easeInBounce`](https://easings.net/#easeInBounce)
- [`easeOutBounce`](https://easings.net/#easeOutBounce)
- [`easeInOutBounce`](https://easings.net/#easeInOutBounce)

## Contribute
To include a new easing function:
- Create a separated file for each easing function into `src` folder;
- include their export in `src/index.ts` file.
```ts
// ...
export { default as newEasingFunction } from "./newEasingFunction";
```

> Easing functions' implementation from https://easings.net/.
