import { isSafeRemovingOneLevel } from "./is-safe-removing-one-level";

describe("is-safe-removing-one-level", () => {
  it("should return true", () => {
    const result = isSafeRemovingOneLevel([1, 3, 2, 4, 5]);
    expect(result).toBe(true);
  });
});
