import { isDigit } from "../../utils/is-digit";
import { readLinesFromFile } from "../../utils/read-lines-from-file";
import { sum } from "../../utils/sum";
import { getStarNeighbours } from "./getStarNeighbours";
import { hasSymbolNeighbour } from "./has-symbol-neighbour";

export const puzzle1 = (data: string[]) => {
  let isPartNumber = false;
  let s = "";
  const partNumbers = [];

  for (let i = 0; i < data.length; i += 1) {
    for (let j = 0; j < data[0].length; j += 1) {
      if (isDigit(data[i][j])) {
        s += data[i][j];
        if (!isPartNumber) {
          isPartNumber = hasSymbolNeighbour(data, i, j);
        }
      } else {
        if (isPartNumber) {
          isPartNumber = false;
          partNumbers.push(s);
        }
        s = "";
      }
    }
  }
  return partNumbers.map((s) => parseInt(s, 10)).reduce(sum, 0);
};

export const puzzle2 = (data: string[]) => {
  const numbersAroundAGear = {} as Record<string, number[]>;
  let s = "";
  let isPartNumber = false;
  for (let i = 0; i < data.length; i += 1) {
    for (let j = 0; j < data[0].length; j += 1) {
      if (isDigit(data[i][j])) {
        s += data[i][j];
        if (!isPartNumber) {
          isPartNumber = hasSymbolNeighbour(data, i, j);
        }
      } else if (s.length > 0) {
        getStarNeighbours(data, j - s.length, j - 1, i).forEach((star) => {
          console.log(star, s);
          console.log(`col1: ${j - s.length}; col2: ${j - 1}; line: ${i}`);
          if (!numbersAroundAGear[`s${star.line + 1}_${star.col + 1}`]) {
            numbersAroundAGear[`s${star.line + 1}_${star.col + 1}`] = [
              parseInt(s),
            ];
          } else {
            numbersAroundAGear[`s${star.line + 1}_${star.col + 1}`].push(
              parseInt(s)
            );
          }
        });
        s = "";
      }
    }
  }

  let res = 0;
  console.log(numbersAroundAGear);
  for (const property in numbersAroundAGear) {
    if (numbersAroundAGear[property].length === 2) {
      console.log(
        numbersAroundAGear[property][0],
        numbersAroundAGear[property][1],
        numbersAroundAGear[property][0] * numbersAroundAGear[property][1]
      );
      res += numbersAroundAGear[property][0] * numbersAroundAGear[property][1];
    }
  }

  return res;
};

export const main = async () => {
  const filePath = process.argv[2];
  const isFirstPuzzle = process.argv[3] === "1";

  const data = await readLinesFromFile(filePath);

  if (isFirstPuzzle) {
    const timeBefore = new Date().getMilliseconds();
    const result = puzzle1(data);
    const timeAfter = new Date().getMilliseconds();
    console.log(`Took ${timeAfter - timeBefore} ms to complete`);
    return result;
  } else {
    return puzzle2(data);
  }
};

main().then((res) => {
  console.log(res);
});
