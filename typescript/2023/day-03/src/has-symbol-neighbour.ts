const symbols = "%#*$/-&+@=";

const isSymbol = (c: string) => symbols.indexOf(c) !== -1;

export const hasSymbolNeighbour = (matrix: string[], i: number, j: number) => {
  const ll = matrix[0].length;
  const ml = matrix.length;
  return (
    (i - 1 >= 0 && j - 1 >= 0 && isSymbol(matrix[i - 1][j - 1])) ||
    (i - 1 >= 0 && isSymbol(matrix[i - 1][j])) ||
    (i - 1 >= 0 && j + 1 < ll && isSymbol(matrix[i - 1][j + 1])) ||
    (j - 1 >= 0 && isSymbol(matrix[i][j - 1])) ||
    (j + 1 < ll && isSymbol(matrix[i][j + 1])) ||
    (i + 1 < ml && j - 1 >= 0 && isSymbol(matrix[i + 1][j - 1])) ||
    (i + 1 < ml && isSymbol(matrix[i + 1][j])) ||
    (i + 1 < ml && j + 1 < ll && isSymbol(matrix[i + 1][j + 1]))
  );
};
