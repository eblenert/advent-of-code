import { LineParser } from "./LineParser";

describe("LineParser", () => {
  it("should parse line correctly", () => {
    const input = "Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53";

    expect(LineParser.parse(input)).toEqual({
      cardId: 1,
      winningNumbers: [41, 48, 83, 86, 17],
      inputNumbers: [83, 86, 6, 31, 17, 9, 48, 53],
    });
  });
});
