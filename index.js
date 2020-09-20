const app = () => {
    const match = document.querySelector('.match');
    const introScreen = document.querySelector('.intro');
    const playBtn = document.querySelector('.intro button');
    const pScore = document.querySelector('.player-score p');
    const cScore = document.querySelector('.computer-score p');
    const playerHand = document.querySelector('.player-hand');
    const computerHand = document.querySelector('.computer-hand');
    const options = document.querySelector('.options button');

    const computerOptions = ['rock', 'paper', 'scissors'];

    let playerScore = 0;
    let computerScore = 0;

    const startGame = () => {
        introScreen.classList.add('fadeOut');
        match.classList.add('fadeIn');
    };

    const playMatch = () => {
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoise = computerOptions[computerNumber];

        playerHand.src = `./assets/rock.png`;
        computerHand.src = `./assets/rock.png`;

        setTimeout(() => {
            playerHand.src = `./assets/${this.className}.png`;
            computerHand.src = `./assets/${computerChoise}.png`;
        }, 2000)

        playerHand.style.animation = 'shakePlayer 2s ease';
        computerHand.style.animation = 'shakeComputer 2s ease';
    };

    const updateScore = () => {
        pScore.textContent = playerScore;
        cScore.textContent = computerScore;
    }

    options.addEventListener('click', playMatch);
    playBtn.addEventListener('click', startGame);
};

document.addEventListener('DOMContentLoaded', app);