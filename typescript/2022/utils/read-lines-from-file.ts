import fs from "fs/promises";

export const readLinesFromFile = async (filePath: string) => {
  const data = await fs.readFile(filePath, { encoding: "utf-8" });
  return data.split("\n");
};
