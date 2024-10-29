const inquirer = require("inquirer");
const fs = require("fs");
const {circle, triangle, square};
const shapes = require("./lib/shapes");

inquirer.prompt([
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
    type: "Pick your shape:",
    message: ["Circle", "Triangle", "Square"],
  },
  {
    name: "shapeColor",
    type: "input",
    message: "Pick your shape color (Color keyword)",
  },
])

  .then((response) => {
    console.log(
      "Your logo will be ",
      response.text,
      response.textColor,
      response.shape,
      response.shapeColor,
      "!"
    );
    makingLogo(response);
  });
  function makingLogo(response) {
    if (response.shape = circle){
    shape = new circle (response.shapeColor)
    }
    else if (response.shape = square){
    shape = new square (response.shapeColor)
    }
    else if (response.shape = triangle){
    shape = new triangle (response.shapeColor)}
const SVG {
}
  }