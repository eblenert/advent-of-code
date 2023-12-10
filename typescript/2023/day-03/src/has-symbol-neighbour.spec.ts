import { hasSymbolNeighbour } from "./has-symbol-neighbour";

describe("has symbol neighbour", () => {
  describe("top row", () => {
    it("should return true if top left is a symbol", () => {
      const input = ["*..", ".X.", "..."];

      expect(hasSymbolNeighbour(input, 1, 1)).toBe(true);
    });

    it("should return true if top mid is a symbol", () => {
      const input = [".*.", ".X.", "..."];

      expect(hasSymbolNeighbour(input, 1, 1)).toBe(true);
    });

    it("should return true if top right is a symbol", () => {
      const input = ["..#", ".X.", "..."];

      expect(hasSymbolNeighbour(input, 1, 1)).toBe(true);
    });
  });

  describe("same row", () => {
    it("should return true if same row left is a symbol", () => {
      const input = ["...", "%X.", "..."];

      expect(hasSymbolNeighbour(input, 1, 1)).toBe(true);
    });

    it("should return true if same row right is a symbol", () => {
      const input = ["...", ".X@", "..."];

      expect(hasSymbolNeighbour(input, 1, 1)).toBe(true);
    });
  });

  describe("bottom row", () => {
    it("should return true if bot left is a symbol", () => {
      const input = ["...", ".X.", "+."];

      expect(hasSymbolNeighbour(input, 1, 1)).toBe(true);
    });

    it("should return true if bot mid is a symbol", () => {
      const input = ["..", "..", ".-."];

      expect(hasSymbolNeighbour(input, 1, 1)).toBe(true);
    });

    it("should return true if bot right is a symbol", () => {
      const input = ["...", ".X.", "..@"];

      expect(hasSymbolNeighbour(input, 1, 1)).toBe(true);
    });
  });

  describe("test boundaries", () => {
    const input = ["abc", "def", "ghi"];
    it.each([
      [0, 0],
      [0, 2],
      [2, 0],
      [2, 2],
    ])("should not throw if elem is in corner", (x, y) => {
      expect(hasSymbolNeighbour(input, x, y)).toBe(false);
    });
  });
});
