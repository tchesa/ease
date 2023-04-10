import easeInOutSine from ".";
import { ERROR_RANGE } from "../testUtils";

describe("easeInOutSine", () => {
  test.each`
    input   | target
    ${0}    | ${0}
    ${0.25} | ${0.1464466}
    ${0.5}  | ${0.5}
    ${0.75} | ${0.85355339}
    ${1}    | ${1}
  `("should return $target for $input", ({ input, target }) => {
    expect(easeInOutSine(input)).toBeLessThanOrEqual(target + ERROR_RANGE);
    expect(easeInOutSine(input)).toBeGreaterThanOrEqual(target - ERROR_RANGE);
  });
});
