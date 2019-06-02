/* CHALLENGE
Given a two strings, write an algorithm to check if they are anagrams
of each other. Return true if the pass the test and false if they
don't. E.g
    isAnagram('silent', 'listen') // should return true
*/

function isAnagram(stringA, stringB) {
    function sanitizeUrl(text) {
        return text.toLowerCase().replace(/[^a-z\d]g/, "").split("").sort().join()
    }
    return sanitizeUrl(stringA) === sanitizeUrl(stringB);
}

module.exports = isAnagram;