import easeInElastic from ".";
import { ERROR_RANGE } from "../testUtils";

describe("easeInElastic", () => {
  test.each`
    input   | target
    ${0}    | ${0}
    ${0.25} | ${-0.005525}
    ${0.5}  | ${-0.015625}
    ${0.75} | ${0.08838835}
    ${1}    | ${1}
  `("should return $target for $input", ({ input, target }) => {
    expect(easeInElastic(input)).toBeLessThanOrEqual(target + ERROR_RANGE);
    expect(easeInElastic(input)).toBeGreaterThanOrEqual(target - ERROR_RANGE);
    // expect(easeInElastic(input)).toEqual(target);
  });
});
