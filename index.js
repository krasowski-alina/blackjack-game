const sumText = document.querySelector("#sum")
const startGameBtn = document.querySelector("#startGame")
const newGameBtn = document.querySelector("#newGame")
let message = document.querySelector("#message")
let firstCard = 10
let secondCard = 10
let sum = firstCard + secondCard
const cards = []

function startGame(){
    if(sum === 21) {
        message.textContent = "You've got Blackjack!"
    }else if( sum < 21) {
        message.textContent = "Do you want to draw a new card?"
    }else {
        message.textContent = "You're out of the game!"
    }
}
startGame()