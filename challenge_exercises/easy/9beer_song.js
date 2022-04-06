/**
 * P:  generate the lyrics of the 99 Bottles of Beer song
 * E:
 * - verse 1 
 * - verse 0 
 * D:
 if num === 1, 
 *  - str = "1 bottle of beer on the wall, 1 bottle of beer.\n" +
      "Take it down and pass it around, no more bottles " +
      "of beer on the wall.\n"
if num === 0,
  - "No more bottles of beer on the wall, no more " +
    "bottles of beer.\nGo to the store and buy some " +
    "more, 99 bottles of beer on the wall.\n"

 *str = "${num} bottles of beer on the wall, ${num} bottles of beer.\n" +
                   "Take one down and pass it around, ${num - 1} bottles of beer " +
                   "on the wall.\n"

 * 
 * A----
 * static:
 *  set verse1: "1 bottle of beer on the wall, 1 bottle of beer.\n" +
        "Take it down and pass it around, no more bottles " +
        "of beer on the wall.\n"
    set verse0: "No more bottles of beer on the wall, no more " +
      "bottles of beer.\nGo to the store and buy some " +
      "more, 99 bottles of beer on the wall.\n"
    set regVerse = `${num} bottles of beer on the wall, ${num} bottles of beer.\n" +
              "Take one down and pass it around, ${num - 1} bottles of beer " +
              "on the wall.\n`
 * }
 * str = "${num} bottles of beer on the wall, ${num} bottles of beer.\n" +
                   "Take one down and pass it around, ${num - 1} bottles of beer " +
                   "on the wall.\n"
 *  
 * verse (num)
  * if num === 1 or 0, return the corresponding verse
  else
  return regVerse
 * 
 * 
 * verses (upper, lower) 
 *  set result to ''
 *  set upperlimit, while upperlimit is not equal to lower and greater than 3
 *    -append the new line + regVerse to result
 * if lower is 2, + verse2  with new line in front 
 *  if lower is 1, append  verse2 verse1 to result with new line in between 
  *  if lower is 0, append + verse2 + verse1 + verse 0 with new line in between 
  *   return result
*/

class BeerSong {
  static verse2 = "2 bottles of beer on the wall, 2 bottles of beer.\n" +
  "Take one down and pass it around, 1 bottle of beer " +
  "on the wall.\n";

  static verse1 = "1 bottle of beer on the wall, 1 bottle of beer.\n" +
  "Take it down and pass it around, no more bottles " +
  "of beer on the wall.\n"

  static verse0 = "No more bottles of beer on the wall, no more " +
  "bottles of beer.\nGo to the store and buy some " +
  "more, 99 bottles of beer on the wall.\n";

  static verse(num) { 
    switch(num) {
      case 0:
        return BeerSong.verse0;
      case 1:
        return BeerSong.verse1;
      case 2:
        return BeerSong.verse2;
      default:
        return `${num} bottles of beer on the wall, ${num} bottles of beer.\n` +
        `Take one down and pass it around, ${num - 1} bottles of beer ` +
        `on the wall.\n`;
    }
  }
  
  static verses(upper, lower) {
    let lyrics = [];
    for (let num = upper; num >= lower; num -= 1) {
      lyrics.push(`${BeerSong.verse(num)}`);
    }

    return lyrics.join('\n');
  }

  static lyrics() {
    return BeerSong.verses(99, 0);
  }
}

module.exports = BeerSong;

