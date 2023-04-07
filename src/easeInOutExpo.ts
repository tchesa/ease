import { EaseFunction } from "./types";

const easeInOutExpo: EaseFunction = (x) =>
  x === 0
    ? 0
    : x === 1
    ? 1
    : x < 0.5
    ? Math.pow(2, 20 * x - 10) / 2
    : (2 - Math.pow(2, -20 * x + 10)) / 2;

export default easeInOutExpo;
