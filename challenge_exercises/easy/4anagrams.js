// P:
// - input: 
//   - word 
//   - array: strings of possible anagarms
// - output:
//   - return new array of sublist of anagrams
// - match method (array of possible anagrams)
//    - returns new array of sublist
// rules:
// - if 0 anagrams => return empty array []
// - identical word is not anagram
// - Anagrams are case-insensitive
// D:
// - array
// - compare string to string
// Ex] 
// 'ant' -> ['tan', 'stand', 'at']

// - loop thru Array
// - str.match(/[ant][ant][ant]/i) 

// A:
// match method:
// - create an empty return array 
// - filter the possible anagram array
//   - callback pass: 
//     - string matches word 
//     - AND string (lower cased) doesn't equal word (lower cased)
// - return filtered array

// getRegex method
// - split the word into Array, join back together with [] => regex
// - join '/[' + regex + ']/i' and return this
//-----------------------------------------------------


// class Anagram {
//   constructor(word) {
//     this.word = word;
//   }

//   match(possibleArr) {
//     return possibleArr.filter(possibleWord => {
//       let regex = this.getRegex(this.word);
//       return possibleWord.match(regex) && 
//             possibleWord.toLowerCase() !== this.word.toLowerCase() &&
//             possibleWord.length === this.word.length;
//     });
//   }

//   getRegex(word) {
//     let regex = `[${word}]`.repeat(word.length);
//     return new RegExp(regex, 'i');
//   }
// }

// module.exports = Anagram;

// ------------------------
// match method
// - split word into array and sort by alphabetical order

// - filter the possible anagram array
//    - callback pass: 
//     - split possibleWord to array and sort it alphabetically
//     - return true if arrays have equal values
// - return filtered array

// arrayEquals method (arr1, arr2)
// - return true if 
//   - arr1 and arr2 have same length AND
//   - arr1 and arr2 have same values
//     - for every value of arr1, arr2 has same value at same indexedD
// - else return false

//alphabetArray
// - split word into array and sort by alphabetical order
// // - return array

class Anagram {
  constructor(word) {
    this.word = word.toLowerCase();
  }

  match(possibleArr) {
    let wordArr = this.alphabetArray(this.word);

    return possibleArr.filter(possibleWord => {
      let possibleArr = this.alphabetArray(possibleWord);

      return this.arrayEquals(wordArr, possibleArr) && 
             possibleWord.toLowerCase() !== this.word;
    });
  }

  alphabetArray(word) {
    return word.toLowerCase().split('').sort();
  }

  arrayEquals(arr1, arr2) {
    return arr1.length === arr2.length &&
       arr1.every((letter, idx) => letter === arr2[idx]);
  }
}

module.exports = Anagram;

// better book method
class Anagram {
  constructor(word) {
    this.matchWord = word.toLowerCase();
  }

  match(wordList) {
    return wordList.filter(word => {
      return word.toLowerCase() !== this.matchWord &&
             this.isAnagram(word, this.matchWord);
    });
  }

  sortedChars(word) {
    return word.toLowerCase().split('').sort();
  }

  isAnagram(word1, word2) {
    word1 = this.sortedChars(word1).join();
    word2 = this.sortedChars(word2).join();
    return word1 === word2;
  }
}

module.exports = Anagram;