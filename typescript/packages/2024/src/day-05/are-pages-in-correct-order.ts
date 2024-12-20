export const arePagesInCorrectOrder = (
  update: Array<string>,
  pageOrder: Map<string, Array<string>>
): boolean => {
  const checkPage = (_: any, index: number) =>
    pageIsInCorrectPlace(index, update, pageOrder);
  return update.every(checkPage);
};

export const pageIsInCorrectPlace = (
  index: number,
  array: Array<string>,
  pageOrder: Map<string, Array<string>>
) => {
  const value = array[index];

  const pagesBefore = index > 0 ? array.slice(0, index) : [];

  if (pagesBefore.length === 0) {
    return true;
  }

  return pagesBefore.every((page) => pageOrder.get(page)?.includes(value));
};
