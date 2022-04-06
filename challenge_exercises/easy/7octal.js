/**
 * P:
233 # decimal
= 2*10^2 + 3*10^1 + 3*10^0
= 2*100  + 3*10   + 3*1

Octal (Base-8)
233 # octal
= 2*8^2 + 3*8^1 + 3*8^0
= 2*64  + 3*8   + 3*1
= 128   + 24    + 3
= 155

-right most digit multipled by 8 to power of 0
- left most digit = 8 multiplied by 8 to power of (length - 1)
- all values then summed
- octal numbers only include digits 0 through 7.
  - digits 0,8,9 not valid 
  - letters not valid 

D:
- array to keep the result of digit * 8^n
- string to number conversion

A:
- octalString to arrayNum
  - turn arrayNum back to number
  - iterate over arrayNum(reverse it)
      -multiply num by 8^index

constructor: Octal(octal input string)

toDecimal() 
  - iterate over digitArray using reduce
    - multiply digit by 8^index
    - add this to the accum

stringToOctalDigits
  - convert octal string to array of digits 
    - convert octalString to array, 
    - map every strDigit to numbers
    - reverse the array
      -return this 

*/

class Octal {
  constructor(octal) {
    this.octal = octal;
  }

  toDecimal() {
    if (!this.validOctal()) return 0;
    
    let digitArr = this.toDigitArr();
    return digitArr.reduce((sum, digit, idx) => sum + (digit * (8**idx)));
  }

  toDigitArr() {
    return this.octal.split('').reverse().map(str => +str);
  }

  validOctal() {
    return this.octal.split('').every(char => char.match(/[0-7]/));
  }
}

module.exports = Octal;
