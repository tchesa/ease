import { EaseFunction } from "./types";

const easeInBack: EaseFunction = (x) => {
  const c1 = 1.70158;
  const c3 = c1 + 1;

  return c3 * x * x * x - c1 * x * x;
};

export default easeInBack;
