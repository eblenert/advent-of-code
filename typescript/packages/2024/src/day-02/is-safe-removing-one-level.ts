import { isListMonotone } from "@lib/utils/is-list-monotone";
import { isReportSafe } from ".";

export const isSafeRemovingOneLevel = (list: number[]) => {
  for (let i = 0; i < list.length; i += 1) {
    const newList = list.toSpliced(i, 1);
    if (isReportSafe(newList) && isListMonotone(newList)) {
      return true;
    }
  }

  return false;
};
