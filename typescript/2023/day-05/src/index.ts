import { minReduce } from "../../utils/min";
import { readLinesFromFile } from "../../utils/read-lines-from-file";
import { extractRangesFromLine } from "./extract-ranges-from-line";
import { getExtractionFlag } from "./get-extraction-flag";
import { sourceDestMapper } from "./source-dest-mapper";
import { FLAGS, SourceDestMapType } from "./types";

export const puzzle1 = (data: string[]) => {
  const seeds = [];
  const maps: Array<Array<SourceDestMapType>> = Array.from(Array(7), () => {
    return Array();
  });

  let flag: number = 0;
  for (const line of data) {
    if (line.indexOf(":") !== -1) {
      flag = getExtractionFlag(line);

      if (flag === FLAGS.SEEDS) {
        seeds.push(
          ...line
            .split(": ")[1]
            .split(" ")
            .map((x) => parseInt(x, 10))
        );
      }
    } else if (line.length > 0) {
      const numbers = extractRangesFromLine(line);
      maps[flag].push(numbers);
    }
  }

  return seeds
    .map((seed) => {
      let result = seed;
      for (let i = 0; i < maps.length; i += 1) {
        result = sourceDestMapper(result, maps[i]);
      }

      return result;
    })
    .reduce(minReduce);
};

export const puzzle2 = (data: string[]) => {
  const seeds: number[] = [];
  const maps: Array<Array<SourceDestMapType>> = Array.from(Array(7), () => {
    return Array();
  });
  let flag: number = 0;
  for (const line of data) {
    if (line.indexOf(":") !== -1) {
      flag = getExtractionFlag(line);

      if (flag === FLAGS.SEEDS) {
        seeds.push(
          ...line
            .split(": ")[1]
            .split(" ")
            .map((x) => parseInt(x, 10))
        );
      }
    } else if (line.length > 0) {
      const numbers = extractRangesFromLine(line);
      maps[flag].push(numbers);
    }
  }
  let minSeed = null;

  for (let i = 0; i < seeds.length; i += 2) {
    const rangeStart = seeds[i];
    const rangeSize = seeds[i + 1];

    for (let j = 0; j < rangeSize; j += 1) {
      const seed = rangeStart + j;

      let result = seed;
      for (let k = 0; k < maps.length; k += 1) {
        result = sourceDestMapper(result, maps[k]);
      }

      if (minSeed === null || result < minSeed) {
        minSeed = result;
      }
    }
  }

  return minSeed;
};

export const main = async () => {
  const filePath = process.argv[2];
  const isFirstPuzzle = process.argv[3] === "1";
  const isSecondPuzzle = process.argv[3] === "2";

  const data = await readLinesFromFile(filePath);

  if (isFirstPuzzle) {
    return puzzle1(data);
  } else if (isSecondPuzzle) {
    return puzzle2(data);
  } else {
    return null;
  }
};

main().then((res) => {
  console.log(res);
});
