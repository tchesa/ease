import { EasingFunction } from "./index";

const easeOutCirc: EasingFunction = (x) =>
  1 - Math.sqrt(1 - Math.pow(x - 1, 2));

export default easeOutCirc;
