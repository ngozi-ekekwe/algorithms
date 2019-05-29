/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/
const vowels = ['a', 'e', 'i', 'o', 'u'];

function vowelsCounter(text) {
  // Code goes here
  let matchingInstances = text.match(/[aeiou]/gi);
  if (matchingInstances) {
    return matchingInstances.length;
  }
  return 0;
}



module.exports = vowelsCounter;
