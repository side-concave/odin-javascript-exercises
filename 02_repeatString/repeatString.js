const repeatString = function(string, number){
    let finalString = new String;
    for (let i = 0; i <number; i++){
        finalString += string
    }
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
