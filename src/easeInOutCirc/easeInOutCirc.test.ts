import easeInOutCirc from ".";
import { ERROR_RANGE } from "../testUtils";

describe("easeInOutCirc", () => {
  test.each`
    input   | target
    ${0}    | ${0}
    ${0.25} | ${0.0669873}
    ${0.5}  | ${0.5}
    ${0.75} | ${0.9330127}
    ${1}    | ${1}
  `("should return $target for $input", ({ input, target }) => {
    expect(easeInOutCirc(input)).toBeLessThanOrEqual(target + ERROR_RANGE);
    expect(easeInOutCirc(input)).toBeGreaterThanOrEqual(target - ERROR_RANGE);
  });
});
