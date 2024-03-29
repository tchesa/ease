import { EasingFunction } from "../index";
import easeOutBounce from "../easeOutBounce";

const easeInOutBounce: EasingFunction = (x) => {
  return x < 0.5
    ? (1 - easeOutBounce(1 - 2 * x)) / 2
    : (1 + easeOutBounce(2 * x - 1)) / 2;
};

export default easeInOutBounce;
