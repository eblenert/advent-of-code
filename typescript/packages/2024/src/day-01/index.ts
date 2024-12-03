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
  const [colA, colB] = data
    .reduce(
      (acc, current) => {
        const [a, b] = current.split("   ");
        acc[0].push(parseInt(a, 10));
        acc[1].push(parseInt(b, 10));
        return acc;
      },
      [[], []] as Array<Array<number>>
    )
    .map((col) => col.sort());

  return colA.reduce((acc, current, index) => {
    return acc + diff(current, colB[index]);
  }, 0);
};

export const puzzle2 = (data: string[]) => {
  const [colA, colB] = data.reduce(
    (acc, current) => {
      const [a, b] = current.split("   ");
      acc[0].push(parseInt(a, 10));
      acc[1].push(parseInt(b, 10));
      return acc;
    },
    [[], []] as Array<Array<number>>
  );

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
