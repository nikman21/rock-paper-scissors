const choices = ["rock","paper","scissors"]

function computerChoice()
{
    return choices[Math.floor(Math.random() * choices.length)];
}
function playerChoice()
{
    let input = prompt("Type Rock, Paper, Scissors?");
    while (input == null)
    {
        let input = prompt("Type Rock, Paper, Scissors?");
    }
    input = input.toLowerCase();
    let check = validateInput(input)
    while (check == false)
    {
        input = prompt(
            "Type Rock, Paper, or Scissors. Spelling must be exact but capitlization does not matter."
        );
        while (input == null)
        {
            let input = prompt("Type Rock, Paper, Scissors?");
        }
        input = input.toLowerCase();
        check = validateInput(input);
        
    }
    return input;

}

function validateInput()
{
    return choices.includes(choices)
    
}
function checkWinner(choiceP, choiceC)
{
    if (choiceP == choiceC)
    {
        return "Tie";
    }
    else if (
    (choiceP == "rock" && choiceC == "scissors") || 
    (choiceP == "paper" && choiceC == "rock") || 
    (choiceP == "scissors" && choiceC == "paper"))
    {
        return "Player Wins";
    }
    else 
    {
        return "Computer Wins"
    }
}
function playRound()
{
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection,computerSelection);
    console.log(winner);
}

function game()
{

    for(let i = 0; i < 5; i++)
    {
       console.log(playRound(playerSelection,computerSelection));
    }
}

