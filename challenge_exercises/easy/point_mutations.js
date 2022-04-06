/**
 * P:
 * rules: 
 * - point mutation: replacing one base with another at single nucleotide
 * - Hamming distance: number of different point mutations 
 * - the Hamming distance only defined for equal length DNA strands 
 *  - if two sequences of unequal length, use shorter length to compute
 * 
 * E:
 * - constructor DNA
 * - method called 'hammingDistance', accepts a DNA str
 * - if empty str, hammingDistance = 0
 * - ignore longer string's extra nucleotides
 * - original string not actually shorterned 
 * 
 * D:
 * - constructor 
 *  - parameter = str
 *  - array to store shorter str 
 * A:
 * constructor DNA
 *  - store originalDNA 
 * 
 * hammingDistance method, argument = compareDNA
 *  - if originalDNA length doesn't equal compareDNA length, get length of 
 *    shorter DNA 
 *  - else length === either DNA's length
 *  - set count to 0
 *  - loop through idx 0 to shorter DNA length - 1
 *    - compare the letter at current index in both originalDNA and compareDNA
 *    - if they are different, increase count
 * - return count 
 * 
 * shorterString method, argument = str1, str2
 *  - 
 *  
*/

class DNA {
  constructor(originalDNA) {
    this.DNA1 = originalDNA;
  }

  hammingDistance(compareDNA) {
    let DNA2 = compareDNA;

    let length = DNA2.length;
    if (this.DNA1.length !== DNA2.length) {
      length = this.shorterLength(this.DNA1, DNA2);
    }

    let count = 0;
    for (let idx = 0; idx < length; idx += 1) {
      if (this.DNA1[idx] !== DNA2[idx]) count += 1;
    }

    return count;
  }

  shorterLength(DNA1, DNA2) {
    let length = DNA1.length < DNA2.length ? DNA1.length : DNA2.length; 
    return length;
  }
}

module.exports = DNA;