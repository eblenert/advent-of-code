const XMAS = "XMAS";

export const searchHorizontal = (input: string[], i: number, j: number) => {
  let sum = 0;
  if (searchRight(input, i, j)) {
    sum++;
  }

  if (searchLeft(input, i, j)) {
    sum++;
  }

  return sum;
};

export const searchVertical = (input: string[], i: number, j: number) => {
  let sum = 0;

  if (searchUp(input, i, j)) {
    sum++;
  }

  if (searchDown(input, i, j)) {
    sum++;
  }

  return sum;
};

export const searchDiag = (input: string[], i: number, j: number) => {
  let sum = 0;

  if (searchUpLeft(input, i, j)) {
    sum++;
  }

  if (searchUpRight(input, i, j)) {
    sum++;
  }

  if (searchDownLeft(input, i, j)) {
    sum++;
  }

  if (searchDownRight(input, i, j)) {
    sum++;
  }

  return sum;
};

export const searchRight = (input: string[], i: number, j: number) => {
  if (j + 4 > input[i].length) {
    return false;
  }

  return input[i].slice(j, j + 4) === XMAS;
};

export const searchLeft = (input: string[], i: number, j: number) => {
  if (j - 3 < 0) {
    return false;
  }

  const partString = [
    input[i][j],
    input[i][j - 1],
    input[i][j - 2],
    input[i][j - 3],
  ].join("");
  return partString === XMAS;
};

export const searchUp = (input: string[], i: number, j: number) => {
  if (i - 3 < 0) {
    return false;
  }

  const partString = [
    input[i][j],
    input[i - 1][j],
    input[i - 2][j],
    input[i - 3][j],
  ].join("");

  return partString === XMAS;
};

export const searchDown = (input: string[], i: number, j: number) => {
  if (i + 4 > input.length) {
    return false;
  }

  const partString = [
    input[i][j],
    input[i + 1][j],
    input[i + 2][j],
    input[i + 3][j],
  ].join("");

  return partString === XMAS;
};

export const searchUpLeft = (input: string[], i: number, j: number) => {
  if (i - 3 < 0 || j - 3 < 0) {
    return false;
  }

  const partString = [
    input[i][j],
    input[i - 1][j - 1],
    input[i - 2][j - 2],
    input[i - 3][j - 3],
  ].join("");

  return partString === XMAS;
};

export const searchUpRight = (input: string[], i: number, j: number) => {
  if (i - 3 < 0 || j + 3 > input[i].length) {
    return false;
  }

  const partString = [
    input[i][j],
    input[i - 1][j + 1],
    input[i - 2][j + 2],
    input[i - 3][j + 3],
  ].join("");

  return partString === XMAS;
};

export const searchDownLeft = (input: string[], i: number, j: number) => {
  if (i + 4 > input.length || j - 3 < 0) {
    return false;
  }

  const partString = [
    input[i][j],
    input[i + 1][j - 1],
    input[i + 2][j - 2],
    input[i + 3][j - 3],
  ].join("");

  return partString === XMAS;
};

export const searchDownRight = (input: string[], i: number, j: number) => {
  if (i + 4 > input.length || j + 4 > input[i].length) {
    return false;
  }

  const partString = [
    input[i][j],
    input[i + 1][j + 1],
    input[i + 2][j + 2],
    input[i + 3][j + 3],
  ].join("");

  return partString === XMAS;
};

const MASes = ["MAS", "SAM"];
export const searchMAS = (input: string[], i: number, j: number) => {
  if (
    i - 1 < 0 ||
    j - 1 < 0 ||
    i + 1 > input.length - 1 ||
    j + 1 > input[i].length - 1
  ) {
    return false;
  }
  const risingDiag = [
    input[i - 1][j - 1],
    input[i][j],
    input[i + 1][j + 1],
  ].join("");

  const fallingDiag = [
    input[i + 1][j - 1],
    input[i][j],
    input[i - 1][j + 1],
  ].join("");

  return MASes.includes(risingDiag) && MASes.includes(fallingDiag);
};
