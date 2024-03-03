
function getPlayerInput(){
    let playerSelection = prompt('Rock? Paper? Scissors?').toLowerCase()

while (playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors'){
    playerSelection = prompt("Invalid input - Rock? Paper? Scissors?")
}
return playerSelection
}


function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3)
    let computerSelection 
    if (choice == 0) {computerSelection = 'rock'}
    else if (choice == 1) {computerSelection = 'paper'}
    else if (choice == 2) {computerSelection = 'scissors'}  
    return computerSelection
}

function playRound(computerSelection, playerSelection){
    
    let outcome = 0

    if (computerSelection === playerSelection){
        alert("Draw!")
        outcome = 0
    }
    else if (computerSelection === 'rock'){
        if (playerSelection === 'scissors') {
            alert("You lose the round! " + computerSelection + ' beats ' + playerSelection)
            outcome = 1
        }
        else {
            alert("You win the round! " + playerSelection + ' beats ' + computerSelection)
            outcome = 2
        }
    }
    else if (computerSelection === 'scissors'){
        if (playerSelection === 'paper') {
            alert("You lose the round! " + computerSelection + ' beats ' + playerSelection)
            outcome = 1
        }
        else {
            alert("You win the round! " + playerSelection + ' beats ' + computerSelection)
            outcome = 2
        }
    }
    else if (computerSelection === 'paper'){
        if (playerSelection === 'rock') {
            alert("You lose the round! " + computerSelection + ' beats ' + playerSelection)
            outcome = 1
        }
        else {
            alert("You win the round! " + playerSelection + ' beats ' + computerSelection)
            outcome = 2
        }
    }
    return outcome

}

function playGame(){
    let round = 0
    let totalPlayerScore = 0
    let totalComputerScore = 0

    while (round <5){
        computerSelection = getComputerChoice()
        playerSelection = getPlayerInput()
        outcome=playRound('rock', playerSelection)
        if (outcome === 2){
            totalPlayerScore +=1
        }
        else if (outcome === 1){
            totalComputerScore += 1
        }
        round += 1
        console.log("playerscore" + totalPlayerScore)
        console.log("computerscore" + totalComputerScore)
    }
    
    if (totalComputerScore < totalPlayerScore){
        alert("Game over! You won the game: " + totalPlayerScore + "-" + totalComputerScore)
    }
    else if ( totalComputerScore > totalPlayerScore) {
        alert("Game over! You lost the game: " + totalComputerScore + "-" + totalPlayerScore )
    }
    else {
        alert ("Game over! It is a draw! " + totalComputerScore + "-" + totalPlayerScore )
    }
}

playGame()