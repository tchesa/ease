import easeInQuart from ".";
// import { ERROR_RANGE } from "../testUtils";

describe("easeInQuart", () => {
  test.each`
    input   | target
    ${0}    | ${0}
    ${0.25} | ${0.00390625}
    ${0.5}  | ${0.0625}
    ${0.75} | ${0.31640625}
    ${1}    | ${1}
  `("should return $target for $input", ({ input, target }) => {
    // expect(easeInQuart(input)).toBeLessThanOrEqual(target + ERROR_RANGE);
    // expect(easeInQuart(input)).toBeGreaterThanOrEqual(target - ERROR_RANGE);
    expect(easeInQuart(input)).toEqual(target);
  });
});
