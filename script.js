let playerSelection
let computerSelection = computerPlay();
let humanScore = 0
let computerScore = 0



//  Generates the selection of the computer 

function computerPlay (){
    let computerSelection = ["rock","paper","scissors"];
    let randomSelection = computerSelection[Math.floor(Math.random()*computerSelection.length)];
    return randomSelection;
}


// Compares the selection of the player to the selection of the computer. 

function playRound (playerSelection, computerSelection) {

    if (playerSelection === computerSelection)  {        
        console.log("It is a draw!");    
         }

    else if (playerSelection =='rock' && computerSelection =='paper') {
    computerScore++
    console.log('You lose! paper beats rock')
    

    }

    else if (playerSelection =='rock'&& computerSelection =='scissors') {
    humanScore++
    console.log('You win! Rock beats scissors!')
   

    }

    else if (playerSelection =='paper' && computerSelection =='rock') {
    humanScore++
    console.log('You win! paper beats rock!')
    

    }

    else if (playerSelection =='paper' && computerSelection =='scissors') {
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

// Creating the buttons and events

const container = document.querySelector('.container')

const rock = document.createElement('button');
const paper = document.createElement('button');
const scissors = document.createElement('button')

rock.classList.add('button')
paper.classList.add('button')
scissors.classList.add('button')


rock.textContent = 'ROCK'
paper.textContent ='PAPER'
scissors.textContent = 'SCISSORS'

//Creating the events.


rock.addEventListener('click', () => {
    playerSelection = 'rock';
    console.log(playerSelection)
    playRound(playerSelection, computerSelection);

});
paper.addEventListener('click', () => {
    playerSelection = 'paper'
    console.log(playerSelection)
    playRound(playerSelection, computerSelection);
   
});
scissors.addEventListener('click', () => {
    playerSelection = 'scissors';
    console.log(playerSelection)
    playRound(playerSelection, computerSelection);
    
});

// Game creation 



// Score holder

const totalScore = document.createElement('div');
const scoreHuman = document.createElement('h4');
const scoreComputer = document.createElement('h4')
totalScore.appendChild(scoreHuman);
totalScore.appendChild(scoreComputer);

totalScore.classList.add('totalScore');
scoreHuman.textContent = `Human score = ${humanScore}`
scoreComputer.textContent = `Computer score = ${computerScore}`




// Output - browser


container.appendChild(rock)
container.appendChild(paper)
container.appendChild(scissors)
container.appendChild(totalScore)
