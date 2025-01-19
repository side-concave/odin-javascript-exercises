const removeFromArray = function(array, toRemove) {
    for (let element in toRemove){    
        for (let index in array){
            if (array[index] == toRemove){
                array.splice(index, 1);
             }
         }
    return array
        }
};

// Do not edit below this line
module.exports = removeFromArray;
