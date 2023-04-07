import { EaseFunction } from "./types";

const easeOutCirc: EaseFunction = (x) => 1 - Math.sqrt(1 - Math.pow(x - 1, 2));

export default easeOutCirc;
