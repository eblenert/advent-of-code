import { readLinesFromFile } from "../../utils/read-lines-from-file";
import { HandParser } from "./hand-parser";
import { handSorter } from "./hand-sorter";
import { HAND_TYPE, Hand } from "./types";

export const puzzle1 = (data: string[]) => {
  const hands: Hand[] = data
    .map((line) => line.split(" "))
    .map((input) => ({
      cards: input[0],
      bid: parseInt(input[1], 10),
    }))
    .map((x) => ({ ...x, handType: HandParser.parseHand(x.cards) }));
  return hands.sort(handSorter).reduce((acc, current, index) => {
    console.log(current.cards, `rank: ${index + 1}`, `bid: ${current.bid}`);
    return acc + current.bid * (index + 1);
  }, 0);
};

export const puzzle2 = (data: string[]) => {
  const hands: Hand[] = data
    .map((line) => line.split(" "))
    .map((input) => ({
      cards: input[0],
      bid: parseInt(input[1], 10),
    }))
    .map((x) => ({ ...x, handType: HandParser.parseHandWithJoker(x.cards) }));

  return hands.sort(handSorter).reduce((acc, current, index) => {
    console.log(
      current.cards,
      `type: ${HAND_TYPE[current.handType]}`,
      `rank: ${index + 1}`
    );
    return acc + current.bid * (index + 1);
  }, 0);
};

export const main = async () => {
  const filePath = process.argv[2];
  const isFirstPuzzle = process.argv[3] === "1";

  const data = await readLinesFromFile(filePath);

  if (isFirstPuzzle) {
    return puzzle1(data);
  } else {
    return puzzle2(data);
  }
};

main().then((res) => {
  console.log(res);
});
