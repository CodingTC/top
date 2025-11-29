const leapYears = function(year) {
    const isDivisibleByFour = year % 4 === 0;
    const isCentury = year % 100 === 0;
    const isDivisibleByFourHundred = year % 400 === 0;

    //a leap year is a year that is divisible by four, but isn't a 
    //century (divisible by 100) unless it's divisible by 400
    if((isDivisibleByFour && !(isCentury))
        || (isDivisibleByFour && isDivisibleByFourHundred))
    {
        return true;
    }
    return false;
};


// Do not edit below this line
module.exports = leapYears;
