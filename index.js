const app = () => {
    const match = document.querySelector('.match');
    const introScreen = document.querySelector('.intro');
    const playBtn = document.querySelector('.intro button');
    const pScore = document.querySelector('.player-score p');
    const cScore = document.querySelector('.computer-score p');

    const computerOptions = ['rock', 'paper', 'scissors'];

    let playerScore = 0;
    let computerScore = 0;

    const updateScore = () => {
        pScore.textContent = playerScore;
        cScore.textContent = computerScore;
    };

    const compareHands = (playerChoice, computerChoice) => {

        const winner = document.querySelector('.winner');

        if (playerChoice === 'rock') {
            if (computerChoice === 'scissors') {
                winner.textContent = 'Player win!'
            } else if (computerChoice === 'paper') {
                winner.textContent = 'Computer win!'
            } else if (computerChoice === 'rock') {
                winner.textContent = 'Draw game :('
            }
        };

        if (playerChoice === 'scissors') {
            if (computerChoice === 'rock') {
                winner.textContent = 'Computer win!';
            } else if (computerChoice === 'paper') {
                winner.textContent = 'Player win!';
            } else if (computerChoice === 'scissors') {
                winner.textContent = 'Draw game :('
            }
        };

        if (playerChoice === 'paper') {
            if (computerChoice === 'rock') {
                winner.textContent = 'Player win!';
            } else if (computerChoice === 'paper') {
                winner.textContent = 'Draw game :('
            } else if (computerChoice === 'scissors') {
                winner.textContent = 'Computer win!';
            }
        };

        if (winner.textContent === 'Player win!') {
            playerScore++;
        } else if (winner.textContent === 'Computer win!') {
            computerScore++;
        };

        updateScore();
    };

    const playMatch = () => {
        const hands = document.querySelectorAll('.hands img');
        const playerHand = document.querySelector('.player-hand');
        const options = document.querySelectorAll('.options button');
        const computerHand = document.querySelector('.computer-hand');

        hands.forEach(hand => hand.addEventListener('animationend', function () { this.style.animation = '' }));

        options.forEach(option => {
            option.addEventListener('click', function () {
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoise = computerOptions[computerNumber];

                playerHand.src = `./assets/rock.png`;
                computerHand.src = `./assets/rock.png`;

                setTimeout(() => {
                    compareHands(this.className, computerChoise);

                    playerHand.src = `./assets/${this.className}.png`;
                    computerHand.src = `./assets/${computerChoise}.png`;
                }, 2000)

                playerHand.style.animation = 'shakePlayer 2s ease';
                computerHand.style.animation = 'shakeComputer 2s ease';

            })
        })
    };

    const startGame = () => {
        introScreen.classList.add('fadeOut');
        match.classList.add('fadeIn');
    };

    playMatch();

    playBtn.addEventListener('click', startGame);
};

document.addEventListener('DOMContentLoaded', app);