const sumAll = function(num1, num2) {

    if(num1 < 0 || num2 < 0 || !Number.isInteger(num1)
    || !Number.isInteger(num2) || !Number.isFinite(num1) 
    || !Number.isFinite(num2))
    {
        return "ERROR";
    }

    const bigNum = num1 > num2 ? num1 : num2;
    const smallNum = num1 > num2 ? num2 : num1;
    
    let total = 0;

    for(let i = smallNum; i <= bigNum; i++)
    {
        total += i;
    }

    return total;
};

console.log(sumAll(2, 4));

// Do not edit below this line
module.exports = sumAll;
