const { Circle, Square, Triangle } = require("./shapes");

describe("it should be able to create a Circle shape", () => {
  test("Circle produces an object", () => {
    // test value initialization
    const shapeColor = "blue";

    // test process
    const testCircle = new Circle(shapeColor);

    // conclusion
    expect(typeof testCircle).toBe("object");
  });

  test("Circle  has a color", () => {
    // test value initialization
    const shapeColor = "blue";

    // test process
    const testCircle = new Circle(shapeColor);

    // conclusion
    expect(testCircle.render()).toBe(
      `<circle cx="150" cy="100" r="80" fill="${shapeColor}"/>`
    );
  });
});

// square
describe("it should be able to create a Square shape", () => {
  test("Square produces an object", () => {
    // test value initialization
    const shapeColor = "blue";

    // test process
    const testSquare = new Square(shapeColor);

    // conclusion
    expect(typeof testSquare).toBe("object");
  });

  test("Square has a color", () => {
    // test value initialization
    const shapeColor = "blue";

    // test process
    const testSquare = new Square(shapeColor);

    // conclusion
    expect(testSquare.render().trim()).toBe(
      `<rect x="75" y="25" width="150" height="150" fill="${shapeColor}"/>`
    );
  });
});
// triangle
describe("it should be able to create a Triangle shape", () => {
  test("Triangle produces an object", () => {
    // test value initialization
    const shapeColor = "red";

    // test process
    const testTriangle = new Triangle(shapeColor);

    // conclusion
    expect(typeof testTriangle).toBe("object");
  });

  test("Triangle has a color", () => {
    // test value initialization
    const shapeColor = "red";

    // test process
    const testTriangle = new Triangle(shapeColor);

    // conclusion
    expect(testTriangle.render()).toBe(
      `<polygon points="150,0 20, 200 280,200" fill="${shapeColor}"/>`
    );
  });
});
