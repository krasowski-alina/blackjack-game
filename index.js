const sumText = document.querySelector("#sum")
const startGameBtn = document.querySelector("#startGame")
const newCardBtn = document.querySelector("#newGame")
const messageElem = document.querySelector("#message")
const cardsDisplay = document.querySelector("#cardsDisplay")
let isAlive = true
let hasBlackjack = false
let message = ""
let firstCard = createRandomCard()
let secondCard = createRandomCard()
let sum = firstCard + secondCard
const cards = [firstCard, secondCard]

function startGame(){
    renderGame()
}
function createRandomCard(){
       let random = Math.floor(Math.random()  * 13) + 1
       if(random > 10){
        return 10
       }else if(random === 1){
        return 11
       }else{
        return  random
       }
}
function renderGame(){
    // firstCard = Math.floor(Math.random()  * 13) + 1
    // secondCard = Math.floor(Math.random()  * 13) + 1
    cardsDisplay.textContent = `Cards: `
    for(let i = 0; i< cards.length; i++){
        cardsDisplay.textContent +=  `${cards[i]} `
    }

    if(sum < 21) {
        message = "Do you want to draw a new card?"
    }else if( sum === 21) {
        message = "You've got Blackjack!"
        hasBlackjack = true
    }else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageElem.textContent = message
    sumText.textContent = `Sum: ${sum}`
}

startGameBtn.addEventListener("click", ()=> {
    startGame()
})
newCardBtn.addEventListener("click", ()=> {
    let thirdCard = createRandomCard()
    sum += thirdCard
    cards.push(thirdCard)
    renderGame()
})