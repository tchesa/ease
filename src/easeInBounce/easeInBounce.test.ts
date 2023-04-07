import easeInBounce from ".";
// import { ERROR_RANGE } from "../testUtils";

describe("easeInBounce", () => {
  test.each`
    input   | target
    ${0}    | ${0}
    ${0.25} | ${0.02734375}
    ${0.5}  | ${0.234375}
    ${0.75} | ${0.52734375}
    ${1}    | ${1}
  `("should return $target for $input", ({ input, target }) => {
    // expect(easeInBounce(input)).toBeLessThanOrEqual(target + ERROR_RANGE);
    // expect(easeInBounce(input)).toBeGreaterThanOrEqual(target - ERROR_RANGE);
    expect(easeInBounce(input)).toEqual(target);
  });
});
