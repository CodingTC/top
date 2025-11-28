let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

for(let i = 1; i <= answer; i++)
{
    if(i % 5 === 0 && i % 3 === 0)
    {
        console.log("FizzBuzz");
        continue;
    }
    else if(i % 5 === 0)
    {
        console.log("Buzz");
        continue;
    }
    else if(i % 3 === 0)
    {
        console.log("Fizz");
        continue;
    }
    console.log(i);
}
