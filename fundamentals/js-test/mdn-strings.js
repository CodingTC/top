let userAns = prompt('What\'s the "official" name of JavaScript?');

if(userAns === "ECMAScript")
{
    alert("Right!");
}
else
{
    alert("You don't know? \"ECMAScript\"!");
}

let result = (a+b < 4) ? "Below" : "Over";

let message = (login == "Employee") ? "Hello" :
(login == "Director") ? "Greetings" :
    (login == "") ? "No Login" : 
    "";
