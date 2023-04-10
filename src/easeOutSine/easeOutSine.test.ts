import easeOutSine from ".";
import { ERROR_RANGE } from "../testUtils";

describe("easeOutSine", () => {
  test.each`
    input   | target
    ${0}    | ${0}
    ${0.25} | ${0.382683432365}
    ${0.5}  | ${0.707106781186}
    ${0.75} | ${0.923879532511}
    ${1}    | ${1}
  `("should return $target for $input", ({ input, target }) => {
    expect(easeOutSine(input)).toBeLessThanOrEqual(target + ERROR_RANGE);
    expect(easeOutSine(input)).toBeGreaterThanOrEqual(target - ERROR_RANGE);
  });
});
