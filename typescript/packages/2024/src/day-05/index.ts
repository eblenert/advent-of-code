import { readLinesFromFile, getMedian, sum } from "@lib/utils";
import { parseBase10 } from "../day-03";
import { arePagesInCorrectOrder } from "./are-pages-in-correct-order";
import { correctPagesInUpdate } from "./correct-pages-in-update";

const computeInput = (data: string[]) => {
  return data.reduce<{
    pageOrder: Map<string, Array<string>>;
    updates: Array<Array<string>>;
  }>(
    (acc, current) => {
      if (current.includes("|")) {
        const [k, v] = current.split("|");
        if (!acc.pageOrder.has(k)) {
          acc.pageOrder.set(k, []);
        }
        acc.pageOrder.get(k)?.push(v);
      }

      if (current.includes(",")) {
        acc.updates.push(current.split(","));
      }

      return acc;
    },
    { pageOrder: new Map(), updates: [] }
  );
};
export const puzzle1 = (data: string[]) => {
  const { pageOrder, updates } = computeInput(data);

  const arePageUpdatesCorrect = (update: Array<string>) => {
    return arePagesInCorrectOrder(update, pageOrder);
  };
  return updates
    .filter(arePageUpdatesCorrect)
    .map(getMedian)
    .map(parseBase10)
    .reduce(sum);
};

export const puzzle2 = (data: string[]) => {
  const { pageOrder, updates } = computeInput(data);
  const arePagesInWrongOrder = (update: Array<string>) => {
    return !arePagesInCorrectOrder(update, pageOrder);
  };

  const orderPagesInUpdate = (update: Array<string>) => {
    return correctPagesInUpdate(update, pageOrder);
  };
  return updates
    .filter(arePagesInWrongOrder)
    .map(orderPagesInUpdate)
    .map(getMedian)
    .map(parseBase10)
    .reduce(sum);
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
