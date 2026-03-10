const removeFromArray = function(arr, ...itemToRemove) {
    for (let item of itemToRemove) {
         while (arr.includes(item)) {
            arr.splice(arr.indexOf(item), 1)
         }
    }

     return arr
};

// Do not edit below this line
module.exports = removeFromArray;


