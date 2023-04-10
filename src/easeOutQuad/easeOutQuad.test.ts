import easeOutQuad from ".";
import { ERROR_RANGE } from "../testUtils";

describe("easeOutQuad", () => {
  test.each`
    input   | target
    ${0}    | ${0}
    ${0.25} | ${0.4375}
    ${0.5}  | ${0.75}
    ${0.75} | ${0.9375}
    ${1}    | ${1}
  `("should return $target for $input", ({ input, target }) => {
    expect(easeOutQuad(input)).toBeLessThanOrEqual(target + ERROR_RANGE);
    expect(easeOutQuad(input)).toBeGreaterThanOrEqual(target - ERROR_RANGE);
  });
});
