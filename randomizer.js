function randomizer() {
    const readlineSync = require('readline-sync');
    let maxGroupSize = Number(readlineSync.question('Max group size? '));
    return maxGroupSize;
}

if (require.main === module) {
    console.log(randomizer());
}   
module.exports = randomizer