import {
  arePagesInCorrectOrder,
  pageIsInCorrectPlace,
} from "./are-pages-in-correct-order";

export const correctPagesInUpdate = (
  update: Array<string>,
  pageOrder: Map<string, Array<string>>
): Array<string> => {
  update.sort((a, b) => {
    const pageOrderA = pageOrder.get(a);
    if (pageOrderA?.includes(b)) {
      return -1;
    }
    return 1;
  });
  return update;
};
