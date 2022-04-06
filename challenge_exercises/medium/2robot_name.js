/**
 * p:
 * - manage robot factory settings.
 * - The first time you boot them up, a random name is generated => RX837 or BC811.
 * -name: letter, letter, digit, digit digit
 * D:
 * - array to keep all names generated
 * - function to generate name
 * -name:
 *  
 * 
 * A:
 * class Robot
  constructor
    -this.robotName = this.name()
    - this.names = [];
 * 
 * name()
 *  - set robotName to ''
 *  - get letter at random idx, append to robotName, 2 x
 *  - get number at random idx, append to robotName, 3 times,
 * 
 * - until this.names doesn't include robotName, set 
 * - set this.name to robotName
 * 
 * generating random letter idx:
 *  Math.floor(Math.random * alphabet.length)
 * 
 * generate random digit:
 * Math.floor(Math.random * numbers.length)
 * 
 * reset
 *  - call name() again
*/

class Robot {
  static alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  static numbers = '0123456789';
  static names = [];

  name() {
    if (this.robotName) return this.robotName;
    
    while (Robot.names.includes(this.robotName) || !this.robotName) {
      this.robotName = this.generateName();
    }
    Robot.names.push(this.robotName);
    return this.robotName;
  }

  reset() {
    let nameIdx = Robot.names.indexOf(this.robotName);
    Robot.names.splice(nameIdx, 1);
    this.robotName = null;
  }

  generateName() {
    let robotName = '';
    for (let count = 1; count <= 5; count += 1) {
      if (count <= 2) {
        robotName += this.randomLetter();
      } else {
        robotName += this.randomNumber();
      }
    }

    return robotName;
  }

  randomLetter() {
    let idx = Math.floor(Math.random() * Robot.alphabet.length);
    return Robot.alphabet[idx];
  }

  randomNumber() {
    let idx = Math.floor(Math.random() * Robot.numbers.length);
    return Robot.numbers[idx];
  }

}

module.exports = Robot;