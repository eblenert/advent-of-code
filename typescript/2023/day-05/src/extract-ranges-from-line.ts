import { SourceDestMapType } from "./types";

export const extractRangesFromLine = (line: string): SourceDestMapType => {
  const [destinationStart, sourceStart, length] = line
    .split(" ")
    .map((x) => parseInt(x, 10));
  return { destinationStart, sourceStart, length };
};
