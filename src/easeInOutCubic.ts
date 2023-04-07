import { EasingFunction } from "./index";

const easeInOutCubic: EasingFunction = (x) =>
  x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;

export default easeInOutCubic;
