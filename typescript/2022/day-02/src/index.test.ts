import {
    calculateScore,
    doIWin,
    main,
    mapFromOpponentChoice,
    mapRoundResult,
} from '.';
import { CHOICE, RESULT } from './types';

describe('day 02', () => {
    describe('puzzle', () => {
        it('should run example', async () => {
            const result = await main('./day-02/data/example-input');
            expect(result).toBe(12);
        });

        it('should compute input', async () => {
            const result = await main('./day-02/data/input');
            console.log(result);
        });
    });

    describe('who wins round', () => {
        it('should return WIN bc opponent chose rock and i chose paper ', () => {
            const result = doIWin(CHOICE.ROCK, CHOICE.PAPER);
            expect(result).toBe(RESULT.WIN);
        });

        it('should return LOSE bc opponent chose paper and I chose rock', () => {
            const result = doIWin(CHOICE.PAPER, CHOICE.ROCK);
            expect(result).toBe(RESULT.LOSE);
        });

        it('should return DRAW if both have the same choice', () => {
            const result = doIWin(CHOICE.PAPER, CHOICE.PAPER);
            expect(result).toBe(RESULT.DRAW);
        });

        it('should return WIN bc opponent chose scissors and I chose rock', () => {
            const result = doIWin(CHOICE.SCISSORS, CHOICE.ROCK);
            expect(result).toBe(RESULT.WIN);
        });
    });

    describe('calculate score for round', () => {
        it('should return 4', () => {
            const result = calculateScore(CHOICE.ROCK, RESULT.DRAW);
            expect(result).toBe(4);
        });

        it('should return 1', () => {
            const result = calculateScore(CHOICE.PAPER, RESULT.LOSE);
            expect(result).toBe(1);
        });

        it('should return 6', () => {
            const result = calculateScore(CHOICE.SCISSORS, RESULT.WIN);
            expect(result).toBe(7);
        });
    });

    describe('map from opponent choice', () => {
        const combinations = [
            { input: 'A', result: CHOICE.ROCK },
            { input: 'B', result: CHOICE.PAPER },
            { input: 'C', result: CHOICE.SCISSORS },
        ];
        it.each(combinations)('maps to the right choice', (combination) => {
            const result = mapFromOpponentChoice(combination.input);
            expect(result).toBe(combination.result);
        });
    });
    describe('map from self choice', () => {
        const combinations = [
            { input: 'X', result: CHOICE.ROCK },
            { input: 'Y', result: CHOICE.PAPER },
            { input: 'Z', result: CHOICE.SCISSORS },
        ];
        it.each(combinations)('maps to the right choice', (combination) => {
            const result = mapRoundResult(combination.input);
            expect(result).toBe(combination.result);
        });
    });
});
