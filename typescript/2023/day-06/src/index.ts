import { multiplication } from "../../utils/multiplication";
import { readLinesFromFile } from "../../utils/read-lines-from-file";
import { calculateWaysOfWinningARace } from "./ways-winning-race";

export const puzzle1 = (data: string[]) => {
  const time = data[0]
    .split(":")
    .map((x) => x.trim())[1]
    .split(" ")
    .filter((x) => x.length > 0)
    .map((x) => parseInt(x, 10));

  const distance = data[1]
    .split(":")
    .map((x) => x.trim())[1]
    .split(" ")
    .filter((x) => x.length > 0)
    .map((x) => parseInt(x, 10));

  const spaceTime = time.map((x, i) => ({
    time: x,
    distance: distance[i],
  }));

  return spaceTime.map(calculateWaysOfWinningARace).reduce(multiplication);
};

export const puzzle2 = (data: string[]) => {
  const [time, distance] = data
    .map((line) =>
      line
        .split(":")[1]
        .split(" ")
        .filter((x) => x.length)
        .join("")
    )
    .map((x) => parseInt(x, 10));
  return calculateWaysOfWinningARace({ time, distance });
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
