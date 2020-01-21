const readlineSync = require('readline-sync')
console.log("hey")

function randomizer() {
let numberOfGroups = readlineSync.question('How many groups do you want? ');
let peoplePerGroup = readlineSync.question('How many do you want in each group? ');
}

if (require.main === module) {
    console.log(randomizer())
}   
module.exports = randomizer