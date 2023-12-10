import { Game } from "./Game";

describe("Game", () => {
  it.each([
    [
      [
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
      true,
    ],
    [
      [
        {
          redCubes: 13,
          greenCubes: 2,
          blueCubes: 3,
        },
      ],
      false,
    ],
    [
      [
        {
          redCubes: 10,
          greenCubes: 22,
          blueCubes: 3,
        },
      ],
      false,
    ],
  ])(
    "should return false if number of input cubes is bigger than total of its kind",
    (gameSets, result) => {
      const game = new Game(12, 13, 14);

      expect(game.isGamePossible(gameSets)).toBe(result);
    }
  );

  it("should return the lowest possible number of cubes needed for a game", () => {
    const expectedResult = {
      redCubes: 4,
      greenCubes: 2,
      blueCubes: 6,
    };

    // Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
    const input = [
      { blueCubes: 3, redCubes: 4 },
      { redCubes: 1, greenCubes: 2, blueCubes: 6 },
      { greenCubes: 2 },
    ];
    expect(Game.minimumCubesPossible(input)).toEqual(expectedResult);
  });
});
