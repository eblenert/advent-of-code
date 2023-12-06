export type Grid = Array<Array<string>>

export enum Direction {
    U = 'U',
    D = 'D',
    L = 'L',
    R = 'R',
}
export type Move = {
    direction: string,
    steps: Number
}

export type Position = {
    row: number,
    column: number
}