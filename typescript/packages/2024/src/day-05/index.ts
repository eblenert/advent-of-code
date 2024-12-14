import { readLinesFromFile } from "@lib/utils/read-lines-from-file";

type X = {
  pageOrder: Map<string, string>;
  updates: Array<Array<string>>;
};
export const puzzle1 = (data: string[]) => {
  const { pageOrder, updates } = data.reduce<X>(
    (acc, current) => {
      if (current.includes("|")) {
        const [k, v] = current.split("|");
        acc.pageOrder.set(k, v);
      }

      if (current.includes(",")) {
        acc.updates.push(current.split(","));
      }

      return acc;
    },
    { pageOrder: new Map(), updates: [] }
  );

  return { pageOrder, updates };
};

export const puzzle2 = (data: string[]) => {};

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
