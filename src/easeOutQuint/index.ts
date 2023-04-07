import { EasingFunction } from "../index";

const easeOutQuint: EasingFunction = (x) => 1 - Math.pow(1 - x, 5);

export default easeOutQuint;
