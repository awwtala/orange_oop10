class Shape {
  // Making the shapes a class
  constructor(color) {
    this.color = color;
    this.textX = 150;
    this.textY = 125;
    this.svgHeight = 200;
    this.svgWidth = 300;
  }
  setColor(color) {
    this.color = color;
  }
  render() {}
}
class Circle extends Shape {
  // modifys the shape class
  constructor(color) {
    super(color);
  }
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" /> `;
  }
}
// next class square
// Google SVG shapes
constructor(color) {
  super(color);
  this.textX = ;
  this.textY =;
}








