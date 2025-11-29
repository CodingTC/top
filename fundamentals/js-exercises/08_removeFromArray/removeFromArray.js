const removeFromArray = function(arr, ...nums) {
    return arr.filter(num => !nums.includes(num));
};

console.log(removeFromArray([1, 2, 3, 4], 3));
console.log(removeFromArray([1, 2, 3, 4], 3, 2));

// Do not edit below this line
module.exports = removeFromArray;
