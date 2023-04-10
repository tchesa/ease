import easeInCirc from ".";
import { ERROR_RANGE } from "../testUtils";

describe("easeInCirc", () => {
  test.each`
    input   | target
    ${0}    | ${0}
    ${0.25} | ${0.03175416}
    ${0.5}  | ${0.13397459}
    ${0.75} | ${0.33856217}
    ${1}    | ${1}
  `("should return $target for $input", ({ input, target }) => {
    expect(easeInCirc(input)).toBeLessThanOrEqual(target + ERROR_RANGE);
    expect(easeInCirc(input)).toBeGreaterThanOrEqual(target - ERROR_RANGE);
  });
});
