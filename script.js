function computerPlay (){
    //We have to create different strings and then ask the computer to give us one of those randomly at a time
    
    let arr = ["rock","paper","scissors"];

    let randomString = arr[Math.floor(Math.random()*arr.length)];

    console.log(randomString);
    return randomString
}


//Now we have to play a round, and introduce the parameters



function playRound (playerSelection, computerSelection) {

//Now we have to  tell to the computer which items wins what item 

if (playerSelection === computerSelection) {
    

    console.log("It is a draw!");    
}

else if (playerSelection == 'rock' && computerSelection =='paper') {

console.log('You lose! paper beats rock')

}

else if (playerSelection == 'rock' && computerSelection =='scissors') {

console.log('You win! Rock beats scissors!')

}

else if (playerSelection == 'paper' && computerSelection =='rock') {

console.log('You win! paper beats rock!')

}

else if (playerSelection == 'paper' && computerSelection =='scissors') {

console.log('You got hoined! scissors beat paper!')
    
}

else if (playerSelection == 'scissors' && computerSelection =='rock') {

console.log('You lose! rock hoins scissors!')
        
}

else if (playerSelection == 'scissors' && computerSelection =='paper') {

console.log('You win! Scissors beat paper!')
            
}
}



//Now we have to tell the computer that no matter the case-sensitiviness of the input, he will understand it

let playerSelection = window.prompt('Insert your choice!');
let computerSelection = computerPlay();


playerSelection = playerSelection.toLowerCase()

console.log(playerSelection)
console.log(playRound(playerSelection, computerSelection));


//We need to run the game for 5 times. At the end of it we need to have a result window telling us if we won or no. 

function game (){

//Inside of this funcion we need to call the playRound function and then run it for 5 times. 





}

game()