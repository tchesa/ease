import easeInOutBack from ".";
// import { ERROR_RANGE } from "../testUtils";

describe("easeInOutBack", () => {
  test.each`
    input   | target
    ${0}    | ${0}
    ${0.25} | ${-0.09968184375}
    ${0.5}  | ${0.5}
    ${0.75} | ${1.09968184375}
    ${1}    | ${1}
  `("should return $target for $input", ({ input, target }) => {
    expect(easeInOutBack(input)).toBeLessThanOrEqual(target + 0);
    expect(easeInOutBack(input)).toBeGreaterThanOrEqual(target - 0);
    // expect(easeInOutBack(input)).toEqual(target);
  });
});
