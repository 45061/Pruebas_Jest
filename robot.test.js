const {createRobot} = require("./robot");

describe('Test in Y', ()=>{

  test("the robot should increase Y by 1", () => {
    const robot = createRobot()
    expect(robot.moveUp(5, 2)).toEqual([5, 3]);
  });

  test("the robot should dicrease Y by -1", () => {
    const robot = createRobot()
    expect(robot.moveDown(4, 2)).toEqual([4, 1]);
  });
});

describe('Test in x', ()=>{
  test("the robot should dicrease X by -1", () => {
    const robot = createRobot()
    expect(robot.moveLeft(4, 3)).toEqual([3, 3]);
  });

  test("the robot should increase X by 1", () => {
    const robot = createRobot()
    expect(robot.moveRight(1, 2)).toEqual([2, 2]);
  });
});


describe('Test Position', ()=>{
  test("the robot should return X", () => {
    const robot = createRobot()
    expect(robot.getX(8, 1)).toBe(8);
  });
  test("the robot should return Y", () => {
    const robot = createRobot()
    expect(robot.getY(5, 9)).toBe(9);
  });
});

describe('Test Errors', ()=>{
  test("the robot should return Error when y greater than 10", () => {
    const robot = createRobot()
    expect(robot.moveUp(7, 10)).toEqual("ERROR");
  });

  test("the robot should return Error when original coordinates are outside than 10", () => {
    const robot = createRobot()
    expect(robot.moveUp(20, 10)).toEqual("ERROR");
  });

  test("the robot should return Error when X coordinat is outside than 10", () => {
    const robot = createRobot()
    expect(robot.getX(11, 1)).toBe("ERROR");
  });
  test("the robot should return Error when Y coordinat is outside than 10", () => {
    const robot = createRobot()
    expect(robot.getY(1, 11)).toBe("ERROR");
  });
  test("the robot should return Error when original coordinates are minors than 0", () => {
    const robot = createRobot()
    expect(robot.moveLeft(-2, 5)).toEqual("ERROR");
  });
  test("the test of function createRobot coordinates are minors than 0", () => {
    expect(createRobot(-2, 5)).toEqual("ERROR");
  });
});