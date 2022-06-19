const repeatString = function(string,num) {

    //add if condition to check if num parameter given is a negative number
    if(num < 0){
        //if it is, return error string msg and break out of function
        return 'ERROR';
    }

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
