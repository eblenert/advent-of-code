import { FLAGS } from "./types";

export const getExtractionFlag = (line: string): number => {
  if (line.startsWith("seeds:")) {
    return FLAGS.SEEDS;
  }

  if (line.startsWith("seed-to-soil")) {
    return FLAGS.SEED_TO_SOIL;
  }

  if (line.startsWith("soil-to-fertilizer")) {
    return FLAGS.SOIL_TO_FERT;
  }

  if (line.startsWith("fertilizer-to-water")) {
    return FLAGS.FERT_TO_WATER;
  }

  if (line.startsWith("water-to-light")) {
    return FLAGS.WATER_TO_LIGHT;
  }

  if (line.startsWith("light-to-temperature")) {
    return FLAGS.LIGHT_TO_TEMP;
  }

  if (line.startsWith("temperature-to-humidity")) {
    return FLAGS.TEMP_TO_HUM;
  }

  if (line.startsWith("humidity-to-location")) {
    return FLAGS.HUM_TO_LOC;
  }

  throw Error("No flag found.");
};
