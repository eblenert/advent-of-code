import * as path from "node:path";
import { puzzle2 } from ".";
import { readLinesFromFile } from "@lib/utils";

describe("day 03", () => {
  it("should do stuff", async () => {
    try {
      const input = await readLinesFromFile(
        path.resolve(`${process.cwd()}/data/2024/day-03/input`)
      );
      console.log(input);
      const result = puzzle2(input);
      console.log(result);
    } catch (error) {
      console.log(error, "plm");
    }
  });
});
