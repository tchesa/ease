import easeOutQuart from ".";
// import { ERROR_RANGE } from "../testUtils";

describe("easeOutQuart", () => {
  test.each`
    input   | target
    ${0}    | ${0}
    ${0.25} | ${0.68359375}
    ${0.5}  | ${0.9375}
    ${0.75} | ${0.99609375}
    ${1}    | ${1}
  `("should return $target for $input", ({ input, target }) => {
    // expect(easeOutQuart(input)).toBeLessThanOrEqual(target + ERROR_RANGE);
    // expect(easeOutQuart(input)).toBeGreaterThanOrEqual(target - ERROR_RANGE);
    expect(easeOutQuart(input)).toEqual(target);
  });
});
