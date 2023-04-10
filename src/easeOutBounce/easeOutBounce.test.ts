import easeOutBounce from ".";
import { ERROR_RANGE } from "../testUtils";

describe("easeOutBounce", () => {
  test.each`
    input   | target
    ${0}    | ${0}
    ${0.25} | ${0.47265625}
    ${0.5}  | ${0.765625}
    ${0.75} | ${0.97265625}
    ${1}    | ${1}
  `("should return $target for $input", ({ input, target }) => {
    expect(easeOutBounce(input)).toBeLessThanOrEqual(target + ERROR_RANGE);
    expect(easeOutBounce(input)).toBeGreaterThanOrEqual(target - ERROR_RANGE);
  });
});
