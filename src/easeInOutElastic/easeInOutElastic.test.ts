import easeInOutElastic from ".";
import { ERROR_RANGE } from "../testUtils";

describe("easeInOutElastic", () => {
  test.each`
    input   | target
    ${0}    | ${0}
    ${0.25} | ${0.011967}
    ${0.5}  | ${0.5}
    ${0.75} | ${0.98803}
    ${1}    | ${1}
  `("should return $target for $input", ({ input, target }) => {
    expect(easeInOutElastic(input)).toBeLessThanOrEqual(target + ERROR_RANGE);
    expect(easeInOutElastic(input)).toBeGreaterThanOrEqual(
      target - ERROR_RANGE
    );
  });
});
