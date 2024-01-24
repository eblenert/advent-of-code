import { CARDS, Hand } from "./types";

export const handSorter = (a: Hand, b: Hand): number => {
  if (a.handType < b.handType) {
    return -1;
  }

  if (a.handType > b.handType) {
    return 1;
  }

  if (a.handType === b.handType) {
    let counter: number = 0;
    while (a.cards[counter] === b.cards[counter]) {
      counter += 1;
    }

    if (CARDS.indexOf(a.cards[counter]) < CARDS.indexOf(b.cards[counter])) {
      return -1;
    }
    return 1;
  }

  return 0;
};
