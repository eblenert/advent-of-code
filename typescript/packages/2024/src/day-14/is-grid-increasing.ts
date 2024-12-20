export const isGridIncreasing = (grid: Array<Array<number>>) => {
  let startSearch = false;
  for (let i = 0; i < grid.length; i += 1) {
    const [first, last] = getFirstAndLastRobotPxOnLine(grid[i]);
    if (first === last && first !== -1) {
      startSearch = true;
    }
    if (startSearch) {
    }
  }
};

export const getFirstAndLastRobotPxOnLine = (line: Array<number>) => {
  let first = -1;
  let last = -1;
  for (let i = 0; i < line.length; i++) {
    if (line[i] !== 0) {
      if (first === -1) {
        first = i;
        last = i;
      }

      if (first !== -1 && i > last) {
        last = i;
      }
    }
  }
  return [first, last];
};
