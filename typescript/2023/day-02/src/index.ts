import { readLinesFromFile } from "../../utils/read-lines-from-file";
import { sum } from "../../utils/sum";
import { Game } from "./Game";
import { LineProcessor } from "./LineProcessor";

export const puzzle1 = (data: string[]) => {
  const game = new Game(12, 13, 14);
  return data
    .map(LineProcessor.process)
    .filter((games) => game.isGamePossible(games.cubes))
    .reduce((acc, games) => acc + games.gameId, 0);
};

export const puzzle2 = (data: string[]) => {
  return data
    .map(LineProcessor.process)
    .map((game) => Game.minimumCubesPossible(game.cubes))
    .map((cubes) => cubes.redCubes! * cubes.greenCubes! * cubes.blueCubes!)
    .reduce(sum, 0);
};

export const main = async () => {
  const filePath = process.argv[2];
  const isFirstPuzzle = process.argv[3] === "1";

  const data = await readLinesFromFile(filePath);

  if (isFirstPuzzle) {
    return puzzle1(data);
  } else {
    return puzzle2(data);
  }
};

main().then((res) => {
  console.log(res);
});
