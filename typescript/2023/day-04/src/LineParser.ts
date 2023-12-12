import { Card } from "./types";

export class LineParser {
  static parse(line: string) {
    return new LineParser(line).process();
  }

  constructor(private readonly line: string) {}

  process(): Card {
    const [fp, lp] = this.line.split(":");
    const cardId = parseInt(fp.split(" ")[1]);
    const [winningNumbersStr, inputNumbersStr] = lp.split("|");
    return {
      cardId,
      winningNumbers: winningNumbersStr
        .trim()
        .split(" ")
        .filter((item) => item !== "")
        .map((x) => parseInt(x.trim())),
      inputNumbers: inputNumbersStr
        .trim()
        .split(" ")
        .filter((item) => item !== "")
        .map((x) => parseInt(x)),
    };
  }
}
