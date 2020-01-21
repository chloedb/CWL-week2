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

// console.log(sizeGroups(14,4));
// console.log(sizeGroups(14,3));
// console.log(sizeGroups(5,3));
// console.log(sizeGroups(13,2));

function printGroups(groups) {
    for (let group of groups) {
        console.log(group);
    }
}

let groupSizes = sizeGroups(7,3);
let groups = groupify([1,2,3,4,5,6,7], groupSizes);

for (let i = 0; i < groups.length; i++) {
    let label = `Group ${i + 1}`;
    console.log(`${label}. ${groups[i]}`);
}
