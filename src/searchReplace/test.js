const searchReplace = require('./index-START');

test('SearchReplace is a function', () => {
  expect(typeof searchReplace).toEqual('function');
})

test('replaces sleeping with sitting', () => {
  expect(searchReplace("He is Sleeping on the couch", "Sleeping", "sitting")).toEqual("He is Sitting on the couch")
})