import { readLinesFromFile } from "@lib/utils/read-lines-from-file";

export const puzzle1 = (data: string[]) => {
  const multiplicationRegex = /mul((\d{1,3}),(\d{1,3}))/g;
  console.log(data);
  data.forEach((line) => {
    console.log([...line.matchAll(multiplicationRegex)]);
  });
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
