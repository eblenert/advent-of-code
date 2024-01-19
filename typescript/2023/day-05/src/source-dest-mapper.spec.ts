import { sourceDestMapper } from "./source-dest-mapper";

describe("Source Dest Mapper", () => {
  const maps = [
    { destinationStart: 50, sourceStart: 98, length: 2 },
    { destinationStart: 52, sourceStart: 50, length: 48 },
  ];
  it.each([
    [79, 81],
    [14, 14],
    [55, 57],
    [13, 13],
  ])("should correctly map the examples", (source, dest) => {
    expect(sourceDestMapper(source, maps)).toBe(dest);
  });
});
