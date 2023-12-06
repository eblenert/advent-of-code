import { Direction, Grid, Move, Position } from './types'

export const isTailTooFar = (H: Position, T: Position) => {
    return Math.abs(H.row - T.row) > 1 || Math.abs(H.column - T.column) > 1
}

const display = (
    rows: number,
    columns: number,
    knots: Array<Position>,
    S: Position
) => {
    let output = ''

    for (let i = 0; i < rows; i += 1) {
        for (let j = 0; j < columns; j += 1) {
            const knot = knots.findIndex(
                (elem) => elem.row === i && elem.column === j
            )
            if (knot != -1) {
                output += knot === 0 ? 'H' : knot
            } else {
                if (S.row === i && S.column === j) {
                    output += 'S'
                } else {
                    output += '.'
                }
            }
        }
        output += '\n'
    }
    console.log(output)
}

let S: Position = { row: 0, column: 0 }
let H: Position = { row: 0, column: 0 }
let T: Position = { row: 0, column: 0 }

const applyMove = (head: Position, direction: string) => {
    switch (direction) {
        case Direction.D:
            head.row += 1
            break
        case Direction.U:
            head.row -= 1
            break
        case Direction.L:
            head.column -= 1
            break
        case Direction.R:
            head.column += 1
            break
        default:
            throw Error('Illegal move')
    }
}

const followHead = (head: Position, tail: Position) => {
    if (head.column === tail.column) {
        applyMove(tail, head.row > tail.row ? Direction.D : Direction.U)
    } else if (head.row === tail.row) {
        applyMove(tail, head.column > tail.column ? Direction.R : Direction.L)
    } else {
        applyMove(tail, head.row > tail.row ? Direction.D : Direction.U)
        applyMove(tail, head.column > tail.column ? Direction.R : Direction.L)
    }
}

const uniquePositions = (history: Array<Position>): Array<Position> => {
    return history.filter(
        (elem, index) =>
            history.findIndex(
                (obj) => obj.column === elem.column && obj.row === elem.row
            ) === index
    )
}
export const puzzle = (moves: Array<Move>) => {
    S.row = 0
    S.column = 0

    H.row = 0
    H.column = 0

    T.row = 0
    T.column = 0

    const tailHistory: Array<Position> = [{ ...T }]

    for (const move of moves) {
        for (let step = 0; step < move.steps; step += 1) {
            applyMove(H, move.direction)

            if (isTailTooFar(H, T)) {
                followHead(H, T)
                tailHistory.push({ ...T })
            }
        }
    }
    return uniquePositions(tailHistory).length
}

export const puzzle2 = (moves: Array<Move>) => {
    S.row = 15
    S.column = 11

    H.row = 15
    H.column = 11

    T.row = 15
    T.column = 11

    const rope = [H]

    const tailHistory: Array<Position> = [{ ...T }]
    for (let i = 0; i < 8; i += 1) {
        rope.push({
            row: 15,
            column: 11,
        })
    }

    rope.push(T)

    for (const move of moves) {
        for (let step = 0; step < move.steps; step += 1) {
            applyMove(rope[0], move.direction)

            for (let knot = 0; knot < 9; knot += 1) {
                if (isTailTooFar(rope[knot], rope[knot + 1])) {
                    followHead(rope[knot], rope[knot + 1])
                    if (knot === 8) {
                        tailHistory.push({ ...rope[9] })
                    }
                }
            }
        }

        // display(21, 26, rope, S)
    }

    return uniquePositions(tailHistory).length
}
