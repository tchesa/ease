import { EaseFunction } from "./types";

const easeOutQuart: EaseFunction = (x) => 1 - Math.pow(1 - x, 4);

export default easeOutQuart;
