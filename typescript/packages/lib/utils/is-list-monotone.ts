export const isListMonotone = (list: Array<number>): boolean => {
  if (list[0] > list[1]) {
    // decreasing
    for (let i = 0; i < list.length; i += 1) {
      if (list[i] <= list[i + 1]) {
        return false;
      }
    }
  } else {
    // increasing
    for (let i = 0; i < list.length - 1; i += 1) {
      if (list[i] >= list[i + 1]) {
        return false;
      }
    }
  }

  return true;
};
