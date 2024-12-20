import { multiplication, readLinesFromFile, sum } from "@lib/utils";
export const parseBase10 = (x: string) => parseInt(x, 10);
const multRegex = /mul\((\d{1,3},\d{1,3})\)/g;
const multEnabledRegex = /mul\((\d{1,3},\d{1,3})\)|do\(\)|don\'t\(\)/g;

export const puzzle1 = (data: string[]) => {
  console.log(data);
  return data
    .flatMap((line) => {
      return [...line.matchAll(multRegex)].flatMap((match) => match[1]);
    })
    .map((multString) => multString.split(",").map(parseBase10))
    .map(([a, b]) => a * b)
    .reduce(sum);
};

export const puzzle2 = (data: string[]) => {
  const input = data.join();
  const matched = [...input.matchAll(multEnabledRegex)];
  return matched.reduce(
    (acc, current) => {
      if (current[0] === "do()") {
        return { sum: acc.sum, enabled: true };
      }

      if (current[0] === "don't()") {
        return { sum: acc.sum, enabled: false };
      }

      if (acc.enabled) {
        const mult = current[1]
          .split(",")
          .map(parseBase10)
          .reduce(multiplication);
        return { sum: acc.sum + mult, enabled: true };
      }

      return acc;
    },
    { sum: 0, enabled: true }
  );
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

if (require.main === module) {
  main().then((res) => {
    console.log(res);
  });
}
