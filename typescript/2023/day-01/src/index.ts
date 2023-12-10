import { readLinesFromFile } from "../../utils/read-lines-from-file";
import { sum } from "../../utils/sum";
import { NumberProcessor } from "./NumberProcessor";

const isDigit = (s: string) => !isNaN(parseInt(s, 10));

const extractNumberFromLine = (line: string) => {
  const stringArr = line.split("");
  const firstDigit = stringArr.find(isDigit);
  const lastDigit = stringArr.reverse().find(isDigit);
  console.log(line, `${firstDigit}${lastDigit}`);
  return parseInt(`${firstDigit}${lastDigit}`);
};

export const puzzle2 = (lines: string[]) => {
  return lines.map(NumberProcessor.process).reduce(sum, 0);
};
export const puzzle1 = (lines: string[]) => {
  return lines.map(extractNumberFromLine).reduce(sum, 0);
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
