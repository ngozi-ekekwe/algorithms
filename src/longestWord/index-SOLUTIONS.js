function longestWord(text) {
  // Code goes 
  let longestWord = "";
  let longestArray = text.split(" ");
  longestArray.forEach((word) => {
    if(word.length > longestWord.length) {
      longestWord = word;
    }
  })
  return longestWord;
}

function longestWord(text) {
  // Code goes 
  let maxWord = text.split(" ").reduce((maxWordLength, currentWord) => {
    if (currentWord.length > maxWordLength.length) {
      return currentWord
    }
    else {
      return maxWordLength;
    }
  }, "")
  return maxWord
}


function longestWord(text) {
  
}