const sumAll = function(a,b) {

    //check parameters for negative numbers
    if(a < 0 || b < 0){
        return 'ERROR';
        //if parameters are astring
    } else if (typeof a == 'string' || typeof b == 'string'){
        return 'ERROR';
    }

    //if 1st parameter is greater than 2nd parameter
    if (a < b){
    return (b - a + 1) * (a + b) / 2;

    // else do another formula
    } else if (a > b) {
        return (a - b + 1) * (b + a) / 2;
    } else {
        //else return error
        return 'ERROR';
    }

};

// Do not edit below this line
module.exports = sumAll;
