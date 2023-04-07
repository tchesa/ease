import { EaseFunction } from "./types";

const easeOutQuint: EaseFunction = (x) => 1 - Math.pow(1 - x, 5);

export default easeOutQuint;
