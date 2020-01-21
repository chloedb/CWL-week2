const readlineSync = require('readline-sync')

function randomizer() {
let peoplePerGroup = Number(readlineSync.question('How many people do you want in each group? '));
}

if (require.main === module) {
    console.log(randomizer())
}   
module.exports = randomizer
