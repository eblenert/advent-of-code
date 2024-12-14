import {
  searchDiag,
  searchDown,
  searchLeft,
  searchMAS,
  searchRight,
  searchUp,
} from "./xmas-search";

describe("xmas-search", () => {
  describe("search-right", () => {
    it("should find xmas", () => {
      const input = ["AAXMASAA"];
      const result = searchRight(input, 0, 2);
      expect(result).toBe(true);
    });

    it("should not find xmas when reaching out of bounds", () => {
      const input = ["ABCXMA"];
      const result = searchRight(input, 0, 3);
      expect(result).toBe(false);
    });
  });

  describe("search-left", () => {
    it("should find xmas", () => {
      const input = ["ZQSAMXA"];
      const result = searchLeft(input, 0, 5);
      expect(result).toBe(true);
    });

    it("should not find xmas when reaching out of bounds", () => {
      const input = ["AMXYZ"];
      const result = searchLeft(input, 0, 2);
      expect(result).toBe(false);
    });
  });

  describe("search-up", () => {
    it("should find xmas", () => {
      const input = ["SAAAAA", "AAAAAA", "MAAAAA", "XAAAAA"];
      const result = searchUp(input, 3, 0);
      expect(result).toBe(true);
    });
    it("should return false when reaching out of bounds", () => {
      const input = ["ALLA", "MAAA", "XCZZ"];
      const result = searchUp(input, 2, 0);
      expect(result).toBe(false);
    });
  });

  describe("search-down", () => {
    it("should find xmas down", () => {
      const input = ["XAAAAA", "MAAAA", "AAAAAA", "SAAAAA"];
      const result = searchDown(input, 0, 0);
      expect(result).toBe(true);
    });

    it("should return false when not found", () => {
      const input = ["XAAAAA", "MAAAA", "AAAAAA", "XAAAAA"];
      const result = searchDown(input, 0, 0);
      expect(result).toBe(false);
    });

    it("should return false when reaching out of bounds", () => {
      const input = ["XAAAAA", "MAAAA", "AAAAAA"];
      const result = searchDown(input, 0, 0);
      expect(result).toBe(false);
    });
  });

  describe("search diag", () => {
    it("should return 4", () => {
      const input = [
        ".S.....S.",
        "..A...A..",
        "...M.M...",
        "....X....",
        "...M.M...",
        "..A...A..",
        ".S.....S.",
      ];

      const result = searchDiag(input, 3, 4);
      expect(result).toBe(4);
    });
  });

  describe("search MAS", () => {
    it("should find MAS", () => {
      const input = [".M.S......", "..A..MSMS.", ".M.S.MAA.."];

      const result = searchMAS(input, 1, 2);
      expect(result).toBe(true);
    });
  });
});
