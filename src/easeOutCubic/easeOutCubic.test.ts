import easeOutCubic from ".";
import { ERROR_RANGE } from "../testUtils";

describe("easeOutCubic", () => {
  test.each`
    input   | target
    ${0}    | ${0}
    ${0.25} | ${0.578125}
    ${0.5}  | ${0.875}
    ${0.75} | ${0.984375}
    ${1}    | ${1}
  `("should return $target for $input", ({ input, target }) => {
    expect(easeOutCubic(input)).toBeLessThanOrEqual(target + ERROR_RANGE);
    expect(easeOutCubic(input)).toBeGreaterThanOrEqual(target - ERROR_RANGE);
  });
});
