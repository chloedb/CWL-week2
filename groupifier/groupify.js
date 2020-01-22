function groupify(randomizedArray, groupSizes){
    const allGroups = [];
    
    for (let i = 0; i < groupSizes.length; i++){
        const group = [];
        for (let j = 0; j < groupSizes[i]; j++){
            group.push(randomizedArray.shift());
        }
        allGroups.push(group);
    }
    return allGroups;
}

function sizeGroups(totalNum, maxSize){
    let smallerSize = maxSize - 1;
    const groupSizes = [];  
    if (totalNum % maxSize === 0){
        for (let i = 0; i < totalNum/maxSize; i++){
            groupSizes.push(maxSize);
        }
        return groupSizes;
    }
    if (maxSize > Math.ceil(totalNum/2)){
        throw new Error("This group size doesn't give reasonable groups!"); 
    }
    

    while (totalNum >= (maxSize + smallerSize)){
        groupSizes.push(maxSize);
        totalNum -= maxSize;
    }
    while (totalNum > 0){
        groupSizes.push(smallerSize);
        totalNum -= smallerSize;
    }
    return groupSizes;
}


let shuffle = require('./shuffle');
let randomizer = require('./randomizer');
let readNames = require('./readNames');


let totalNum = readNames().length;
let namesRandom = shuffle(readNames());
let maxSize = randomizer();
let groupSizes = sizeGroups(totalNum, maxSize);
let groups = groupify(namesRandom, groupSizes);

console.log("\nGenerating groups...\n");
for (let i = 0; i < groups.length; i++) {
    let label = `Group ${i + 1}`;
    console.log(`${label}: ${groups[i]}`);
    console.log();
}