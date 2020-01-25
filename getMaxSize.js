function getMaxSize() {
    let readlineSync = require('readline-sync');
    console.log('  Group by:');
    console.log('  (1) Number of groups');
    console.log('  (2) Max group size');
    let option = readlineSync.questionInt('  Choose an option (1 or 2): ');
    if (![1,2].includes(option)){
        
    }
    let maxGroupSize = Number(readlineSync.question('  Max group size? '));
    return maxGroupSize;
}

if (require.main === module) {
    console.log(getMaxSize());
}   
module.exports = getMaxSize