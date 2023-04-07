import { EaseFunction } from "./types";

const easeOutCubic: EaseFunction = (x) => 1 - Math.pow(1 - x, 3);

export default easeOutCubic;
