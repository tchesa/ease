import easeOutExpo from ".";
import { ERROR_RANGE } from "../testUtils";

describe("easeOutExpo", () => {
  test.each`
    input   | target
    ${0}    | ${0}
    ${0.25} | ${0.8232233}
    ${0.5}  | ${0.96875}
    ${0.75} | ${0.99447572827}
    ${1}    | ${1}
  `("should return $target for $input", ({ input, target }) => {
    expect(easeOutExpo(input)).toBeLessThanOrEqual(target + ERROR_RANGE);
    expect(easeOutExpo(input)).toBeGreaterThanOrEqual(target - ERROR_RANGE);
  });
});
