const fibonacci = function(num) {
    const numAsNum = Number(num);

    if((numAsNum !== 0 && !numAsNum) || numAsNum < 0)
    {
        return "OOPS"
    }
    if(numAsNum === 0)
    {
        return 0;
    }
    if(numAsNum <= 2)
    {
        return 1;
    }

    let nMinus1 = 1;
    let nMinus2 = 1;
    
    let total = 0;
    for(let i = 3; i <= num; i++)
    {
        total = nMinus1 + nMinus2;
        nMinus1 = total;
        nMinus2 = total - nMinus2;
    }

    return total;
};

// Do not edit below this line
module.exports = fibonacci;
