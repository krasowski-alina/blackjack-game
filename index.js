const sumText = document.querySelector("#sum")
const startGameBtn = document.querySelector("#startGame")
const newGameBtn = document.querySelector("#newGame")
const message = document.querySelector("#message")
const cardsDisplay = document.querySelector("#cardsDisplay")
let firstCard
let secondCard

const cards = []

function startGame(){
    firstCard = Math.floor(Math.random()  * 13) + 1
    secondCard = Math.floor(Math.random()  * 13) + 1
    let sum = firstCard + secondCard
    if(sum < 21) {
        message.textContent = "Do you want to draw a new card?"
    }else if( sum === 21) {
        message.textContent = "You've got Blackjack!"
    }else {
        message.textContent = "You're out of the game!"
    }
    cardsDisplay.textContent = `Cards: ${firstCard}, ${secondCard}`
    sumText.textContent = `Sum: ${sum}`
}

startGameBtn.addEventListener("click", ()=> {
    startGame()
})