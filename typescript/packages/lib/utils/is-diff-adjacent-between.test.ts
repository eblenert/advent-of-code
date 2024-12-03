import { isDiffAdjacentBetween } from "./is-diff-adjacent-between";

describe("is-diff-adjacent-between", () => {
  it("should return true when dif is between min and max", () => {
    const result = isDiffAdjacentBetween([7, 6, 4, 2, 1], 1, 3);
    expect(result).toBe(true);
  });

  it("should return false when dif is bigger than max", () => {
    const result = isDiffAdjacentBetween([1, 2, 7, 8, 9], 1, 3);
    expect(result).toBe(false);
  });

  it("should return false if two adjacent values are identical", () => {
    const result = isDiffAdjacentBetween([8, 6, 4, 4, 1], 1, 3);
    expect(result).toBe(false);
  });
});
