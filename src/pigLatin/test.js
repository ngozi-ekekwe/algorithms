const pigLatin = require('./index-START');

test('pigLatin is a function', () => {
  expect(typeof pigLatin).toEqual('function')
})

test('For words that begin with consonant sounds', () => {
  expect(pigLatin('pig')).toEqual('igpay');
})

test('For words that begin with consonant clusters', () => {
  expect(pigLatin('glove')).toEqual('oveglay')
})

test('For words that begin with vowel sounds', () => {
  expect(pigLatin('explain')).toEqual('explainway')
})