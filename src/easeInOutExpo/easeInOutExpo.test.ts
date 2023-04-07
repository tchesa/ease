import easeInOutExpo from ".";
import { ERROR_RANGE } from "../testUtils";

describe("easeInOutExpo", () => {
  test.each`
    input   | target
    ${0}    | ${0}
    ${0.25} | ${0.015625}
    ${0.5}  | ${0.5}
    ${0.75} | ${0.984375}
    ${1}    | ${1}
  `("should return $target for $input", ({ input, target }) => {
    // expect(easeInOutExpo(input)).toBeLessThanOrEqual(target + ERROR_RANGE);
    // expect(easeInOutExpo(input)).toBeGreaterThanOrEqual(
    //   target - ERROR_RANGE
    // );
    expect(easeInOutExpo(input)).toEqual(target);
  });
});
