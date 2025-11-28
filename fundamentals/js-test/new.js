/*Translate border-left-width to borderLeftWidth
Filter range
Filter range "in place"
Sort in decreasing order
Copy and sort array
Shuffle an array
Filter unique array members

*/

/*
function camelize(str)
{
    return str.split("-")
        .map((word, i) => i === 0 ? word : word[0].toUpperCase() + word.slice(1))
        .join("");
}
console.log(camelize("background-color"));
console.log(camelize("background-color") == 'backgroundColor');
console.log(camelize("list-style-image") == 'listStyleImage');
console.log(camelize("-webkit-transition") == 'WebkitTransition');

*/

/*
function filterRange(arr, a, b)
{
    return arr.filter(item => (a <= item && item <= b));
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log( filtered ); // 3,1 (matching values)

console.log( arr ); // 5,3,8,1 (not modified)

*/
/*
function filterRangeInPlace(arr, a ,b)
{
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i] < a || arr[i] > b)
        {
            arr.splice(i, 1);
            i--;
        }
    }
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

console.log( arr ); // [3, 1]
*/

    /*
let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

// ... your code to sort it in decreasing order

console.log( arr ); // 8, 5, 2, 1, -10

*/

/*
function copySorted(arr)
{
    return arr.slice().sort();
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

console.log( sorted ); // CSS, HTML, JavaScript
console.log( arr ); // HTML, JavaScript, CSS (no changes)

*/
/*
function shuffle(array)
{
    return array.sort(() => Math.random() - 0.5);
}

let arr = [1, 2, 3];
shuffle(arr);
console.log(arr);

*/

function unique(arr)
{
    let ansVec = [];
    for(const item of arr)
    {
        if(!ansVec.includes(item))
        {
            ansVec.push(item);
        }
    }
    return ansVec;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(strings) ); // Hare, Krishna, :-O
