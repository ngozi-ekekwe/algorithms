function isAnagram(stringA, stringB) {
  function sanitizeUrl(txt) {
    return txt.toLowerCase().replace(/[^a-z\d]gi/, "").split("").sort().join();
  }
  return sanitizeUrl(stringA) === sanitizeUrl(stringB)
}