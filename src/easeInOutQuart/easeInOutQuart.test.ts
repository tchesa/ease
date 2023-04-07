import easeInOutQuart from ".";
// import { ERROR_RANGE } from "../testUtils";

describe("easeInOutQuart", () => {
  test.each`
    input   | target
    ${0}    | ${0}
    ${0.25} | ${0.03125}
    ${0.5}  | ${0.5}
    ${0.75} | ${0.96875}
    ${1}    | ${1}
  `("should return $target for $input", ({ input, target }) => {
    // expect(easeInOutQuart(input)).toBeLessThanOrEqual(target + ERROR_RANGE);
    // expect(easeInOutQuart(input)).toBeGreaterThanOrEqual(
    //   target - ERROR_RANGE
    // );
    expect(easeInOutQuart(input)).toEqual(target);
  });
});
