import easeInCubic from ".";
// import { ERROR_RANGE } from "../testUtils";

describe("easeInCubic", () => {
  test.each`
    input   | target
    ${0}    | ${0}
    ${0.25} | ${0.015625}
    ${0.5}  | ${0.125}
    ${0.75} | ${0.421875}
    ${1}    | ${1}
  `("should return $target for $input", ({ input, target }) => {
    // expect(easeInCubic(input)).toBeLessThanOrEqual(target + ERROR_RANGE);
    // expect(easeInCubic(input)).toBeGreaterThanOrEqual(target - ERROR_RANGE);
    expect(easeInCubic(input)).toEqual(target);
  });
});
