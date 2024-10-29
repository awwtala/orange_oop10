class SVG {
  // properties
  constructor(shape, text) {
    this.shapeElement = shape;
    this.textElement = text;
  }

  // methods
  render() {
    return `
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

        ${this.shapeElement}

        ${this.textElement}

    </svg>  
        `;
  }
}

module.exports = SVG;

// const mySVG = new SVG("circle", "ABC");

// console.log(mySVG.render());
