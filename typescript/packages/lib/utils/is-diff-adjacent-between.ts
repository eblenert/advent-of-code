export const isDiffAdjacentBetween = (
  list: number[],
  min: number,
  max: number
) => {
  for (let i = 0; i < list.length - 1; i += 1) {
    const diff = difference(list[i], list[i + 1]);
    if (diff < min || diff > max) {
      return false;
    }
  }
  return true;
};

export const countDiffAdjacentBetween = (
  list: number[],
  min: number,
  max: number
) => {
  return list.reduce(
    (acc, current) => {
      if (acc.prev === null) {
        return {
          count: 0,
          prev: current,
        };
      }
      const diff = difference(acc.prev, current);

      if (diff < min || diff > max) {
        return {
          count: acc.count + 1,
          prev: current,
        };
      }

      return {
        count: acc.count,
        prev: current,
      };
    },
    { count: 0, prev: null } as { count: number; prev: number | null }
  ).count;
};

const difference = (a: number, b: number) => {
  if (a > b) {
    return a - b;
  }

  return b - a;
};
