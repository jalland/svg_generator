// TODO: Import the Validate class.

const { Shape, Circle, Square, Triangle } = require('./shapes.js');

// TODO: Describe a testing suite for checking the functionality of the Validate class.

describe('Validate shapes render returns the correct information', () => {
  // TODO: Write a test that asserts that isPassword() returns false when passed an empty string.

  describe('circle', () => {
    it('should return the circle points and correct color', () => {
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
    });
  });

  describe('square', () => {
    it('should return the square points and correct color', () => {
        const shape = new Square();
        shape.setColor("green");
        expect(shape.render()).toEqual('<rect x="50" y="10" width="200" height="200" fill="green" />');
    });
  });

  describe('triangle', () => {
    it('should return the triangle points and correct color', () => {
        const shape = new Triangle();
        shape.setColor("yellow");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="yellow" />');
    });
  });
});