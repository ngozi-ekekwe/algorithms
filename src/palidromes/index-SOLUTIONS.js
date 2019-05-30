function palindromeChecker(text) {
  let reversedString = text.toLowerCase().split("").join("");
  return reversedString === text;
}


function palindromeChecker(text) {
  let reversedString = "";
  for(let i = text.length -1; i >= 0; i--) {
    reversedString += text[i]
  }
  return reversedString === text
}


function palindromeChecker(text) {
  let reversedString = "";
  for(let char of text.toLowerCase) {
    reversedString = char + reversedString;
  }
  return reversedString === text
}
