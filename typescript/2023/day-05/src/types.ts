export enum FLAGS {
  SEED_TO_SOIL,
  SOIL_TO_FERT,
  FERT_TO_WATER,
  WATER_TO_LIGHT,
  LIGHT_TO_TEMP,
  TEMP_TO_HUM,
  HUM_TO_LOC,
  SEEDS,
}

export type SourceDestMapType = {
  destinationStart: number;
  sourceStart: number;
  length: number;
};

export type SourceDestMapperFunc = (
  source: number,
  maps: Array<SourceDestMapType>
) => number;
