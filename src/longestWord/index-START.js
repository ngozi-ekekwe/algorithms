/* CHALLENGE
  Given a sentence, return the longest word in the string
*/



function longestWord(text) {
  // Code goes 
  let result = text.split(" ").reduce((maxWordLength, currentWord) => {
    if(currentWord.length > maxWordLength.length) {
      return currentWord;
    }
    else {
      return maxWordLength;
    }
  }, "")

  return result;
}


module.exports = longestWord