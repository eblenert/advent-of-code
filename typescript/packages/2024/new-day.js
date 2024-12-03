const { readdir, mkdir, writeFile } = require("fs/promises");

async function listDirectories(pth) {
  const directories = (await readdir(pth, { withFileTypes: true }))
    .filter((dirent) => dirent.isDirectory())
    .filter((dir) => dir.name.startsWith("day-"))
    .map((dir) => dir.name);

  return directories;
}

async function main() {
  const dirList = await listDirectories("./src");
  const nextIndex = dirList.length + 1;
  const nextDir = `src/day-${nextIndex > 10 ? nextIndex : "0" + nextIndex}`;
  await mkdir(`${nextDir}`, {
    recursive: true,
  });

  await writeFile(
    `${nextDir}/index.ts`,
    `
import { readLinesFromFile } from "../../../lib/utils/read-lines-from-file";

export const puzzle1 = (data: string[]) => {};

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

`
  );

  console.log(`Creating ${nextDir} ...`);
}

main().then(() => {
  console.log("Done");
});
