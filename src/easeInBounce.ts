import { EaseFunction } from "./types";
import easeOutBounce from "./easeOutBounce";

const easeInBounce: EaseFunction = (x) => 1 - easeOutBounce(1 - x);

export default easeInBounce;
