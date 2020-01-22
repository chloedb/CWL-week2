function randomizer() {
    const readlineSync = require('readline-sync');
    let maxGroupSize = readlineSync.question('Max group size?');
    return maxGroupSize;
}

if (require.main === module) {
    console.log(randomizer());
}   
module.exports = randomizer