import { puzzle, puzzle2 } from '.';
import { readLinesFromFile } from '../../utils/read-lines-from-file';

const getElvesInventory = async (file: string) => {
    const data = await readLinesFromFile(file);

    let counter = 0;
    return data
        .map((x) => parseInt(x))
        .reduce<Array<Array<number>>>(
            (acc, current) => {
                if (Number.isNaN(current)) {
                    counter++;
                    acc.push([]);
                } else {
                    acc[counter].push(current);
                }
                return acc;
            },
            [[]]
        );
};

describe('day 01', () => {
    describe('puzzle', () => {
        it('should run example correctly', async () => {
            const inventories = await getElvesInventory(
                './day-01/data/example'
            );
            const result = puzzle(inventories);
            console.log(result);
        });

        it('should run input correctly', async () => {
            const inventories = await getElvesInventory('./day-01/data/input');
            const result = puzzle(inventories);
            console.log(result);
        });

        it('should return top 3 elves', async () => {
            const inventories = await getElvesInventory('./day-01/data/input');
            const result = puzzle2(inventories);
            console.log(result);
        });
    });
});
