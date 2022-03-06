let computerSelection = computerPlay();
let humanScore = 0
let computerScore = 0



function computerPlay (){
    let computerSelection = ["rock","paper","scissors"];
    let randomSelection = computerSelection[Math.floor(Math.random()*computerSelection.length)];
    console.log(randomSelection);
    return randomSelection;
}

function playRound (playerSelection, computerSelection) {

    if (playerSelection === computerSelection)  {        
        console.log("It is a draw!");    
         }

    else if (playerSelection == 'rock' && computerSelection =='paper') {
    computerScore++
    console.log('You lose! paper beats rock')
    

    }

    else if (playerSelection == 'rock' && computerSelection =='scissors') {
    humanScore++
    console.log('You win! Rock beats scissors!')
   

    }

    else if (playerSelection == 'paper' && computerSelection =='rock') {
    humanScore++
    console.log('You win! paper beats rock!')
    

    }

    else if (playerSelection == 'paper' && computerSelection =='scissors') {
    computerScore++
    console.log('You got hoined! scissors beat paper!')
    
        
    }

    else if (playerSelection == 'scissors' && computerSelection =='rock') {
    computerScore++
    console.log('You lose! rock hoins scissors!')
    
            
    }

    else if (playerSelection == 'scissors' && computerSelection =='paper') {
    humanScore++
    console.log('You win! Scissors beat paper!')
    
                
    }

    else {alert("Please, insert a valid character")}


}

function game (){

    for (let i = 0; i < 5; i++) {
        let playerSelection = window.prompt('Insert your choice!');
        playerSelection = playerSelection.toLowerCase();
        computerSelection = computerPlay();
        console.log(playerSelection);
        playRound(playerSelection,computerSelection);
        console.log(`Computer score = ${computerScore} Your score = ${humanScore}`)
        }
    
    if (computerScore > humanScore){
        alert('You lost the game!')
    }

        else if (computerScore==humanScore){
            console.log('Its a draw!')
        }

        else {console.log('You won the game!!')}
    

}




game()