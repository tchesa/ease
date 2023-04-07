import { EasingFunction } from "../index";

const easeOutBack: EasingFunction = (x) => {
  const c1 = 1.70158;
  const c3 = c1 + 1;

  return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);
};

export default easeOutBack;
