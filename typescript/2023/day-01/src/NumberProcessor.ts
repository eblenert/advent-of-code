const isDigit = (s: string) => !isNaN(parseInt(s, 10));
const digits = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

export class NumberProcessor {
  private firstDigit: string | undefined;
  private lastDigit: string | undefined;
  static process(line: string) {
    return new NumberProcessor(line).process();
  }
  constructor(private readonly line: string) {}

  process(): number {
    this.computeFirstDigit();
    this.computeLastDigit();
    console.log(this.firstDigit, this.lastDigit);
    return parseInt(`${this.firstDigit}${this.lastDigit}`);
  }

  private computeLastDigit() {
    let s = "";

    for (let i = this.line.length - 1; i > 0; i -= 1) {
      s = this.line[i] + s;
      this.computeDigit(i, s, (val: string) => (this.lastDigit = val));

      if (this.lastDigit) {
        break;
      }
    }
  }

  private computeFirstDigit() {
    let s = "";
    for (let i = 0; i < this.line.length; i += 1) {
      s += this.line[i];
      this.computeDigit(i, s, (val: string) => (this.firstDigit = val));
      if (this.firstDigit) {
        break;
      }
    }
  }

  private computeDigit(
    i: number,
    s: string,
    setDigit: { (val: string): string; (arg0: string): void }
  ) {
    if (isDigit(this.line[i])) {
      setDigit(this.line[i]);
    }
    for (let digit of digits) {
      if (s.includes(digit)) {
        setDigit(digits.indexOf(digit).toString());
      }
    }
  }
}
