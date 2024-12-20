import * as path from "node:path";
import { readLinesFromFile } from "@lib/utils";
import { puzzle2 } from ".";

describe("day-14", () => {
  it("should do stuff", async () => {
    console.log("mue");
    const input = await readLinesFromFile(
      path.resolve(`${process.cwd()}/data/2024/day-14/input`)
    );
    console.log(input);
    const result = puzzle2(input);
  });
});
