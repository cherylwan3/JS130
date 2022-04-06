/**
 * P:
 * input: string of numbers
 * output: nested array of digits
 * 
 * E:
 * input length must be smaller than or equal to string of number's length,
 *  if not, throw 
 * 
 * A:
 * class Series
 * 
 * constructor 
 *   -input: strNum
 * 
 * slices instance method:
 *  - input: length
 * 
 * set resultArr to [];
 * -get the slices of strNum with correct length 
 *  -outerloop:
 *    - iterate over strNum from idx 0 to strNum.length - length
*    - endIdx =  startIdx + length;
 * - place the digitString into resultArr
 * - for each digitString inside resultArr, turn it into an array of numbers
 * 
 */

class Series {
  constructor(number) {
    this.numStr = number;
  }

  slices(length) {
    if (length > this.numStr.length) {
      throw new Error('Series length can\'t be greater than string length');
    }
    
    let strArr = [];
    for (let startIdx = 0; startIdx <= this.numStr.length - length; startIdx += 1) {
      let endIdx = startIdx + length;
      let digitsStr = this.numStr.slice(startIdx, endIdx);
      strArr.push(digitsStr);
    }

    return this.numArray(strArr);
  }

  numArray(array) {
    return array.map(digitStr => {
      return digitStr.split('').map(digit => +digit);
    });
  }
}

module.exports = Series;

// book method
class Series {
  constructor(str) {
    this.numberString = str;
  }

  slices(length) {
    this.validateSeries(length);

    let digits = this.numberString.split('')
                                  .map(digit => Number(digit));
    let maxStart = this.numberString.length - length;
    let seriesList = [];

    for (let idx = 0; idx <= maxStart; idx++) {
      let series = digits.slice(idx, idx+length);
      seriesList.push(series);
    }

    return seriesList;
  }

  validateSeries(length) {
    if (length > this.numberString.length) {
      throw new Error("Series length can't be greater than string length");
    }
  }
}

module.exports = Series;
