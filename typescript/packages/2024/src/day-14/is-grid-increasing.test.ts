import { printGrid } from ".";
import {
  getFirstAndLastRobotPxOnLine,
  isGridIncreasing,
} from "./is-grid-increasing";

describe("is-grid-increasing", () => {
  it("should do stuff", () => {
    let grid = new Array(23).fill(0).map(() => new Array(25).fill(0));
    // expect(isGridIncreasing(grid)).toBe(true);
  });
});

describe("get-first-and-last", () => {
  it("should return the same value", () => {
    const line = [0, 0, 0, 2, 0, 0, 0];
    const [first, last] = getFirstAndLastRobotPxOnLine(line);
    expect(first).toBe(last);
  });

  it("should return 0 and 6", () => {
    const line = [1, 0, 0, 2, 0, 0, 1];
    const [first, last] = getFirstAndLastRobotPxOnLine(line);
    expect(first).toBe(0);
    expect(last).toBe(6);
  });
});
