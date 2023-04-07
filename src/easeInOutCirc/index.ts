import { EasingFunction } from "../index";

const easeInOutCirc: EasingFunction = (x) =>
  x < 0.5
    ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2
    : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2;

export default easeInOutCirc;
