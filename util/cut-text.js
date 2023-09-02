const convertDateToThai = require('./convert-date-to-thai')

function cutTextByArray(text) {
  const array = text.trim().split("\n");
  console.log(array);
  console.log(array.length);
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
  const newArr = array.map((text, index) => index === (array.length-1) ? text : (text+"\n"));

  const toString = newArr.toString().replaceAll(",", "");
  return toString;
}

function cutTextWithFilter(text) {
  let array = text.trim().split("\n");
  const filter = eachLine => eachLine.match(/Topic\:|Time\:|Join|https|Meeting ID\:|Passcode\:/) ? true : false;
  array = array.filter(filter);
  console.log(array);

  // remove last three lines
  array.splice(array.length - 3, 3);

  array[1] = convertDateToThai(array[1]);
  console.log(array);

  array[1] = array[1] + "\n";
  array[3] = array[3] + "\n";

  array = array.map((line, index) => index === (array.length-1) ? line : (line+"\n"));
  const toString = array.toString().replaceAll(",", "");
  console.log(toString);

  return toString;
}

module.exports = {
  cutTextByArray,
  cutTextWithFilter
};