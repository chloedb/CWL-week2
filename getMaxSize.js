function getMaxSize() {
    
    console.log('  Group by:')
    let readlineSync = require('readline-sync'),
        options = ['Max group size', 'Number of groups'],
        choice = readlineSync.keyInSelect(options, 'Choose an option: ');
    
    readlineSync = require('readline-sync');
    if (choice === 1){
        let numGroups = readlineSync.question('  How many groups? ');
        return numGroups;
    } else {
        let maxGroupSize = Number(readlineSync.question('  Max group size? '));
        return maxGroupSize;
    }
}

if (require.main === module) {
    console.log(getMaxSize());
}   
module.exports = getMaxSize