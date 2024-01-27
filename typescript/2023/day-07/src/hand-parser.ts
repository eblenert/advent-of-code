import { HAND_TYPE } from "./types";

export class HandParser {
  hand: Record<string, number> = {};
  handType: HAND_TYPE = HAND_TYPE.HIGH_CARD;

  static parseHand(hand: string) {
    return new HandParser(hand).parseHand().parseHandType().handType;
  }

  static parseHandWithJoker(hand: string) {
    return new HandParser(hand).parseHand().parseHandTypeWithJoker().handType;
  }

  constructor(private rawHand: string) {}

  parseHand() {
    for (const card of this.rawHand) {
      const counter = (this.hand[card] || 0) + 1;

      this.hand[card] = counter;
    }

    return this;
  }

  parseHandType() {
    const cards = Object.entries(this.hand).map((x) => x[1]);

    if (cards.length === 1) {
      this.handType = HAND_TYPE.FIVE_OF_A_KIND;
    }

    if (cards.length === 2) {
      if (cards.indexOf(4) !== -1) {
        this.handType = HAND_TYPE.FOUR_OF_A_KIND;
      }

      if (cards.indexOf(3) !== -1 && cards.indexOf(2) !== -1) {
        this.handType = HAND_TYPE.FULL_HOUSE;
      }
    }

    if (cards.length === 3) {
      if (cards.indexOf(3) !== -1 && cards.indexOf(2) === -1) {
        this.handType = HAND_TYPE.THREE_OF_A_KIND;
      }

      if (cards.indexOf(2) !== -1 && cards.indexOf(1) !== -1) {
        this.handType = HAND_TYPE.TWO_PAIR;
      }
    }

    if (cards.length === 4) {
      this.handType = HAND_TYPE.ONE_PAIR;
    }

    if (cards.length === 5) {
      this.handType = HAND_TYPE.HIGH_CARD;
    }

    return this;
  }

  parseHandTypeWithJoker() {
    const jokers = this.hand["J"] || 0;
    delete this.hand["J"];

    const highestOccurenceCard = Object.entries(this.hand).reduce(
      (acc, current) => {
        if (current[1] > acc.value) {
          acc = {
            id: current[0],
            value: current[1],
          };
        }
        return acc;
      },
      { id: "2", value: 0 }
    );

    this.hand[highestOccurenceCard.id] += jokers;

    this.parseHandType();
    return this;
  }
}
