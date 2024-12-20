import { Robot } from "./Robot";

describe("Robot", () => {
  it("should move the robot within Y axis when negative Y", () => {
    const robot = Robot.RobotBuilder.setPosition(0, 0)
      .setVelocity(0, -1)
      .setGrid(5, 5)
      .build();

    robot.move();
    console.log(robot);
    expect(robot.py).toBe(4);
  });

  it("should move the robot within X axis when negative X", () => {
    const robot = Robot.RobotBuilder.setPosition(0, 0)
      .setVelocity(-2, 0)
      .setGrid(5, 5)
      .build();

    robot.move();

    expect(robot.px).toBe(3);
  });

  it("should move the robot within Y axis when above Ymax", () => {
    const robot = Robot.RobotBuilder.setGrid(5, 5)
      .setPosition(3, 3)
      .setVelocity(0, 4)
      .build();

    console.log(robot);
    robot.move();

    expect(robot.py).toBe(2);
  });

  it("should move the robot within X axis when above Xmax", () => {
    const robot = Robot.RobotBuilder.setGrid(5, 5)
      .setPosition(3, 3)
      .setVelocity(3, 0)
      .build();

    robot.move();

    expect(robot.px).toBe(1);
  });

  it("should move robot diagnonally without teleport", () => {
    const robot = Robot.RobotBuilder.setPosition(3, 3)
      .setVelocity(1, 1)
      .setGrid(5, 5)
      .build();

    robot.move();

    expect(robot.px).toBe(4);
    expect(robot.py).toBe(4);
  });

  it("should move diagonally with teleport on X axis", () => {
    const robot = Robot.RobotBuilder.setPosition(4, 3)
      .setVelocity(2, 1)
      .setGrid(5, 5)
      .build();

    robot.move();

    expect(robot.px).toBe(1);
    expect(robot.py).toBe(4);
  });
});
