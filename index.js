const fs = require('fs');
const inquirer = require('inquirer');
const { Shape, Circle, Square, Triangle } = require('./lib//shapes.js');

// TODO: Create a function to initialize app
function init() {
    inquirer
      .prompt([
          {
            type: 'list',
            name: 'shapeName',
            message: "What shape do you want?",
            choices: ["Circle","Triangle","Square"]
          },
          {
            type: 'input',
            name: 'shapeColor',
            message: "Please enter a valid shape color:",
          },
          {
            type: 'input',
            name: 'characters',
            message: "Please enter up to three characters to go over the shape:",
          },
          {
            type: 'input',
            name: 'charactersColor',
            message: "What color do you want the characters to be?",
          },
      ])
      .then((response) => {
        console.log(response);

        if(response.shapeName=='Circle'){

            const newShape = new Circle()
            newShape.setColor(response.shapeColor)

            text = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        
            ${newShape.render()}
        
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${response.charactersColor}">${response.characters}</text>
        
            </svg>`
        }
        else if(response.shapeName=='Square') {
            const newShape = new Square()
            newShape.setColor(response.shapeColor)

            text = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        
            ${newShape.render()}
        
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${response.charactersColor}">${response.characters}</text>
        
            </svg>`

        }

        else if(response.shapeName=='Triangle'){
            const newShape = new Triangle()
            newShape.setColor(response.shapeColor)

            text = `  <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            ${newShape.render()}

            
              <text x="150" y="150" font-size="60" text-anchor="middle" fill="${response.charactersColor}">${response.characters}</text>
            
            </svg>`

        }
        
        fs.writeFile('logo.svg', text, (err) =>
          err ? console.error(err) : console.log('Success!')
        );

      });
  }

init()





