const calculateSumOfEachInventory = (inventories: Array<Array<number>>) => {
    return inventories
        .filter((inv) => inv.length > 0)
        .map((inventory) => {
            return inventory.reduce((acc, current) => acc + current, 0);
        });
};

export const puzzle = (inventories: Array<Array<number>>) => {
    // console.log(inventories);
    const inventorySums = calculateSumOfEachInventory(inventories);
    const max = Math.max(...inventorySums);
    return max;
};

export const puzzle2 = (inventories: Array<Array<number>>) => {
    const inventorySums = calculateSumOfEachInventory(inventories);
    return inventorySums
        .sort((a, b) => b - a)
        .slice(0, 3)
        .reduce((acc, current) => acc + current, 0);
};
