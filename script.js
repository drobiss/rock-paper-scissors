function getComputerChoices(){
  const choices = [`rock`, `paper`, `scissors`]
  const randomIndex = Math.floor(Math.random() * choices.length)
  return choices[randomIndex]
}

function playRound(playerSelection, computerSelection) {
  if(playerSelection === computerSelection) {
    return `Its a tie!`
  } else if (
    (playerSelection === `rock` && computerSelection === `scissors`) ||
    (playerSelection === `paper` && computerSelection === `rock`) ||
    (playerSelection === `scissors` && computerSelection === `paper`)
  ) {
    return `You win!`
  } else {
    return `You lose!`
  }

}


let playAgain = true

while (playAgain) {
  const playerSelection = prompt(`Choose: rock, paper or scissors`)
  const computerSelection = getComputerChoices()

  console.log(`Player chose: ${playerSelection}`)
  console.log(`Computer chose: ${computerSelection}`)
  console.log(playRound(playerSelection, computerSelection))

  playAgain = confirm(`Do you want to play again?`)
}

console.log(`Thanks for playing`)

