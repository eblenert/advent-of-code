export const getMedian = (input: Array<any>) => {
  const middle =
    input.length % 2 === 0 ? input.length / 2 : Math.floor(input.length / 2);
  return input[middle];
};
