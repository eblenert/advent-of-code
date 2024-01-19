import { getExtractionFlag } from "./get-extraction-flag";
import { FLAGS } from "./types";

describe("Get extraction flag", () => {
  it.each([
    ["seeds:", FLAGS.SEEDS],
    ["seed-to-soil", FLAGS.SEED_TO_SOIL],
    ["soil-to-fertilizer", FLAGS.SOIL_TO_FERT],
    ["fertilizer-to-water", FLAGS.FERT_TO_WATER],
    ["water-to-light", FLAGS.WATER_TO_LIGHT],
    ["light-to-temperature", FLAGS.LIGHT_TO_TEMP],
    ["temperature-to-humidity", FLAGS.TEMP_TO_HUM],
    ["humidity-to-location", FLAGS.HUM_TO_LOC],
  ])("should match expected flag", (line, flag) => {
    expect(getExtractionFlag(line)).toBe(flag);
  });
});
