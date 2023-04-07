import easeOutElastic from ".";
import { ERROR_RANGE } from "../testUtils";

describe("easeOutElastic", () => {
  test.each`
    input   | target
    ${0}    | ${0}
    ${0.25} | ${0.91161165}
    ${0.5}  | ${1.015625}
    ${0.75} | ${1.005524271}
    ${1}    | ${1}
  `("should return $target for $input", ({ input, target }) => {
    expect(easeOutElastic(input)).toBeLessThanOrEqual(target + ERROR_RANGE);
    expect(easeOutElastic(input)).toBeGreaterThanOrEqual(target - ERROR_RANGE);
    // expect(easeOutElastic(input)).toEqual(target);
  });
});
