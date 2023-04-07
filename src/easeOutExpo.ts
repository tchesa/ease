import { EasingFunction } from "./index";

const easeOutExpo: EasingFunction = (x) =>
  x === 1 ? 1 : 1 - Math.pow(2, -10 * x);

export default easeOutExpo;
