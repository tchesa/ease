import { EaseFunction } from "./types";

const easeInOutSine: EaseFunction = (x) => -(Math.cos(Math.PI * x) - 1) / 2;

export default easeInOutSine;
