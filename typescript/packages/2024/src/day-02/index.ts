import { isDiffAdjacentBetween } from "@lib/utils/is-diff-adjacent-between";
import { isListMonotone } from "@lib/utils/is-list-monotone";
import { readLinesFromFile } from "@lib/utils/read-lines-from-file";

const isReportSafe = (list: number[]) => isDiffAdjacentBetween(list, 1, 3);

export const puzzle1 = (data: string[]) => {
  return data
    .map((line) => line.split(" "))
    .map((line) => line.map((item) => parseInt(item, 10)))
    .filter((list) => isListMonotone(list))
    .filter(isReportSafe).length;
};

export const puzzle2 = (data: string[]) => {};

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
