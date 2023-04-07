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

## Contribute
To include a new easing function:
- Create a separated file for each easing function into `src` folder;
- include their export in `src/index.ts` file.
```ts
// ...
export { default as newEasingFunction } from "./newEasingFunction";
```

> Easing functions' implementation from https://easings.net/.
