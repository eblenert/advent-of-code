export const calculateWaysOfWinningARace = ({
  time,
  distance,
}: {
  time: number;
  distance: number;
}) => {
  let counter = 0;

  // holding button for i milliseconds
  for (let i = 0; i < time; i += 1) {
    if ((time - i) * i > distance) {
      counter += 1;
    }
  }

  return counter;
};
