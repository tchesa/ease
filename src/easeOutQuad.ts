import { EasingFunction } from "./index";

const easeOutQuad: EasingFunction = (x) => 1 - (1 - x) * (1 - x);

export default easeOutQuad;
