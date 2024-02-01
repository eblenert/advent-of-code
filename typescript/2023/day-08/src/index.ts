import { readLinesFromFile } from "../../utils/read-lines-from-file";
import { MapDirections } from "./types";

export const puzzle1 = (data: string[]) => {
  const directionList = data[0];

  const directionMap = data.slice(2).reduce((acc, line) => {
    const res = /^([A-Z]{3}) = \(([A-Z]{3}), ([A-Z]{3})\)$/.exec(line);

    if (res !== null) {
      acc[res[1]] = { L: res[2], R: res[3] };
    }
    return acc;
  }, {} as MapDirections);
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
