import { arePagesInCorrectOrder } from "./are-pages-in-correct-order";

describe("correct-page-order", () => {
  const pageOrder = new Map<string, Array<string>>();
  pageOrder.set("47", ["53", "13", "61", "29"]);
  pageOrder.set("97", ["13", "61", "47", "29", "53", "75"]);
  pageOrder.set("75", ["29", "53", "47", "61", "13"]);
  pageOrder.set("61", ["13", "53", "29"]);
  pageOrder.set("29", ["13"]);
  pageOrder.set("53", ["29", "13"]);

  it("should return false", () => {
    const update = ["75", "97", "47", "61", "53"];
    const result = arePagesInCorrectOrder(update, pageOrder);
    expect(result).toBe(false);
  });
});
