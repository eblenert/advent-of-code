export class Robot {
  px: number;
  py: number;
  vx: number;
  vy: number;
  xMax: number;
  yMax: number;

  static RobotBuilder = new (class {
    private px = 0;
    private py = 0;
    private vx = 0;
    private vy = 0;
    private x = 0;
    private y = 0;

    setPosition(x: number, y: number) {
      this.px = x;
      this.py = y;
      return this;
    }
    setVelocity(x: number, y: number) {
      this.vx = x;
      this.vy = y;
      return this;
    }
    setGrid(x: number, y: number) {
      this.x = x;
      this.y = y;
      return this;
    }
    build() {
      return new Robot(this.px, this.py, this.vx, this.vy, this.x, this.y);
    }
  })();
  private constructor(
    px: number,
    py: number,
    vx: number,
    vy: number,
    x: number,
    y: number
  ) {
    this.px = px;
    this.py = py;
    this.vx = vx;
    this.vy = vy;
    this.xMax = x;
    this.yMax = y;
  }

  move() {
    this.px += this.vx;
    this.py += this.vy;

    if (this.py < 0) {
      this.py = this.yMax + this.py;
    }

    if (this.px < 0) {
      this.px = this.xMax + this.px;
    }

    if (this.px >= this.xMax) {
      this.px -= this.xMax;
    }

    if (this.py >= this.yMax) {
      this.py -= this.yMax;
    }
  }
}
