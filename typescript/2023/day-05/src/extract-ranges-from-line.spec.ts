import { extractRangesFromLine } from "./extract-ranges-from-line";

describe("Extract ranges from line", () => {
  it("should extract range", () => {
    const inputLine = "50 98 2";
    extractRangesFromLine(inputLine);
  });
});
