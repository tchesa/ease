import easeInQuad from ".";
// import { ERROR_RANGE } from "../testUtils";

describe("easeInQuad", () => {
  test.each`
    input   | target
    ${0}    | ${0}
    ${0.25} | ${0.0625}
    ${0.5}  | ${0.25}
    ${0.75} | ${0.5625}
    ${1}    | ${1}
  `("should return $target for $input", ({ input, target }) => {
    // expect(easeInQuad(input)).toBeLessThanOrEqual(target + ERROR_RANGE);
    // expect(easeInQuad(input)).toBeGreaterThanOrEqual(target - ERROR_RANGE);
    expect(easeInQuad(input)).toEqual(target);
  });
});
