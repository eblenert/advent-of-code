export enum DIRECTION {
  UP,
  DOWN,
  LEFT,
  RIGHT,
}

const symbolToDirection = (symbol: string) => {
  console.log(`symbol: ${symbol}`);
  switch (symbol) {
    case "^":
      return DIRECTION.UP;
    case ">":
      return DIRECTION.RIGHT;
    case "<":
      return DIRECTION.LEFT;
    case "v":
      return DIRECTION.DOWN;

    default:
      throw Error("Invalid direction");
  }
};

export class Robot {
  private _direction: DIRECTION;
  private _visited = new Set<string>();
  private vx = 0;
  private vy = -1;
  private px = 0;
  private py = 0;

  constructor(private input: string[][]) {
    this._direction = symbolToDirection("^");
    this.findInitialPosition();
    this.addVisited();
  }

  get visited() {
    return this._visited;
  }

  move() {
    // console.log("moved robot");
    this.px += this.vx;
    this.py += this.vy;
    try {
      this.input[this.py][this.px] = "X";
      this.addVisited();
    } catch (err) {
      console.log("getting out of bounds");
    }
  }

  nextMoveIsBlocked() {
    const y = this.py + this.vy;
    const x = this.px + this.vx;

    // console.log(`x: ${x}. y: ${y}`);

    if (y >= this.input.length || x >= this.input[0].length || x < 0 || y < 0) {
      return false;
    }

    if (this.input[y][x] === "#") {
      return true;
    }

    return false;
  }

  changeDirection() {
    switch (this._direction) {
      case DIRECTION.UP:
        this.vx = 1;
        this.vy = 0;
        this._direction = DIRECTION.RIGHT;
        break;

      case DIRECTION.RIGHT:
        this.vx = 0;
        this.vy = 1;
        this._direction = DIRECTION.DOWN;
        break;

      case DIRECTION.DOWN:
        this.vx = -1;
        this.vy = 0;
        this._direction = DIRECTION.LEFT;
        break;

      case DIRECTION.LEFT:
        this.vx = 0;
        this.vy = -1;
        this._direction = DIRECTION.UP;
        break;
      default:
        throw Error("Invalid current direction");
    }
  }

  isRobotInLab() {
    if (
      this.px < 0 ||
      this.py < 0 ||
      this.px >= this.input[0].length ||
      this.py >= this.input.length
    ) {
      return false;
    }

    return true;
  }

  private addVisited() {
    this._visited.add(`${this.px}-${this.py}`);
  }

  private findInitialPosition() {
    for (let i = 0; i < this.input.length; i += 1) {
      let location = this.input[i].indexOf("^");
      if (location !== -1) {
        this.px = location;
        this.py = i;
        this.input[i][location] = "X";
      }
    }
  }
}
