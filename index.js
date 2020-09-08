const app = () => {
    const match = document.querySelector('.match');
    const introScreen = document.querySelector('.intro');
    const playBtn = document.querySelector('.intro button');
    const pScore = document.querySelector('.player-score p');
    const cScore = document.querySelector('.computer-score p');
    const playerHand = document.querySelector('.player-hand');
    const computerHand = document.querySelector('.computer-hand');
    const options = document.querySelectorAll('.options button');

    const computerOptions = ['rock', 'paper', 'scissors'];

    let playerScore = 0;
    let computerScore = 0;

    const startGame = () => {
        introScreen.classList.add('fadeOut');
        match.classList.add('fadeIn');
    };

    playBtn.addEventListener('click', startGame)
};

document.addEventListener('DOMContentLoaded', app);