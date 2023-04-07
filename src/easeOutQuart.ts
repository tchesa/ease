import { EasingFunction } from "./index";

const easeOutQuart: EasingFunction = (x) => 1 - Math.pow(1 - x, 4);

export default easeOutQuart;
