import { EaseFunction } from "./types";

const easeInCirc: EaseFunction = (x) => 1 - Math.sqrt(1 - Math.pow(x, 2));

export default easeInCirc;
