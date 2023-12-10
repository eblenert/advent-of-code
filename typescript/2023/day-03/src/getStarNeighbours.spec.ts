import { getStarNeighbours } from "./getStarNeighbours";

describe("getStarNeighbours", () => {
  it.each([
    [["*...", "123.", "....", "...."], 0, 2, 1, [{ line: 0, col: 0 }]],
    [["...*", "123.", "....", "...."], 0, 2, 1, [{ line: 0, col: 3 }]],
    [["....", "123*", "....", "...."], 0, 2, 1, [{ line: 1, col: 3 }]],
    [["....", "*123", "....", "...."], 1, 3, 1, [{ line: 1, col: 0 }]],
  ])("should return one set of coords", (input, col1, col2, line, coords) => {
    const result = getStarNeighbours(input, col1, col2, line);
    expect(result).toEqual(coords);
  });
});
