import { puzzle } from ".";
import { readLinesFromFile } from "../../utils/read-lines-from-file";

const getInstructionsFromFile = async (file: string) => {
  const data = await readLinesFromFile(file);
  return data.map((line) => {
    if (line.localeCompare("noop") === 0) {
      return NaN;
    } else {
      return parseInt(line.split(" ")[1]);
    }
  });
};

describe("day 10", () => {
  describe("puzzle", () => {
    it("should run bigger demo input", async () => {
      const instructions = await getInstructionsFromFile(
        "./day-10/data/demo-large-input"
      );
      const result = puzzle(instructions);
    });

    fit("should run the actual input", async () => {
      const instructions = await getInstructionsFromFile("./day-10/data/input");
      const result = puzzle(instructions);
    });
  });
});
