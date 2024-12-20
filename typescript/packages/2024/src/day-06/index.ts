import { readLinesFromFile } from "@lib/utils/read-lines-from-file";
import { Robot } from "./Robot";

const print = (input: string[], visited: Set<string>) => {
  for (let i = 0; i < input.length; i += 1) {
    for (let j = 0; j < input[0].length; j += 1) {
      if (visited.has(`${j}-${i}`)) {
        process.stdout.write("X");
      } else {
        process.stdout.write(input[i][j]);
      }
    }
    process.stdout.write("\n");
  }
  process.stdout.write("\n");
  process.stdout.write("\n");
};

export const puzzle1 = (data: string[]) => {
  const robot = new Robot(data.map((line) => line.split("")));

  while (robot.isRobotInLab()) {
    robot.move();
    if (robot.nextMoveIsBlocked()) {
      robot.changeDirection();
    }
    // print(data, robot.visited);
  }
  return robot.visited.size;
};

export const puzzle2 = (data: string[]) => {};

export const main = async () => {
  console.log();
  const filePath = process.argv[2];
  const isFirstPuzzle = process.argv[3] === "1";

  const data = await readLinesFromFile(filePath);

  if (isFirstPuzzle) {
    return puzzle1(data);
  } else {
    return puzzle2(data);
  }
};

if (require.main === module) {
  main().then((res) => {
    console.log(res);
  });
}
