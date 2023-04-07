import { EasingFunction } from "../index";

const easeInOutQuint: EasingFunction = (x) =>
  x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2;

export default easeInOutQuint;
