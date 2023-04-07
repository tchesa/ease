import easeOutQuint from ".";
// import { ERROR_RANGE } from "../testUtils";

describe("easeOutQuint", () => {
  test.each`
    input   | target
    ${0}    | ${0}
    ${0.25} | ${0.7626953125}
    ${0.5}  | ${0.96875}
    ${0.75} | ${0.9990234375}
    ${1}    | ${1}
  `("should return $target for $input", ({ input, target }) => {
    // expect(easeOutQuint(input)).toBeLessThanOrEqual(target + ERROR_RANGE);
    // expect(easeOutQuint(input)).toBeGreaterThanOrEqual(target - ERROR_RANGE);
    expect(easeOutQuint(input)).toEqual(target);
  });
});
