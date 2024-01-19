import { SourceDestMapperFunc } from "./types";

export const sourceDestMapper: SourceDestMapperFunc = (source, maps) => {
  const map = maps.find(
    (m) => m.sourceStart <= source && source <= m.sourceStart + m.length
  );

  if (!map) {
    return source;
  }

  return source - map?.sourceStart + map.destinationStart;
};
