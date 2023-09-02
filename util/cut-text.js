const convertDateToThai = require('./convert-date-to-thai')

function cutText(text) {
  const array = text.trim().split("\n");
  // console.log(array);
  array.shift();

  // remove unnecessary part
  const unnecessaryIndex = array.indexOf("---")
  const end = array.length - unnecessaryIndex;
  array.splice(unnecessaryIndex, end);

  // converting to Thai date
  let thaiDate = convertDateToThai(array[2]);
  array[2] = thaiDate;

  // remove empty element in array
  array.shift(); array.pop();
  const newArr = array.map(text => text + "\n");

  const toString = newArr.toString().replaceAll(",", "");
  return toString;
}

module.exports = cutText;