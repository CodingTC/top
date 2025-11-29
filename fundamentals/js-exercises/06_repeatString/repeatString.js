const repeatString = function(string, num) {
    if(num < 0)
    {
        return "ERROR";
    }
    let resString = "";
    for(let i = 0; i < num; i++)
    {
        resString += string;
    }

    return resString;
};



// Do not edit below this line
module.exports = repeatString;
