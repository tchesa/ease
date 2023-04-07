import { EaseFunction } from "./types";

const easeInExpo: EaseFunction = (x) =>
  x === 0 ? 0 : Math.pow(2, 10 * x - 10);

export default easeInExpo;
