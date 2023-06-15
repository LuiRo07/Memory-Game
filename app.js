const cards = document.querySelectorAll(".memory-card");
const gameBoard = document.querySelector(".memory-game");
const startBtn = document.querySelector(".start-btn");

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

// main function
function flipCard() {
    if (lockBoard) return; // board locks when you click on card when two cards are already displayed

    if (this === firstCard) return; // When same card is clicked.
    
    this.classList.add('flip');
    
    if (!hasFlippedCard) { // First card that's clicked on
        hasFlippedCard = true;
        firstCard = this;
        return;
    } 
    
    secondCard = this; // Second card that's clicked on
    
    checkForMatch();
}

function checkForMatch() {
    let isMatch = firstCard.dataset.animal === secondCard.dataset.animal;
    isMatch ? disableCards() : unflipCards();
}

function disableCards() { // Cards Match
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    lockBoard = true;
    setTimeout(() => {
        firstCard.style.visibility = 'hidden';
        secondCard.style.visibility = 'hidden';
        resetBoard();
    }, 1000)
}

function unflipCards() { // Cards don't match
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    }, 1000);
}

function resetBoard() { // function invoked after isMatch()
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

// Executes itself after declaration; IIFE (Immediately Invoked Function Expression)
(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})();

function startGame() {
    gameBoard.style.visibility = "visible";
}
// 
startBtn.addEventListener('click', startGame);
cards.forEach(card => card.addEventListener('click', flipCard));