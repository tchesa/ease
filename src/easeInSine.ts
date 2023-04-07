import { EaseFunction } from "./types";

const easeInSine: EaseFunction = (x) => 1 - Math.cos((x * Math.PI) / 2);

export default easeInSine;
