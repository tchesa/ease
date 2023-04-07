import { EaseFunction } from "./types";

const easeOutQuad: EaseFunction = (x) => 1 - (1 - x) * (1 - x);

export default easeOutQuad;
