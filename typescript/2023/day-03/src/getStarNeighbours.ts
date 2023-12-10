export const getStarNeighbours = (
  input: string[],
  col1: number,
  col2: number,
  line: number
) => {
  const stars = [];
  // find stars on above row
  if (line - 1 >= 0) {
    for (let j = col1 - 1; j <= col2 + 1; j++) {
      if (j < 0) {
        continue;
      }
      if (input[line - 1][j] === "*") {
        stars.push({
          line: line - 1,
          col: j,
        });
      }
    }
  }

  // stars on same row, left of number
  if (col1 - 1 >= 0 && input[line][col1 - 1] === "*") {
    stars.push({
      line,
      col: col1 - 1,
    });
  }

  // stars on same row, right of number
  if (col2 + 1 <= input[0].length && input[line][col2 + 1] === "*") {
    stars.push({
      line,
      col: col2 + 1,
    });
  }

  //stars on row below number

  if (line + 1 < input.length) {
    for (let j = col1 - 1; j <= col2 + 1; j++) {
      if (j < 0) {
        continue;
      }
      if (input[line + 1][j] === "*") {
        stars.push({
          line: line + 1,
          col: j,
        });
      }
    }
  }

  return stars;
};
