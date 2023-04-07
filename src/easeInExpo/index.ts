import { EasingFunction } from "../index";

const easeInExpo: EasingFunction = (x) =>
  x === 0 ? 0 : Math.pow(2, 10 * x - 10);

export default easeInExpo;
