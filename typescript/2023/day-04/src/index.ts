import { readLinesFromFile } from "../../utils/read-lines-from-file";
import { sum } from "../../utils/sum";
import { LineParser } from "./LineParser";
import { PointsCalculator } from "./PointsCalculator";

export const puzzle1 = (data: string[]) => {
  return data
    .map(LineParser.parse)
    .map(PointsCalculator.calculate)
    .reduce(sum, 0);
};

export const puzzle2 = (data: string[]) => {
  const originalCards = data.map(LineParser.parse);
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
