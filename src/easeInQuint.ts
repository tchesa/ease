import { EaseFunction } from "./types";

const easeInQuint: EaseFunction = (x) => x * x * x * x * x;

export default easeInQuint;
