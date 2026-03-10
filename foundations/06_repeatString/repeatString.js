const repeatString = function(string, num) {
    let addString = ""

    if (num < 0 ) {
        return "ERROR"
    } else {
        for (let i = 0; i < num; i++) {
        addString += string
        }
        return addString
    }
}

// Do not edit below this line
module.exports = repeatString;


