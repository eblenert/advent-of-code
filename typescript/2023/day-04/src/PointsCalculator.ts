import { CopiesCalculator } from "./CopiesCalculator";
import { Card } from "./types";

export class PointsCalculator extends CopiesCalculator {
  static calculate(card: Card) {
    return new PointsCalculator(card).calculate();
  }

  constructor(card: Card) {
    super(card);
  }

  calculate() {
    const length = super.calculate();
    return length ? 2 ** (length - 1) : 0;
  }
}
