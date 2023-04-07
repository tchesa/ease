import { EasingFunction } from "../index";

const easeOutCirc: EasingFunction = (x) => Math.sqrt(1 - Math.pow(x - 1, 2));

export default easeOutCirc;
