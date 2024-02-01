export class Choice {
  private choices: Array<string>;
  private iterationCount = 0;

  constructor(choiceString: string) {
    this.choices = choiceString.split("");
  }

  next(): { value: "L" | "R"; done: boolean } {
    if (this.iterationCount < this.choices.length - 1) {
      return {
        value: this.choices[this.iterationCount++] as "L" | "R",
        done: false,
      };
    }

    return {
      value: this.choices[this.iterationCount] as "L" | "R",
      done: true,
    };
  }

  reset() {
    this.iterationCount = 0;
  }
}
