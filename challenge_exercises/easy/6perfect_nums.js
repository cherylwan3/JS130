/**
 * P:
 * rules:
 * perfect nums have aliquot sums === num
 * deficient nums have aliquot sums < num
 * abundant nums have aliquuot sums > num
 * 
 * input: number
 * output: string 
 * 
 * 
 * D:
 * perfect num: 
 * 6 =>  1, 2, and 3, and 1 + 2 + 3 = 6.
 * deficient: 
 * 15 => 1 + 3 + 5 = 9 which is less than 15.
 * abundant:
 * 24 => 1 + 2 + 3 + 4 + 6 + 8 + 12 = 36;
 * 
 * A:
 * - sumDivisors Method (number)
 * - set divisorArray to [];
*    - loop from 1 to less than number
*      - divide number by 1, if integer, 
*          - add divisor to array
  - sum the divisors 

static classify method
- throw num if num < 0
 * - get the sum of divisors
 * - compare the sum of divisors to number
 *    - return the string showing category 
 */

class PerfectNumber {
  static classify(num) {
    if (num <= 0) throw new Error;

    let sum = PerfectNumber.sumDivisors(num);
    
    if (sum > num) {
      return 'abundant';
    } else if (sum === num) {
      return 'perfect';
    } else {
      return 'deficient';
    }
  }

  static sumDivisors(num){ 
    let divisorArr = [];

    for (let divisor = 1; divisor < num; divisor += 1) {
      if (num % divisor === 0) divisorArr.push(divisor);
    }

    return divisorArr.reduce((total, num) => total + num);
  }
}

module.exports = PerfectNumber;
