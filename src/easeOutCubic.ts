import { EasingFunction } from "./index";

const easeOutCubic: EasingFunction = (x) => 1 - Math.pow(1 - x, 3);

export default easeOutCubic;
