// Chaining in-built methods

function reverseString(text) {
  return text.split("").reverse().join("");
}

function reverseString(text) {
  return [...text].reverse().join("");
}

// Using a For-loop

function reverseString(text) {
  let result = "";
  for(let i = text.length - 1 ; i >= 0; i--) {
    result += text[i]
  }
  return result;
}

// Using a FOR..OF loop in ES6
function reverseString(text) {
  let result = "";
  for (let char of text) {
    result = char + result;
  }
  return result;
}

// using .reduce method

function reverseString(text) {
  return text.split("").reduce((acc, char) => char + acc)
}

function reverseString(text) {
  return [...text].reduce((acc, char) => char + acc );
}