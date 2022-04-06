/**
 * P: 
 * makeDiamond method (letter)
 *  output: diamond str
 * 
 * E:
 * 'ABCDE'... C IDX = 2
 * 
 * 2space A 2space
 * 1soace B 1space B 1 space
 * C 3 space C
 * - width = 1, 3, 5, 7, 9
 * 
 * _ _ A _ _
 * _ B _ B _
 * C _ _ _ C
 * _ B _ B _
 *  _ _ A _ _
 * 
 * _ _ _ _ A _ _ _ _
 * _ _ _ B _ B _ _ _
 * _ _ C _ _ _ C _ _
 * _ D _ _ _ _ _ D _
 * E _ _ _ _ _ _ _ E
 * _ D _ _ _ _ _ D _
 * _ _ C _ _ _ C _ _
 * _ _ _ B _ B _ _ _
 * _ _ _ _ A _ _ _ _
 * 
 * D:-------------------------
 * - 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
 * - 
 * 
 * A--------------------------
 * top half:
 * - topArr
 * - iterate from idx 0 to letterIdx, idx += 1
 *    - #outerspace = letterIdx - idx
 *    - #middlespace = 1
 *    -if idx is 0, set string to outerspace + letter + outerspaces
 *    - set string to outerspace + letter + middlespaces + letter + outerspace
 *       - push string into topArr
 *    - increment middlespace by 1
 * 
 * - botArr
 *    - get a copy of topArr, reverse it
 *    - remove the elem at index 0 of copyArr
 *    return this
 * 
 * -combineArr
 *    - combine topArr and botArr
 * - join combineArr by new line 
 *  - return this string
 *  
 *  iterate over combineArr, 
 *    add leftflank then middlespace, then right flank
 *  => top half arr
 * 
 * reverse top half arr, remove first index
 * 
 * append top half and bot half arr together with '\n' at the end
 *  => print out each string 
 *
*/

class Diamond {
  static alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  static makeDiamond(letter) {
    let letterIdx = Diamond.alphabet.indexOf(letter);
    let topHalf = Diamond.topHalf(letterIdx);
    let botHalf = Diamond.botHalf(topHalf);
    let whole = Diamond.combineArr(topHalf, botHalf).join('');

    return whole;
  }

  static topHalf(letterIdx) {
    let topArr = [];
    let middleSpaces = 1;

    for (let idx = 0; idx <= letterIdx; idx += 1) {
      let str = '';
      let outerSpaces = ' '.repeat(letterIdx - idx);
      
      if (idx === 0) {
        str = outerSpaces + Diamond.alphabet[idx] + outerSpaces + '\n';
        topArr.push(str);
      } else {
        str = outerSpaces +  Diamond.alphabet[idx] + 
              ' '.repeat(middleSpaces) + 
              Diamond.alphabet[idx] + outerSpaces + '\n';
        topArr.push(str); 
        middleSpaces += 2;     
      }
    }

    return topArr;
  }

  static botHalf(topArr) {
    let botArr = topArr.slice();
    botArr.reverse().splice(0,1);
    return botArr;
  }

  static combineArr(arr1, arr2) {
    return arr1.concat(arr2);
  }
}

module.exports = Diamond;

