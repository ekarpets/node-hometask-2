const repeatedLetter = require('the-most-repeated-letter');
const fs = require('fs');

const getData = () => {
  const filePath = process.argv.slice(2)[0];

  return fs.readFileSync(filePath, {encoding: 'utf-8'});
}

// node index.js './text/file.txt'
const result = repeatedLetter(getData());
console.log(result);
