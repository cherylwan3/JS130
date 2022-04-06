/**
 * P--
 * - input: natural number &  set of one or more other numbers,
 *   - default set = 3, 5
 * - output: 
 *  - sum of 
 *  - all the multiples of the numbers in the set
 *      - that are less than the given number.
 * E:
 * 20 => 3, 5, 6, 9, 10, 12, 15, and 18 => sum = 78
 *
 * A:
 *  
 * constructor SumOfMultiples(...multiples)
 * - store all multiples into an array 
 * 
 * static sumMultiples(num, multSet)
 *  declare multArr to []
 * - iterate through multSet, for each mult
 *    -set times to 1 
 *    -set product to 0
 *    - while product is less than num
 *        - set product to (multiply mult by times)
 *        - push product into multArr
 *        - increment times by 1 
 * - add all numbers in multArr together and return this number
 * 
 * static To(num)
 *  - set multSet to [3, 5]
 * - call sumMultiple(multSet)
 * - return value
 * 
 * to(num) 
 * - gather all multipleSet into one array => multSet
 * - call sumMultiples with multSet
*/

class SumOfMultiples {
  constructor(...multiples) {
    this.multSet = (multiples.length > 0) ? multiples : [3, 5];
  }

  static to(num) {
    let obj = new SumOfMultiples();
    return obj.to(num);
  }

  to (num) {
    let multArr = [0];
  
    // multiply multiples until num
    this.multSet.forEach(mult => {
      let product = mult;
      for (let times = 1; product < num; times += 1) {
        if (!multArr.includes(product)) multArr.push(product);
        product = mult * times; 
      }
    });

    return multArr.reduce((sum, mult) => sum + mult);
  }
}

module.exports = SumOfMultiples;