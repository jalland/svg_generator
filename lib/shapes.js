// TODO: Create a class constructor named BlogPost that takes in 'authorName', 'title', 'text', and 'createdOn'.
class Shape {
    constructor(shapeName, color){
        this.shapeName = shapeName
        this.color = color
    }
    // Set the color
    setColor(color){
        this.color = color
    }
}

class Circle extends Shape {
    constructor(color) {
      super(color)
    }
    setColor(color){
        this.color = color
    }
    //Render the image
    render(){
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
      }
}

class Square extends Shape {
    constructor(color) {
      super(color)
    }
    setColor(color){
        this.color = color
    }
    //Render the image
    render(){
        return `<rect x="50" y="10" width="200" height="200" fill="${this.color}" />`
      }
}

class Triangle extends Shape {
    constructor(color) {
      super(color)
    }
    setColor(color){
        this.color = color
    }
    //Render the image
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
      }
}




// const newShape = new Shape(
//     'Shape',
//     'blue',
//   );

//   const newCircle = new Circle("Purple")
//   newCircle.setColor("Black")
//   console.log(newCircle.render())

//   newShape.setColor("red")
//   console.log(newShape.color)

  module.exports = { Shape, Circle, Square, Triangle };




