import easeInSine from ".";
import { ERROR_RANGE } from "../testUtils";

describe("easeInSine", () => {
  test.each`
    input   | target
    ${0}    | ${0}
    ${0.25} | ${0.0761204674}
    ${0.5}  | ${0.2928932188}
    ${0.75} | ${0.6173165676}
    ${1}    | ${1}
  `("should return $target for $input", ({ input, target }) => {
    expect(easeInSine(input)).toBeLessThanOrEqual(target + ERROR_RANGE);
    expect(easeInSine(input)).toBeGreaterThanOrEqual(target - ERROR_RANGE);
  });
});
