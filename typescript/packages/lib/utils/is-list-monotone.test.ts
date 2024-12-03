import { isListMonotone } from "./is-list-monotone";

describe("is-list-monotone", () => {
  it("should return true for increasing list", () => {
    const result = isListMonotone([1, 2, 3, 4]);
    expect(result).toBe(true);
  });

  it("should return true for decreasing list", () => {
    const result = isListMonotone([4, 3, 2, 1]);
    expect(result).toBe(true);
  });

  it("should return false for mixed list", () => {
    const result = isListMonotone([3, 5, 1]);
    expect(result).toBe(false);
  });
});
