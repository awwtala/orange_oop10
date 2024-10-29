class Shape {
  // properties
  constructor(color) {
    this.color = color;
  }

  // methods
  render() {
    return `No code for generic shape`;
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`;
  }
}

class Square extends Shape {
  render() {
    return `<rect x="75" y="25" width="150" height="150" fill="${this.color}"/> `;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="150,0 20, 200 280,200" fill="${this.color}"/>`;
  }
}

module.exports = {
  Shape,
  Circle,
  Square,
  Triangle,
};
