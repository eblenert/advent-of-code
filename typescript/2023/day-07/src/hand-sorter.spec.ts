import { handSorter } from "./hand-sorter";
import { HAND_TYPE } from "./types";

describe("hand sorter", () => {
  it("should sort type of hands correctly", () => {
    const hands = [
      { cards: "32T3K", handType: HAND_TYPE.ONE_PAIR, bid: 0 },
      { cards: "T55J5", handType: HAND_TYPE.FOUR_OF_A_KIND, bid: 0 },
      { cards: "KK677", handType: HAND_TYPE.TWO_PAIR, bid: 0 },
      { cards: "KTJJT", handType: HAND_TYPE.FOUR_OF_A_KIND, bid: 0 },
      { cards: "QQQJA", handType: HAND_TYPE.FOUR_OF_A_KIND, bid: 0 },
    ];

    const sortedArray = hands.sort(handSorter);
    console.log(sortedArray);
  });
});
