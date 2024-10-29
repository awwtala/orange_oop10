class Text {
  // properties
  constructor(content, color) {
    this.content = content;
    this.color = color;
  }

  // methods
  render() {
    return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.content}</text>`;
  }
}

module.exports = Text;

// const myText = new Text("ABC", "yellow");

// console.log(myText.render());
