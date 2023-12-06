const display = (grid: Array<Array<string>>) => {
    let output = '';

    for (let i = 0; i < 6; i += 1) {
        for (let j = 0; j < 40; j += 1) {
            output += grid[i][j];
        }
        output += '\n';
    }

    console.log(output);
};

const initializeGrid = (
    rows: number,
    columns: number
): Array<Array<string>> => {
    const arr = [];

    for (let i = 0; i < rows; i += 1) {
        arr.push(Array.from('.'.repeat(columns).split('')));
    }
    return arr;
};

export const shouldPixelBeLit = (pixel: number, sprite: number) => {
    return pixel === sprite - 1 || pixel === sprite || pixel == sprite + 1;
};

const displaySprite = (x: number) => {
    let output = '';
    for (let i = 0; i < 40; i += 1) {
        if (i == x) {
            output += '###';
            i += 3;
        } else {
            output += '.';
        }
    }
    return output;
};
export const puzzle = (instructions: Array<number | null>) => {
    let X = 1;
    let cycles = 1;
    let isProcessing: Boolean = false;
    const it = instructions[Symbol.iterator]();
    let instruction = null;
    let sum = 0;
    let whenToMoveSprite = 0;

    const screen = initializeGrid(6, 40);

    for (cycles = 1; cycles <= 240; cycles += 1) {
        if (!isProcessing) {
            instruction = it.next();
            if (instruction.done) {
                break;
            }
            console.log(instruction);
            if (!Number.isNaN(instruction?.value)) {
                isProcessing = true;
            }
        }
        const pixelX = (cycles - 1) % 40;
        const line = Math.floor((cycles - 1) / 40);

        if (shouldPixelBeLit(pixelX, X)) {
            screen[line][pixelX] = '#';
        }

        console.log(`will draw pixel ${pixelX} of line ${line}`);
        display(screen);

        if (isProcessing) {
            whenToMoveSprite++;
        }
        if (whenToMoveSprite === 2 && instruction?.value) {
            X += instruction?.value;
            whenToMoveSprite = 0;
            isProcessing = false;
            console.log(`X is now ${X}`);
        }

        console.log(displaySprite(X - 1));
    }

    return sum;
};
