import easeInOutBounce from ".";
// import { ERROR_RANGE } from "../testUtils";

describe("easeInOutBounce", () => {
  test.each`
    input   | target
    ${0}    | ${0}
    ${0.25} | ${0.1171875}
    ${0.5}  | ${0.5}
    ${0.75} | ${0.8828125}
    ${1}    | ${1}
  `("should return $target for $input", ({ input, target }) => {
    // expect(easeInOutBounce(input)).toBeLessThanOrEqual(target + 0);
    // expect(easeInOutBounce(input)).toBeGreaterThanOrEqual(target - 0);
    expect(easeInOutBounce(input)).toEqual(target);
  });
});
