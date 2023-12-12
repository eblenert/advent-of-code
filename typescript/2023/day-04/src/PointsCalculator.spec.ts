import { PointsCalculator } from "./PointsCalculator";
import { Card } from "./types";

describe("PointsCalculator", () => {
  it("should return 0 points if no match", () => {
    const card = {
      cardId: 1,
      winningNumbers: [1, 2, 3],
      inputNumbers: [4, 5, 6],
    } as Card;

    expect(PointsCalculator.calculate(card)).toBe(0);
  });

  it("should return 1 if one number matches ", () => {
    const card = {
      cardId: 1,
      winningNumbers: [1, 2, 3],
      inputNumbers: [3, 5, 6],
    } as Card;

    expect(PointsCalculator.calculate(card)).toBe(1);
  });

  it("should return 8 if three numbers match", () => {
    const card = {
      cardId: 1,
      winningNumbers: [41, 48, 83, 86, 17],
      inputNumbers: [83, 86, 6, 31, 17, 9, 48, 53],
    } as Card;

    expect(PointsCalculator.calculate(card)).toBe(8);
  });
});
