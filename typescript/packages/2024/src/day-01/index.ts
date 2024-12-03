import { readLinesFromFile } from "../../../lib/utils/read-lines-from-file";

const diff = (a: number, b: number): number => {
  if (a > b) {
    return a - b;
  }

  return b - a;
};

const occurencesInList = (list: number[], value: number): number => {
  return list.reduce((acc, current) => {
    if (current === value) {
      return acc + 1;
    }
    return acc;
  }, 0);
};

export const puzzle1 = (data: string[]) => {
  const colA: Array<number> = [];
  const colB: Array<number> = [];
  data.forEach((line) => {
    const [a, b] = line.split("   ");
    colA.push(parseInt(a, 10));
    colB.push(parseInt(b, 10));
  });
  colA.sort();
  colB.sort();
  let sum = 0;

  for (let i = 0; i < colA.length; i += 1) {
    sum += diff(colA[i], colB[i]);
  }

  return sum;
};

export const puzzle2 = (data: string[]) => {
  const colA: Array<number> = [];
  const colB: Array<number> = [];
  data.forEach((line) => {
    const [a, b] = line.split("   ");
    colA.push(parseInt(a, 10));
    colB.push(parseInt(b, 10));
  });

  return colA.reduce((acc, current) => {
    return acc + current * occurencesInList(colB, current);
  }, 0);
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
