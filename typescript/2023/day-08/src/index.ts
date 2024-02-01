import { readLinesFromFile } from "../../utils/read-lines-from-file";
import { Choice } from "./Choice";
import { MapDirections } from "./types";

export const puzzle1 = (data: string[]) => {
  const directionChoice = new Choice(data[0]);
  const directionMap = data.slice(2).reduce((acc, line) => {
    const res = /^([A-Z]{3}) = \(([A-Z]{3}), ([A-Z]{3})\)$/.exec(line);

    if (res !== null) {
      acc[res[1]] = { L: res[2], R: res[3] };
    }
    return acc;
  }, {} as MapDirections);

  console.log(directionMap);
  let reachedEndLocation = false;
  let depletedChoices = false;
  let location = directionMap["AAA"];
  let i;
  for (i = 0; !(reachedEndLocation && depletedChoices); i += 1) {
    const direction = directionChoice.next();
    console.log(location, direction);

    if (direction.done) {
      depletedChoices = true;
      directionChoice.reset();
    }

    if (location[direction.value] === "ZZZ") {
      reachedEndLocation = true;
    } else {
      location = directionMap[location[direction.value]];
    }
  }

  return i;
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
