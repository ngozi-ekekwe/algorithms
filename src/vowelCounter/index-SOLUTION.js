
const vowels = ['a', 'e', 'i', 'o', 'u'];

// using the interative method

function vowelsCounter(text) {
  let counter = 0;
  for( let letter of text ) {
    if (vowels.includes(letter.toLowerCase())) {
      counter++
    }
  }
  return counter;
}

// using regular expressions
function vowelsCounter(text) {
  let matchingInstances = text.match(/[aeiou]/gi);
  if (matchingInstances) {
    return matchingInstances.length;
  }
  return 0;
}

