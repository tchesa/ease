import { EasingFunction } from "../index";
import easeOutBounce from "../easeOutBounce";

const easeInBounce: EasingFunction = (x) => 1 - easeOutBounce(1 - x);

export default easeInBounce;
