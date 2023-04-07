import { EaseFunction } from "./types";

const easeInOutQuart: EaseFunction = (x) =>
  x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2;

export default easeInOutQuart;
