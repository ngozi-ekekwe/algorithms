/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/



function maxRecurringChar(text) {
  let charMap = {}
  let charArray = [];
  let valuesArray = [];
  let maxCharValue = 0;

  for(let char of text) {
    if(charMap.hasOwnProperty(char)) {
      charMap[char]++
    }
    else {
      charMap[char] = 1;
    }
  }

  charArray = Object.keys(charMap);
  valuesArray = Object.values(charMap);
  maxCharValue = Math.max(...valuesArray);

  return charArray[valuesArray.indexOf(maxCharValue)]
}


module.exports = maxRecurringChar;