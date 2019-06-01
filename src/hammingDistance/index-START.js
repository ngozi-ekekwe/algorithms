/* CHALLENGE
Given two strings of equal length, calculate and return the the hamming distance.
E.g hammingDistance('rover', 'river') // should return 1
*/




function hammingDistance(stringA, stringB) {
  let diff = 0;
  if (stringA.length === stringB.length) {
    for (let j = 0; j <= stringA.length; j++) {
      if (stringA[j] !== stringB[j]) {
        diff ++
      }
    }
  }
  return diff
}



module.exports = hammingDistance