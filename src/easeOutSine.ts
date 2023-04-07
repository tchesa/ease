import { EasingFunction } from "./index";

const easeOutSine: EasingFunction = (x) => Math.sin((x * Math.PI) / 2);

export default easeOutSine;
