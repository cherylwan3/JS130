/**
 * P:
 * I stands for 1
  V stands for 5
  X stands for 10
  L stands for 50
  C stands for 100
  D stands for 500
  M stands for 1,000
  - goal: modern decimal numbers into their Roman number equivalents
  - only care about numbers 0 - 3,000 
  - Modern Roman numerals express digit seperately
   separately,
    - starting with the left most digit and 
    skipping any digit with a value of zero

  input: digit
 output: roman number
 * 
 * E:
 1  => I
10  => X
7  => VII
1990 => MCMXC
  1000=M
  900=CM
  90=XC

2008 => MMVIII
 => 2000=MM
 => 8=VIII
 * ---------------------------------------------------------------
 * D:
 * - object:
 *  key: numbers
 *  value: roman numerals 
 * 
 * '4000' => idx 0 = 4
 *  - length of str = 4, 10^3 = 1000
 * - 10^0 = 1
 * 
 *  1: I  2: II 3: III 4: IV 5: V
  6: VI 7: VII 8: VIII 9: IX

  900 => CM
  500 => D
  600 => DC
-----------------
-----------------------------
  - if number >= 1,000 (1,000 - 30000)
   - M = 1000
    - 1000 => M
    - 2000 => MM
    - 3000 => MMM
  - if number >= 100 && < 1000 (btw 100 - 900)
    - C => 100, D => 500, M =>1000
    - 100 => C
    - 300 => CCC
    - 400 => CD
    - 500 => D
    - 600 => DC
    - 700 => DCC
    - 800 => DCCC
    - 900 => CM
  - number >= 10 and < 100 (btw 10 and 90)
    -  X => 10, L => 50,  C => 100
    - 10 => X
    - 20 => XX
    - 40 => XL
    - 50 => L
    - 60 => LX
    - 90 => XC
  - number <= 9 (1 to 9)
  - I => 1, V => 5, X => 10
  1: I  2: II 3: III 4: IV 5: V
  6: VI 7: VII 8: VIII 9: IX
--------------------
pattern of converting place digit to roman numeral below 1,000
    if digit is < 5, append (5 - digit) number of 1st Roman numeral in front of 2nd roman numeral
    if digit is 5, finalRomanNum => 2nd roman numeral
    if digit > 5 and not 9, append(digit - 5) number of 1st roman numeral after 2ndroman numeral
    if digit = 9, finalRomanNum => 2nd roman numeral + 3rd roman numeral
-----------------------------
 * A:
 * - build an object with matching number keys to roman numeral values
 *  - array for 3digit => [C, D, M]
 * - array for 2digit => [X, L, C]
 * - array for 1digit => [I, V, X]
 * 
 * toRoman method:
 * 
 * getPlace:
 * - get the place of each digit and its digit & matching roman numeral
 *  - turn the number into str
 *  - loop through the array of digits from idx 0 to < length of number string
 *    -  get place of number digit by number string length - index 
 *    - get the digit at current idx
 *   
 *   - convert each place digit into a roman numeral 
      -if place = 4 (1,000 - 3,000)
        - 'M'.repeat(digit)
      -if place = 3 (100 - 900)
      if place = 2 (10 - 90)
      if place = 1 (1 - 9)
        - get the matching romanNumeralArray
          if digit is < 5, append (5 - digit) number of 1st Roman numeral in front of 2nd roman numeral
        if digit is 5, finalRomanNum => 2nd roman numeral
        if digit > 5 and not 9, append(digit - 5) number of 1st roman numeral after 2ndroman numeral
        if digit = 9, finalRomanNum => 1st roman numeral + 3rd roman numeral
 **/

class RomanNumeral {
  static PLACE_OBJ = {
    1: ['I', 'V', 'X'],
    2: ['X', 'L', 'C'],
    3:['C', 'D', 'M'],
  };

  constructor(number) {
    this.numStr = String(number);
  }

  getRomanNumeral(place, digit) {
    let romanNumeral = '';

    if (place === 4) {
      romanNumeral += 'M'.repeat(digit);
    } else {
      let romanArr = RomanNumeral.PLACE_OBJ[place];

      if (digit === 0) {
        return '';
      } else if (digit < 4) {
        romanNumeral += (romanArr[0].repeat(digit));
      } else if (digit === 4) {
        romanNumeral += (romanArr[0].repeat(5 - digit) + romanArr[1]);
      } else if (digit === 5) {
        romanNumeral += romanArr[1];
      } else if (digit > 5 && digit < 9) {
        romanNumeral += (romanArr[1] + romanArr[0].repeat(digit - 5));
      } else if (digit === 9) {
        romanNumeral += (romanArr[0] + romanArr[2]);
      }
    }

    return romanNumeral;
  }

  toRoman() {
    let numLength = this.numStr.length;
    let finalRomanNum = '';
    
    for (let idx = 0; idx < numLength; idx += 1) {
      let place = numLength - idx;
      let digit = Number(this.numStr[idx]);
      
      let romanNumeral = this.getRomanNumeral(place, digit);
      finalRomanNum += romanNumeral;
    }

    return finalRomanNum;
  }

}

module.exports = RomanNumeral; 