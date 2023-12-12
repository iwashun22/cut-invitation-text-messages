const convertDateToThai = require('./convert-date-to-thai')

const template = [
  /Topic:+\s/,
  /Time:+\s/,
  undefined,
  /Join Zoom Meeting/,
  /https:\/\//,
  undefined,
  /Meeting ID:+\s/,
  /Passcode:+\s/
]
function cutTextByArray(text) {
  const array = text.trim().split("\n");
  console.log(array);
  // console.log(array.length);

  const filteredArray = [];
  template.forEach((regex, i) => {
    filteredArray.push(
      regex === undefined ?  
        "" :
        array[ array.findIndex(v => v.match(regex)) ]
    )
  })
  // converting date
  filteredArray[1] = convertDateToThai(filteredArray[1]);
  return filteredArray.join("\n").replaceAll(",", "");
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