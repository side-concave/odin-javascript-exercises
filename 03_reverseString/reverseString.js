const reverseString = function(string) {
    let reverse = ""
    let letter
    let index = string.length
    for (index >= 0; index--;){
        reverse += string[index]
    }
    return reverse 
};

// Do not edit below this line
module.exports = reverseString;
