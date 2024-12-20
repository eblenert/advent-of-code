import { readLinesFromFile } from "@lib/utils/read-lines-from-file";
import { parseBase10 } from "../day-03";
import { Robot } from "./Robot";

const resetGrid = (grid: Array<Array<number>>) => {
  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[0].length; j += 1) {
      grid[i][j] = 0;
    }
  }
};

export const printGrid = <T>(grid: Array<Array<T>>) => {
  console.log(`x: ${grid.length}, y: ${grid[0].length}`);
  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[0].length; j += 1) {
      if (grid[i][j] === 0) {
        process.stdout.write(".");
      } else {
        process.stdout.write("" + grid[i][j]);
      }
    }
    process.stdout.write("\n");
  }
};

export const puzzle1 = (data: string[]) => {
  const GRID = {
    X: 101,
    Y: 103,
  };

  const robots = data
    .map((line) => line.split(" "))
    .map((line) => line.map((l) => l.slice(l.indexOf("=") + 1)))
    .map((current) => {
      const [p, v] = current.map((item) => item.split(",").map(parseBase10));

      const robot = Robot.RobotBuilder.setPosition(p[0], p[1])
        .setVelocity(v[0], v[1])
        .setGrid(GRID.X, GRID.Y)
        .build();
      return robot;
    });

  const grid = new Array(GRID.Y);
  for (let i = 0; i < grid.length; i += 1) {
    grid[i] = new Array(GRID.X).fill(0);
  }

  for (let i = 0; i < 100; i += 1) {
    robots.forEach((robot) => {
      robot.move();
    });
  }

  robots.forEach((robot) => {
    grid[robot.py][robot.px] += 1;
  });
  for (let i = 0; i < robots[0].yMax; i += 1) {
    let line = "";
    for (let j = 0; j < robots[0].xMax; j += 1) {
      if (grid[i][j] === 0) {
        line += ".";
      } else {
        line += "" + grid[i][j];
      }
    }
    console.log(line);
  }

  const quadrant = {
    Q1: 0,
    Q2: 0,
    Q3: 0,
    Q4: 0,
  };

  const halfX = Math.floor(GRID.X / 2);
  const halfY = Math.floor(GRID.Y / 2);

  console.log(`halfX: ${halfX}. halfY: ${halfY}`);
  const result = robots.reduce((acc, robot) => {
    // Q1
    if (robot.px < halfX && robot.py < halfY) {
      acc.Q1 += 1;
    }

    // Q2
    if (robot.px > halfX && robot.py < halfY) {
      acc.Q2 += 1;
    }

    // Q3
    if (robot.px > halfX && robot.py > halfY) {
      acc.Q3 += 1;
    }

    // Q4
    if (robot.px < halfX && robot.py > halfY) {
      acc.Q4 += 1;
    }
    return acc;
  }, quadrant);

  return result.Q1 * result.Q2 * result.Q3 * result.Q4;
};

export const puzzle2 = (data: string[]) => {
  console.log("puzzle 2 fmm");
  const GRID = {
    X: 101,
    Y: 103,
  };

  const robots = data
    .map((line) => line.split(" "))
    .map((line) => line.map((l) => l.slice(l.indexOf("=") + 1)))
    .map((current) => {
      const [p, v] = current.map((item) => item.split(",").map(parseBase10));

      const robot = Robot.RobotBuilder.setPosition(p[0], p[1])
        .setVelocity(v[0], v[1])
        .setGrid(GRID.X, GRID.Y)
        .build();
      return robot;
    });

  const grid = new Array(GRID.Y);
  for (let i = 0; i < grid.length; i += 1) {
    grid[i] = new Array(GRID.X).fill(0);
  }

  for (let i = 0; i < 10000; i += 1) {
    console.log(`iteration ${i}`);
    robots.forEach((robot) => {
      robot.move();
    });
    if (i > 5000) {
      robots.forEach((robot) => {
        grid[robot.py][robot.px] += 1;
      });
      printGrid(grid);
      resetGrid(grid);
    }
  }
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

if (require.main === module) {
  main().then((res) => {
    console.log(res);
  });
}
