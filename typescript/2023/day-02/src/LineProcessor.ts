// Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green

import { COLORS, GameSet } from "./types";

export class LineProcessor {
  static process(line: string) {
    return new LineProcessor(line).process();
  }

  constructor(private readonly line: string) {}

  process() {
    const [fp, lp] = this.line.split(":");

    const gameId = parseInt(fp.split(" ")[1]);
    const sets = lp.split(";").map((s) => s.trim());
    const cubes = sets
      .map((set) => set.split(","))
      .map((s) => s.map((x) => x.trim()))
      .map((set) =>
        set.reduce((acc, cube) => {
          const [nr, color] = cube.split(" ");

          const nrCubes = parseInt(nr);

          if (COLORS.RED === color) {
            acc.redCubes = nrCubes;
          }

          if (COLORS.GREEN === color) {
            acc.greenCubes = nrCubes;
          }

          if (COLORS.BLUE === color) {
            acc.blueCubes = nrCubes;
          }

          return acc;
        }, {} as GameSet)
      );

    return {
      gameId,
      cubes,
    };
  }
}
