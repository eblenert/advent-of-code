import { getMedian } from "./median";

describe("median", () => {
  it("should return 3", () => {
    const array = [1, 2, 3, 4, 5];
    expect(getMedian(array)).toBe(3);
  });

  it("should return 5", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8];
    expect(getMedian(array)).toBe(5);
  });
});
