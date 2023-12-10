import { readLinesFromFile } from "../../utils/read-lines-from-file";
import { CHOICE, RESULT, Round } from "./types";

export const doIWin = (op: CHOICE, me: CHOICE) => {
  if (op === me) {
    return RESULT.DRAW;
  }

  if (
    (me === CHOICE.ROCK && op === CHOICE.SCISSORS) ||
    (me === CHOICE.PAPER && op === CHOICE.ROCK) ||
    (me === CHOICE.SCISSORS && op === CHOICE.PAPER)
  ) {
    return RESULT.WIN;
  }

  return RESULT.LOSE;
};

export const getChoiceScore = (choice: CHOICE) => {
  const choiceScores = [1, 2, 3];
  return choiceScores[choice];
};
export const chooseToSatisfyResult = (
  opponent: CHOICE,
  result: RESULT
): CHOICE => {
  if (result === RESULT.WIN) {
    if (opponent === CHOICE.ROCK) {
      return CHOICE.PAPER;
    }
    if (opponent === CHOICE.PAPER) {
      return CHOICE.SCISSORS;
    }

    if (opponent === CHOICE.SCISSORS) {
      return CHOICE.ROCK;
    }
  } else if (result === RESULT.LOSE) {
    if (opponent === CHOICE.ROCK) {
      return CHOICE.SCISSORS;
    }
    if (opponent === CHOICE.PAPER) {
      return CHOICE.ROCK;
    }

    if (opponent === CHOICE.SCISSORS) {
      return CHOICE.PAPER;
    }
  }

  // it's a DRAW
  return opponent;
};
export const calculateScore = (opponent: CHOICE, result: RESULT) => {
  const winScores = [0, 3, 6];
  const myChoice = chooseToSatisfyResult(opponent, result);
  // const roundResult = doIWin(opponent, myChoice);
  return winScores[result] + getChoiceScore(myChoice);
};

export const mapFromOpponentChoice = (input: string): CHOICE => {
  const options = ["A", "B", "C"];
  return options.indexOf(input);
};

export const mapRoundResult = (input: string): RESULT => {
  const options = ["X", "Y", "Z"];
  return options.indexOf(input);
};

const getRoundsStragety = async (file: string): Promise<Array<Round>> => {
  const data = await readLinesFromFile(file);

  return data.map((line) => {
    const choices = line.split(" ");
    return {
      choice: mapFromOpponentChoice(choices[0]),
      result: mapRoundResult(choices[1]),
    };
  });
};

export const puzzle = (rounds: Array<Round>) => {
  const roundReults = rounds
    .map((input) => calculateScore(input.choice, input.result))
    .filter((x) => !Number.isNaN(x));
  return roundReults.reduce((sum, current) => sum + current, 0);
};

export const main = async (file: string) => {
  const rounds = await getRoundsStragety(file);
  return puzzle(rounds);
};
