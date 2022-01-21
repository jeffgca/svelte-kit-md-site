const fs = require('fs');

let thisFile = fs.readFileSync(`./${__filename}`);

console.log(`This file's content: ${thisFile}`);
