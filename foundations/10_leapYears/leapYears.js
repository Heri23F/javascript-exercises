const leapYears = function(years) {
    if (years % 4 == 0  && (!(years % 100 == 0) || years % 400 == 0)) {
        return "Lapyear"
    } else {
        return "Not Lapyear"
    }
};

// Do not edit below this line
module.exports = leapYears;
