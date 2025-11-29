const reverseString = function(string) {
    let resString = "";
    for(let i = string.length - 1; i >= 0; i--)
    {
        resString += string[i]; 
    }

    return resString;
};


// Do not edit below this line
module.exports = reverseString;
