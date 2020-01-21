let fs = require('fs');
let namesCSV = fs.readFileSync('namelist.txt', 'utf-8');
 
// Create list by splitting namesCSV
const nameList = namesCSV.split(',');
console.log(nameList);

