const removeFromArray = function(inputArray, ...extras) {
    let arr = inputArray
    // const arr = inputArray.filter(x=> x !== extras[0])
    for (let i = 0; i < extras.length; i++){
        arr = arr.filter(x => x !== extras[i])
    }
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
