import { EasingFunction } from "../index";

const easeInCirc: EasingFunction = (x) => 1 - Math.sqrt(1 - Math.pow(x, 2));

export default easeInCirc;
