import { readLinesFromFile } from "@lib/utils/read-lines-from-file";
import {
  searchDiag,
  searchDown,
  searchHorizontal,
  searchMAS,
  searchUp,
  searchVertical,
} from "./xmas-search";

export const puzzle1 = (data: string[]) => {
  let sum = 0;
  for (let i = 0; i < data.length; i += 1) {
    for (let j = 0; j < data[i].length; j += 1) {
      if (data[i][j] === "X") {
        sum +=
          searchHorizontal(data, i, j) +
          searchVertical(data, i, j) +
          searchDiag(data, i, j);
      }
    }
  }

  return sum;
};

export const puzzle2 = (data: string[]) => {
  let sum = 0;
  for (let i = 0; i < data.length; i += 1) {
    for (let j = 0; j < data[i].length; j += 1) {
      if (data[i][j] === "A" && searchMAS(data, i, j)) {
        sum++;
      }
    }
  }

  return sum;
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
