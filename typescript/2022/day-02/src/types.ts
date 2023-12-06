export enum CHOICE {
    ROCK,
    PAPER,
    SCISSORS,
}

export enum RESULT {
    LOSE,
    DRAW,
    WIN,
}

export type Round = {
    choice: CHOICE;
    result: RESULT;
};
