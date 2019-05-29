function capSentence(text) {
  let capsArray = [];
  let wordArray = text.toLowerCase().split(" ");

  wordArray.forEach((word) => {
    capsArray.push(word[0] + word.splice(1))
  })
  return capsArray.join(" ");
}

function capSentence(text) {
  let wordsArray = text.toLowerCase().split(" ");

  let capsArray = wordsArray.map((word) => {
    return word[0].toUpperCase() + word.slice(1);
  })

  return capsArray.join(" ")
}

function capSentence(text) {
  let wordsArray = text.toLowerCase.split(" ");
  let capsArray = wordsArray.map((word) => {
    return word.replace(word[0], word[0].toUpperCase())
  })

}