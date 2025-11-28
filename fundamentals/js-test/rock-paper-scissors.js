
function decideWinner(userHand, computerHand)
{
    if(userHand === computerHand)
    {
        return "It's a draw!";
    }
    else if ((userHand === 1 && computerHand === 3) || 
        (userHand === 2 && computerHand === 1) ||
        (userHand === 3 && computerHand === 2))
    {
        return "You win!";
    }
    return "You lose!";
}


function playRound()
{
    const userHand = parseInt(prompt("Enter 1, 2, or 3 to play rock, paper, or scissors respectively"));
    const computerHand = Math.floor((Math.random() * 3) + 1);

    console.log(`You chose ${userHand}.`);
    console.log(`The computer chose ${computerHand}.`);

    console.log(decideWinner(userHand, computerHand));
}


playRound();
