import { readLinesFromFile } from "@lib/utils";
import * as path from "node:path";
import { puzzle1 } from ".";

describe("day-06", () => {
  it("should do stuff", async () => {
    const input = await readLinesFromFile(
      path.resolve(`${process.cwd()}/data/2024/day-06/example`)
    );

    const result = puzzle1(input);
  });
});
