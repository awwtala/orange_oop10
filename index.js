const inquirer = require("inquirer");

const SVG = require("./lib/svg");
const Text = require("./lib/text");
const { Shape, Circle, Square, Triangle } = require("./lib/shapes");
const fs = require("fs");

inquirer
  .prompt([
    {
      name: "text",
      type: "input",
      message: "Enter your logo text (up to 3 characters or numbers)",
    },
    {
      name: "textColor",
      type: "input",
      message: "Pick your text color (Color keyword)",
    },
    {
      name: "shape",
      type: "list",
      message: "Pick your shape:",
      choices: ["Circle", "Triangle", "Square"],
    },
    {
      name: "shapeColor",
      type: "input",
      message: "Pick your shape color (Color keyword)",
    },
  ])
  .then((answers) => {
    // console.log(answers);

    const myText = new Text(answers.text, answers.textColor);
    const textElement = myText.render();

    let myShape;

    if (answers.shape == "Circle") {
      myShape = new Circle(answers.shapeColor);
    } else if (answers.shape == "Square") {
      myShape = new Square(answers.shapeColor);
    } else if (answers.shape == "Triangle") {
      myShape = new Triangle(answers.shapeColor);
    }

    const shapeElement = myShape.render();

    const mySVG = new SVG(shapeElement, textElement);
    const svgCode = mySVG.render();

    // console.log(svgCode);

    fs.writeFile("./examples/output.svg", svgCode, () => {
      console.log("Logo has been generated successfully!");
    });
  });
