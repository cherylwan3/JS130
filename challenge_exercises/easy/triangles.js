/**
 * P:
 * - program determines whether a triangle is equilateral, isosceles, or scalene
 * - rules:
 *  - equilateral triangle: 3 side same length
 *  - isosceles triangle: only 2 sides same length
 *  - scalene triangle: 3 different lengths, no 2 sides have equal length
 * - all sides length > 0
 * - no negative lengths 
 * - sum of the 2 sides > 3rd side length.
 *
 * -------
 * E:
 * - a constructor that accepts 3 arguments representing three side lengths.
 * - an exception is raised in the constructor:
 *  -  if any side length is <= 0.
 *  - if the side lengths taken together don't describe a valid triangle
 * 
 * - a method 'kind' that returns a string representing the type of the triangle.
 * ----
 * D:
 * - constructor 
 * - numbers 
 * input: 
 * - 3 triangle lengths => store numbers in array
 * output:
 * - str indicating type of triangle
 * - if illegal (violates rules) => throw 
 * ----
 * A:
 * the constructor:
 * - save 3 side lengths into variables, then put into array
 * - check if all 3 side variables are > 0, throw if not
 * - order the array from least to greatest
 * - check if addition of first 2 variables > 3rd variable
 *  - throw if not
 * 
 * kind method 
 * - if all sides equal => 'equilateral'
 * - if all sides are different => 'scalene'
 * - else => 'isosceles triangle'
*/

class Triangle {
  constructor (side1, side2, side3) {
    this.sides = [side1, side2, side3];
    this.sides.sort((a,b) => a - b);

    if (this.isInvalid()) {
      throw new Error("Invalid triangle lengths");
    }
  }

  isInvalid() {
    let [side1, side2, side3] = this.sides;
    return (this.sides.some(side => side <= 0)) ||
          ((side1 + side2) <= side3);
  }

  kind() {
    let [side1, side2, side3] = this.sides;
    if (side1 === side2 && side2 === side3) {
      return 'equilateral';
    } else if (side1 !== side2 && side2 !== side3 && side1 !== side3) {
      return 'scalene';
    } else {
      return 'isosceles';
    }
  }
}

module.exports = Triangle;