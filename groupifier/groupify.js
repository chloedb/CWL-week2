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

function readNames(){
    let process = require('process');
    let fs = require('fs');

    let fileName = process.argv[2];
    if (!fs.existsSync(fileName)){
        console.log(`Error: your file doesn't exist, I received ${fileName}`);
        process.exit();
    }

    let contents = fs.readFileSync(fileName, 'utf-8');

    const nameList = contents.split('\n');

    return nameList;
}



let shuffle = require('./shuffle');
let randomizer = require('./randomizer');


let totalNum = readNames().length;
let maxSize = randomizer();
let groupSizes = sizeGroups(totalNum, maxSize);
let namesRandom = shuffle(readNames());
let groups = groupify(namesRandom, groupSizes);

for (let i = 0; i < groups.length; i++) {
    let label = `Group ${i + 1}`;
    console.log(`${label}: ${groups[i]}`);
}