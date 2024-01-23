import { calculateWaysOfWinningARace } from "./ways-winning-race";

describe("Ways of winning race", () => {
  it.each([
    [7, 9, 4],
    [15, 40, 8],
    [30, 200, 9],
    [71530, 940200, 71503],
  ])("should match examples", (time, distance, res) => {
    expect(calculateWaysOfWinningARace({ time, distance })).toBe(res);
  });
});
