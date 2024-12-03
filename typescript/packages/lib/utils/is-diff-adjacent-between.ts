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

const difference = (a: number, b: number) => {
  if (a > b) {
    return a - b;
  }

  return b - a;
};
