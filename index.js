function sumItems(array) {
  var result = 0;
  console.log('shouldnt result have been reset to 0? ' + result)
    array.forEach((item) =>{
      if (typeof item !== 'number'){
        result += sumItems(item)
      } else {
        result += item
      }
      console.log('this is result within forEach')
    })
    return result;
}

module.exports = sumItems;

