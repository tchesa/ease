import { EaseFunction } from "./types";

const easeOutExpo: EaseFunction = (x) =>
  x === 1 ? 1 : 1 - Math.pow(2, -10 * x);

export default easeOutExpo;
