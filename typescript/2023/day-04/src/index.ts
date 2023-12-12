import { readLinesFromFile } from "../../utils/read-lines-from-file";
import { sum } from "../../utils/sum";
import { CopiesCalculator } from "./CopiesCalculator";
import { LineParser } from "./LineParser";
import { PointsCalculator } from "./PointsCalculator";

export const puzzle1 = (data: string[]) => {
  return data
    .map(LineParser.parse)
    .map(PointsCalculator.calculate)
    .reduce(sum, 0);
};

export const puzzle2 = (data: string[]) => {
  return data
    .map(LineParser.parse)
    .map((card, i, cards) => {
      const copiesWon = CopiesCalculator.calculate(card);
      while (card.processed < card.copies) {
        for (let j = 1; j <= copiesWon; j += 1) {
          cards[i + j].copies += 1;
        }
        card.processed += 1;
      }
      return card.processed;
    })
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
