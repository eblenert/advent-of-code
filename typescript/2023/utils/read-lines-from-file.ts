import fs from "fs";
import readline from "readline";
import { once } from "node:events";

export const readLinesFromFile = async (filePath: string) => {
  const fileStream = fs.createReadStream(filePath);

  const result: string[] = [];
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  rl.on("line", (line) => {
    result.push(line);
  });

  await once(rl, "close");

  return result;
};
