import { EasingFunction } from "./index";

const easeInSine: EasingFunction = (x) => 1 - Math.cos((x * Math.PI) / 2);

export default easeInSine;
