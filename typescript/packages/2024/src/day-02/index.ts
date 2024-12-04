import { isDiffAdjacentBetween } from "@lib/utils/is-diff-adjacent-between";
import { isListMonotone } from "@lib/utils/is-list-monotone";
import { readLinesFromFile } from "@lib/utils/read-lines-from-file";
import { isSafeRemovingOneLevel } from "./is-safe-removing-one-level";

const MIN_VALUE = 1;
const MAX_VALUE = 3;

export const isReportSafe = (list: number[]) =>
  isDiffAdjacentBetween(list, MIN_VALUE, MAX_VALUE);

export const puzzle1 = (data: string[]) => {
  return data
    .map((line) => line.split(" "))
    .map((line) => line.map((item) => parseInt(item, 10)))
    .filter((list) => isListMonotone(list))
    .filter(isReportSafe).length;
};

export const puzzle2 = (data: string[]) => {
  const [pass, fail] = data
    .map((line) => line.split(" "))
    .map((line) => line.map((item) => parseInt(item, 10)))
    .reduce(
      ([pass, fail], list) => {
        if (isListMonotone(list) && isReportSafe(list)) {
          pass.push(list);
        } else if (isSafeRemovingOneLevel(list)) {
          pass.push(list);
        } else {
          fail.push(list);
        }

        return [pass, fail];
      },
      [[], []] as Array<Array<number[]>>
    );

  return pass.length;
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
