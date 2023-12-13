const fs = require('fs');
const path = require('path');
const { cutTextByArray, cutTextWithFilter } = require('../util/cut-text');

const text = fs.readFileSync(path.resolve(__dirname, "input-file.txt"), "utf-8");
// console.log(text);

const shorten = cutTextByArray(text);

console.log("\n===============\n");
console.log(shorten);
console.log("\n===============\n");

// output file
fs.writeFileSync(path.resolve(__dirname, "output-file.txt"), shorten, "utf-8");

cutTextByArray(text);