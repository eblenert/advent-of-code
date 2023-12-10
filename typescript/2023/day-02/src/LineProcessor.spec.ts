import { LineProcessor } from "./LineProcessor";
import { COLORS } from "./types";

describe("LineProcessor", () => {
  it("should return gameid and sets", () => {
    const line = "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green";
    const result = LineProcessor.process(line);
    expect(result).toEqual({
      gameId: 1,
      cubes: [
        {
          blueCubes: 3,
          redCubes: 4,
        },
        {
          redCubes: 1,
          greenCubes: 2,
          blueCubes: 6,
        },
        {
          greenCubes: 2,
        },
      ],
    });
  });
});
