import easeInOutQuad from ".";
import { ERROR_RANGE } from "../testUtils";

describe("easeInOutQuad", () => {
  test.each`
    input   | target
    ${0}    | ${0}
    ${0.25} | ${0.125}
    ${0.5}  | ${0.5}
    ${0.75} | ${0.875}
    ${1}    | ${1}
  `("should return $target for $input", ({ input, target }) => {
    expect(easeInOutQuad(input)).toBeLessThanOrEqual(target + ERROR_RANGE);
    expect(easeInOutQuad(input)).toBeGreaterThanOrEqual(target - ERROR_RANGE);
  });
});
