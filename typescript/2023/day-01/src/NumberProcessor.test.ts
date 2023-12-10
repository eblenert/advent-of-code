import { NumberProcessor } from "./NumberProcessor";

describe("NumberProcessor", () => {
  it.each([["two1nine", 29]])("should parse correctly", (input, expected) => {
    expect(NumberProcessor.process(input)).toBe(expected);
  });
});
