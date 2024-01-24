import { HandParser } from "./hand-parser";
import { HAND_TYPE } from "./types";

describe("HandParser", () => {
  it.each([
    ["AAAAA", HAND_TYPE.FIVE_OF_A_KIND],
    ["AA8AA", HAND_TYPE.FOUR_OF_A_KIND],
    ["23332", HAND_TYPE.FULL_HOUSE],
    ["23432", HAND_TYPE.TWO_PAIR],
    ["KK677", HAND_TYPE.TWO_PAIR],
    ["KTJJT", HAND_TYPE.TWO_PAIR],
    ["A23A4", HAND_TYPE.ONE_PAIR],
    ["23456", HAND_TYPE.HIGH_CARD],
  ])("should parse examples hands correctly", (hand, handType) => {
    expect(HandParser.parseHand(hand)).toEqual(handType);
  });
});

describe("HandParser w/ Joker", () => {
  describe("2 types of cards", () => {
    it("should return four of a kind", () => {
      expect(HandParser.parseHandWithJoker("33335")).toBe(
        HAND_TYPE.FOUR_OF_A_KIND
      );
    });

    it("should return five of a kind if joker is present", () => {
      expect(HandParser.parseHandWithJoker("3333J")).toBe(
        HAND_TYPE.FIVE_OF_A_KIND
      );
    });

    it("should return five of a kind if 2 jokers are present", () => {
      expect(HandParser.parseHandWithJoker("TTJJT")).toBe(
        HAND_TYPE.FIVE_OF_A_KIND
      );
    });

    it("should return full house", () => {
      expect(HandParser.parseHandWithJoker("AAA44")).toBe(HAND_TYPE.FULL_HOUSE);
    });

    it("should return five of a kind", () => {
      expect(HandParser.parseHandWithJoker("J99JJ")).toBe(
        HAND_TYPE.FIVE_OF_A_KIND
      );
    });
  });

  describe("3 types of cards", () => {
    it("should return full house", () => {
      expect(HandParser.parseHandWithJoker("533J5")).toBe(HAND_TYPE.FULL_HOUSE);
    });
    it("should return three of a kind", () => {
      expect(HandParser.parseHandWithJoker("22245")).toBe(
        HAND_TYPE.THREE_OF_A_KIND
      );
    });

    it("should return four of a kind", () => {
      expect(HandParser.parseHandWithJoker("222J5")).toBe(
        HAND_TYPE.FOUR_OF_A_KIND
      );
    });

    it("should return four of a kind with 2 jokers", () => {
      expect(HandParser.parseHandWithJoker("KTJJT")).toBe(
        HAND_TYPE.FOUR_OF_A_KIND
      );
    });

    it("should return four of a kind with 3 jokers", () => {
      expect(HandParser.parseHandWithJoker("2JJJ9")).toBe(
        HAND_TYPE.FOUR_OF_A_KIND
      );
    });

    it.each(["K588K", "KK677"])("should return two pairs", (hand) => {
      expect(HandParser.parseHandWithJoker(hand)).toBe(HAND_TYPE.TWO_PAIR);
    });

    it.each(["225J5", "J2323"])("should return full house", (hand) => {
      expect(HandParser.parseHandWithJoker(hand)).toBe(HAND_TYPE.FULL_HOUSE);
    });
  });

  describe("4 types of cards", () => {
    it("should return pair", () => {
      expect(HandParser.parseHandWithJoker("22345")).toBe(HAND_TYPE.ONE_PAIR);
    });

    it("should return three of a kind with two jokers", () => {
      expect(HandParser.parseHandWithJoker("JJAT8")).toBe(
        HAND_TYPE.THREE_OF_A_KIND
      );
    });
    it("should return three of a kind if one joker", () => {
      expect(HandParser.parseHandWithJoker("22J45")).toBe(
        HAND_TYPE.THREE_OF_A_KIND
      );
    });
  });

  describe("5 types of cards", () => {
    it("should return high card", () => {
      expect(HandParser.parseHandWithJoker("23456")).toBe(HAND_TYPE.HIGH_CARD);
    });

    it("should return one pair", () => {
      expect(HandParser.parseHandWithJoker("26J35")).toBe(HAND_TYPE.ONE_PAIR);
    });
  });
});
