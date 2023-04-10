import easeInOutCubic from ".";
import { ERROR_RANGE } from "../testUtils";

describe("easeInOutCubic", () => {
  test.each`
    input   | target
    ${0}    | ${0}
    ${0.25} | ${0.0625}
    ${0.5}  | ${0.5}
    ${0.75} | ${0.9375}
    ${1}    | ${1}
  `("should return $target for $input", ({ input, target }) => {
    expect(easeInOutCubic(input)).toBeLessThanOrEqual(target + ERROR_RANGE);
    expect(easeInOutCubic(input)).toBeGreaterThanOrEqual(target - ERROR_RANGE);
  });
});
