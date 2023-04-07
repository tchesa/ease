import { EaseFunction } from "./types";

const easeOutSine: EaseFunction = (x) => Math.sin((x * Math.PI) / 2);

export default easeOutSine;
