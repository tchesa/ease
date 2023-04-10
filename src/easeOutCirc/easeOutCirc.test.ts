import easeOutCirc from ".";
import { ERROR_RANGE } from "../testUtils";

describe("easeOutCirc", () => {
  test.each`
    input   | target
    ${0}    | ${0}
    ${0.25} | ${0.6614378277}
    ${0.5}  | ${0.8660254037}
    ${0.75} | ${0.9682458365}
    ${1}    | ${1}
  `("should return $target for $input", ({ input, target }) => {
    expect(easeOutCirc(input)).toBeLessThanOrEqual(target + ERROR_RANGE);
    expect(easeOutCirc(input)).toBeGreaterThanOrEqual(target - ERROR_RANGE);
  });
});
