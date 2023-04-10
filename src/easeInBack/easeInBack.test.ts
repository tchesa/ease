import easeInBack from ".";
import { ERROR_RANGE } from "../testUtils";

describe("easeInBack", () => {
  test.each`
    input   | target
    ${0}    | ${0}
    ${0.25} | ${-0.0641365625}
    ${0.5}  | ${-0.0876975}
    ${0.75} | ${0.1825903125}
    ${1}    | ${1}
  `("should return $target for $input", ({ input, target }) => {
    expect(easeInBack(input)).toBeLessThanOrEqual(target + ERROR_RANGE);
    expect(easeInBack(input)).toBeGreaterThanOrEqual(target - ERROR_RANGE);
  });
});
