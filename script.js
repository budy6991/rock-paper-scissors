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
    return computerScore

    }

    else if (playerSelection =='rock'&& computerSelection =='scissors') {
    humanScore++
    console.log('You win! Rock beats scissors!')
    return humanScore

    }

    else if (playerSelection =='paper' && computerSelection =='rock') {
    humanScore++
    console.log('You win! paper beats rock!')
    return humanScore

    }

    else if (playerSelection =='paper' && computerSelection =='scissors') {
    computerScore++
    console.log('You got hoined! scissors beat paper!')
    return computerScore
        
    }

    else if (playerSelection == 'scissors' && computerSelection =='rock') {
    computerScore++
    console.log('You lose! rock hoins scissors!')
    return computerScore
            
    }

    else if (playerSelection == 'scissors' && computerSelection =='paper') {
    humanScore++
    console.log('You win! Scissors beat paper!')
    return humanScore
                
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

// Creating the score holder


const containerTwo = document.querySelector('.containerTwo')


const totalScore = document.createElement('div');
const scoreHuman = document.createElement('h4');
const scoreComputer = document.createElement('h4')
totalScore.appendChild(scoreHuman);
totalScore.appendChild(scoreComputer);

totalScore.classList.add('totalScore');


    scoreHuman.textContent = `Human score = ${humanScore}`
    scoreComputer.textContent = `Computer score = ${computerScore}`

//Creating the events.


rock.addEventListener('click', () => {

    
    

    playerSelection = 'rock';
    console.log(playerSelection)
    playRound(playerSelection, computerPlay());
    scoreHuman.textContent = `Human score = ${humanScore}`
    scoreComputer.textContent = `Computer score = ${computerScore}`
    if(computerScore == 5){
        humanScore = 0 
        computerScore =0
        scoreHuman.textContent = `Human score = ${humanScore}`
        scoreComputer.textContent = `Computer score = ${computerScore}`
        alert('You lost!')
        
    }
    else if (humanScore == 5){
        humanScore = 0 
        computerScore =0
        scoreHuman.textContent = `Human score = ${humanScore}`
        scoreComputer.textContent = `Computer score = ${computerScore}`
        alert('You won!')
    }
});



paper.addEventListener('click', () => {
    playerSelection = 'paper'
    console.log(playerSelection)
    playRound(playerSelection, computerPlay());
    scoreHuman.textContent = `Human score = ${humanScore}`
    scoreComputer.textContent = `Computer score = ${computerScore}`
    if(computerScore == 5){
        humanScore = 0 
        computerScore =0
        scoreHuman.textContent = `Human score = ${humanScore}`
        scoreComputer.textContent = `Computer score = ${computerScore}`
        alert('You lost!')
    

    }
    else if (humanScore == 5){
        humanScore = 0 
        computerScore =0
        scoreHuman.textContent = `Human score = ${humanScore}`
        scoreComputer.textContent = `Computer score = ${computerScore}`
        alert('You won!')
        
    }
});

scissors.addEventListener('click', () => {
    playerSelection = 'scissors';
    console.log(playerSelection)
    playRound(playerSelection, computerPlay());
    scoreHuman.textContent = `Human score = ${humanScore}`
    scoreComputer.textContent = `Computer score = ${computerScore}`
    if(computerScore == 5){
        humanScore = 0 
        computerScore =0
        scoreHuman.textContent = `Human score = ${humanScore}`
        scoreComputer.textContent = `Computer score = ${computerScore}`
        alert('You lost!')
    }

    else if (humanScore == 5){
        humanScore = 0 
        computerScore =0
        scoreHuman.textContent = `Human score = ${humanScore}`
        scoreComputer.textContent = `Computer score = ${computerScore}`
        alert('You won!')
    };

});


// Winner













// Output - browser


container.appendChild(rock)
container.appendChild(paper)
container.appendChild(scissors)
containerTwo.appendChild(totalScore)
