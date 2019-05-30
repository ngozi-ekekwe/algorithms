/* CHALLENGE
Given a string of text, return true or false indicating whether or not the text is a palindrome.
e.g palindromeChecker('racecar') // will return true
*/




function palindromeChecker(text) {
  // Code goes here
  // let reversedWord = [...text.toLowerCase()].reverse().join("")
  // return reversedWord === text;

  let reversedString = "";
  for(let char of text.toLowerCase()) {
    reversedString = char + reversedString;
  }
  return reversedString === text
}



module.exports = palindromeChecker;