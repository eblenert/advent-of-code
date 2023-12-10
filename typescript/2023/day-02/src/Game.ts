import { GameSet } from "./types";

export class Game {
  constructor(
    private readonly redCubes: number,
    private readonly greenCubes: number,
    private readonly blueCubes: number
  ) {}

  isGamePossible(gameSets: GameSet[]) {
    return gameSets.every((gameSet) => {
      if (
        (gameSet.redCubes ?? 0) > this.redCubes ||
        (gameSet.greenCubes ?? 0) > this.greenCubes ||
        (gameSet.blueCubes ?? 0) > this.blueCubes
      ) {
        return false;
      }

      return true;
    });
  }

  static minimumCubesPossible(gameSets: GameSet[]) {
    return gameSets.reduce(
      (acc, current) => {
        if (
          typeof acc.redCubes !== "undefined" &&
          typeof current.redCubes !== "undefined" &&
          current.redCubes > acc.redCubes
        ) {
          acc.redCubes = current.redCubes;
        }

        if (
          typeof acc.greenCubes !== "undefined" &&
          typeof current.greenCubes !== "undefined" &&
          current.greenCubes > acc.greenCubes
        ) {
          acc.greenCubes = current.greenCubes;
        }

        if (
          typeof acc.blueCubes !== "undefined" &&
          typeof current.blueCubes !== "undefined" &&
          current.blueCubes > acc.blueCubes
        ) {
          acc.blueCubes = current.blueCubes;
        }

        return acc;
      },
      {
        redCubes: 0,
        greenCubes: 0,
        blueCubes: 0,
      }
    );
  }
}
