// P:
// input: word  
// output: scrabble score  

/**
 * E:
 * - non-letter = 0 pts
 * - case insensitive
 * 
 * D:
 * - obj
 *  points: array
 * 
 * A
 * - turn word into arr of char, 
 *  
 * - check arr contains alphabetical letters
 *    - for every char, match /a-zA-Z
 *    - if not alpabet, return 0
 * - transform the arr, get corresponding points
 *    - 
 * - add all points in array together => return points
 */


class Scrabble {
  static POINTS = {
    1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
    2: ['D', 'G'],
    3: ['B', 'C', 'M', 'P'],
    4: ['F', 'H', 'V', 'W', 'Y'],
    5: ['K'],
    8: ['J', 'X'],
    10: ['Q', 'Z'],	
  };

  constructor(word) {
    this.word = word;
  }

  score() {
    if (this.zeroPoints(this.word)) return 0;
    
    let wordArr = this.word.toUpperCase().split('');
    return wordArr.reduce((total,letter) => {
      for (let points in Scrabble.POINTS) {
        if (Scrabble.POINTS[points].includes(letter)) {
          return total + Number(points);
        }
      }
    }, 0);
  }

  isLetter(letter) {
    return letter.match(/[a-zA-Z]/) ? true : false;
  }

  zeroPoints(word) {
    if (!this.word) return true;
    
    let wordArr = this.word.split('');
    if (wordArr.some(letter => !this.isLetter(letter))) return true;
  }

  static score(word) {
    return new Scrabble(word).score();
  }
}

module.exports = Scrabble;

// better book method
// class Scrabble {
//   static POINTS = {
//     'AEIOULNRST': 1,
//     'DG': 2,
//     'BCMP': 3,
//     'FHVWY': 4,
//     'K': 5,
//     'JX': 8,
//     'QZ': 10,
//   };

//   constructor(word) {
//     this.word = word ? word : '';
//   }

//   score() {
//     let letters = this.word.toUpperCase().replace(/[^A-Z]/g, '').split('');
//     let total = 0;

//     letters.forEach(letter => {
//       Object.keys(Scrabble.POINTS).forEach(allLetters => {
//         if (allLetters.includes(letter)) {
//           total += Scrabble.POINTS[allLetters];
//         }
//       });
//     });

//     return total;
//   }

//   static score(word) {
//     return new Scrabble(word).score();
//   }
// }

// module.exports = Scrabble;