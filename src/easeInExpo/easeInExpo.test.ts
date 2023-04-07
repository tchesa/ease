import easeInExpo from ".";
import { ERROR_RANGE } from "../testUtils";

describe("easeInExpo", () => {
  test.each`
    input   | target
    ${0}    | ${0}
    ${0.25} | ${0.005525}
    ${0.5}  | ${0.03125}
    ${0.75} | ${0.1767767}
    ${1}    | ${1}
  `("should return $target for $input", ({ input, target }) => {
    expect(easeInExpo(input)).toBeLessThanOrEqual(target + ERROR_RANGE);
    expect(easeInExpo(input)).toBeGreaterThanOrEqual(target - ERROR_RANGE);
    // expect(easeInExpo(input)).toEqual(target);
  });
});
