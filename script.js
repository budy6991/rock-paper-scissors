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
    computerScore + 1

    }

    else if (playerSelection == 'rock' && computerSelection =='scissors') {

    console.log('You win! Rock beats scissors!')
    humanScore +1

    }

    else if (playerSelection == 'paper' && computerSelection =='rock') {

    console.log('You win! paper beats rock!')
    humanScore + 1

    }

    else if (playerSelection == 'paper' && computerSelection =='scissors') {

    console.log('You got hoined! scissors beat paper!')
    computerScore +1
        
    }

    else if (playerSelection == 'scissors' && computerSelection =='rock') {

    console.log('You lose! rock hoins scissors!')
    computerScore + 1
            
    }

    else if (playerSelection == 'scissors' && computerSelection =='paper') {

    console.log('You win! Scissors beat paper!')
    humanScore + 1
                
    }

    else {alert("Cagondios inserta una puta cosa bien hijoputa")}



}



//Now we have to tell the computer that no matter the case-sensitiviness of the input, he will understand it

let playerSelection = window.prompt('Insert your choice!');
let computerSelection = computerPlay();
let humanScore = 0
let computerScore = 0 




//Para que el ordendor entienda, le tenemos que dar el valor del resultado e ir sumandoselo al anterior. No sabemos que es el marcador, entonces tendremos que converitr esos resultados a numeros . 


playerSelection = playerSelection.toLowerCase()

console.log(playerSelection)
console.log(playRound(playerSelection, computerSelection));


//We need to run the game for 5 times. At the end of it we need to have a result window telling us if we won or no. 

function game (){


    for (let i = 0; i < 5; i++) {
        playerSelection = window.prompt('Insert your choice!');
        computerSelection = computerPlay();
        console.log(playerSelection);
        playRound(playerSelection, computerSelection);
        
    }





}

game()

function score () {




}

