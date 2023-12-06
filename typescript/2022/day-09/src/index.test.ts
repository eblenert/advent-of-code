import { puzzle, isTailTooFar, puzzle2 } from '.'
import { readLinesFromFile } from '../../utils/read-lines-from-file'
import { Move, Position } from './types'

const getMovesFromFile = async (file: string) => {
    const data = await readLinesFromFile(file)
    return data
        .map((line) => line.split(' '))
        .map(
            (rawMove): Move => ({
                direction: rawMove[0],
                steps: parseInt(rawMove[1]),
            })
        )
}

describe('day 09', () => {
    describe('puzzle', () => {
        it('should return 13 for demo', async () => {
            const moves = await getMovesFromFile('./day-09/data/demo-input')
            const result = puzzle(moves)
            expect(result).toBe(13)
        })

        it('should run the value for puzzle input', async () => {
            const moves = await getMovesFromFile('./day-09/data/input')
            const result = puzzle(moves)
            expect(result).toBe(5513)
        })
    })

    describe('puzzle 2', () => {
        it('should run simple example', async () => {
            const moves = await getMovesFromFile('./day-09/data/demo-input2')
            const result = puzzle2(moves)
            expect(result).toBe(1)
        })

        it('should run larger example', async () => {
            const moves = await getMovesFromFile('./day-09/data/demo-input3')
            const result = puzzle2(moves)
            expect(result).toBe(36)
        })

        it('should run puzzle 2 with main input', async () => {
            const moves = await getMovesFromFile('./day-09/data/input')
            const result = puzzle2(moves)
            expect(result).toBe(2427)
        })
    })

    describe('is tail too far', () => {
        it('should return true if H and T are on the same line but not next to each other', () => {
            const H: Position = {
                row: 0,
                column: 0,
            }

            const T: Position = {
                row: 0,
                column: 2,
            }

            expect(isTailTooFar(H, T)).toBe(true)
        })

        it('should return true if H and T are on the same column but not next to each other', () => {
            const H: Position = {
                row: 0,
                column: 0,
            }

            const T: Position = {
                row: 2,
                column: 0,
            }

            expect(isTailTooFar(H, T)).toBe(true)
        })

        it('should return false if H and T are not the same row and column but close diagonally', () => {
            const H: Position = {
                row: 1,
                column: 1,
            }

            const T: Position = {
                row: 0,
                column: 0,
            }

            expect(isTailTooFar(H, T)).toBe(false)
        })

        it('should return false if H and T are in the same place', () => {
            const H: Position = {
                row: 1,
                column: 1,
            }

            const T: Position = {
                row: 1,
                column: 1,
            }

            expect(isTailTooFar(H, T)).toBe(false)
        })

        it('should return true if H and T are not on the same row nor column and are far away', () => {
            const H: Position = {
                row: 1,
                column: 2,
            }

            const T: Position = {
                row: 0,
                column: 0,
            }

            expect(isTailTooFar(H, T)).toBe(true)
        })
    })
})
