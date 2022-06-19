const repeatString = function(string,num) {

    //String variable to store result from for loop
    let stringResult = '';

    //loop until we reach the number from parameter
    for(let i = 0; i < num; i++){
        //for every increment, save the string to variable
        stringResult += string;
    }

    //return result after loop ends
    return stringResult;
};

//call function to test
repeatString('hey',3);

// Do not edit below this line
module.exports = repeatString;
