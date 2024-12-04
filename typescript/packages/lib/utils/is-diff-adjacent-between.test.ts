import {
  countDiffAdjacentBetween,
  isDiffAdjacentBetween,
} from "./is-diff-adjacent-between";

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

describe("count-diff-adjacent-between", () => {
  it("should return 1", () => {
    const result = countDiffAdjacentBetween(
      [47, 49, 52, 53, 55, 57, 60, 65],
      1,
      3
    );
    expect(result).toBe(1);
  });

  it("should return 2", () => {
    const result = countDiffAdjacentBetween([82, 85, 89, 90, 91, 93, 99], 1, 3);
    expect(result).toBe(2);
  });
});
