const removeFromArray = function(array, ...args) {
    //store the optional args into an array
    let newArr = [...args];

    //return the original array but does not include elements from newArr
    return array.filter(item => !newArr.includes(item));
}

// Do not edit below this line
module.exports = removeFromArray;
