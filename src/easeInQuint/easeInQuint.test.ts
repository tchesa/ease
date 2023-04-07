import easeInQuint from ".";
// import { ERROR_RANGE } from "../testUtils";

describe("easeInQuint", () => {
  test.each`
    input   | target
    ${0}    | ${0}
    ${0.25} | ${0.0009765625}
    ${0.5}  | ${0.03125}
    ${0.75} | ${0.2373046875}
    ${1}    | ${1}
  `("should return $target for $input", ({ input, target }) => {
    // expect(easeInQuint(input)).toBeLessThanOrEqual(target + ERROR_RANGE);
    // expect(easeInQuint(input)).toBeGreaterThanOrEqual(target - ERROR_RANGE);
    expect(easeInQuint(input)).toEqual(target);
  });
});
