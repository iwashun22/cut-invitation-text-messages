const fs = require('fs');
const cutText = require('./util/cut-text');

const text = fs.readFileSync("./input-file.txt", "utf-8");
// console.log(text);

const shorten = cutText(text);

console.log("\n===============\n");
console.log(shorten);
console.log("\n===============\n");

// output file
fs.writeFileSync("./output-file.txt", shorten, "utf-8");