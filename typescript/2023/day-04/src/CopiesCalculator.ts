import { Card } from "./types";

export class CopiesCalculator {
  static calculate(card: Card) {
    return new CopiesCalculator(card).calculate();
  }

  constructor(private readonly card: Card) {}
  calculate() {
    const matchNumbers = this.card.inputNumbers.filter(
      (x) => this.card.winningNumbers.indexOf(x) !== -1
    );
    return matchNumbers.length;
  }
}
