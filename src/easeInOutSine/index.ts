import { EasingFunction } from "../index";

const easeInOutSine: EasingFunction = (x) => -(Math.cos(Math.PI * x) - 1) / 2;

export default easeInOutSine;
