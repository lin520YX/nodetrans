let fs = require('fs');
let ws=fs.createWriteStream('./1.txt');
ws.write(1)
console.log(ws)