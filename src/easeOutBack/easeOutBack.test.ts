import easeOutBack from ".";
import { ERROR_RANGE } from "../testUtils";

describe("easeOutBack", () => {
  test.each`
    input   | target
    ${0}    | ${0}
    ${0.25} | ${0.8174096875}
    ${0.5}  | ${1.0876975}
    ${0.75} | ${1.0641365625}
    ${1}    | ${1}
  `("should return $target for $input", ({ input, target }) => {
    expect(easeOutBack(input)).toBeLessThanOrEqual(target + ERROR_RANGE);
    expect(easeOutBack(input)).toBeGreaterThanOrEqual(target - ERROR_RANGE);
  });
});
