// Given an array and a chunk size, divide the array into many sub-arrays where each sub-array has the specified length. E.g

function chunkArray(arr, size) {
  let result = [];

  for (let value of arr) {
    let lastArray = result[result.length - 1];
    if(!lastArray || lastArray.length === size) {
      result.push([value])
    }
    else {
      lastArray.push(value)
    }
  }
  return result;
  
}

module.exports = chunkArray;