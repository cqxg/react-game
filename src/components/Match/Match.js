import { useRef } from 'react';

import Hands from './Hands/Hands';
import Options from './Options/Options';

import './Match.css';

const Match = ({
  options,
  matchRef,
  playerHand,
  updateScore,
  computerHand,
  optionsWrapper,
  computerOptions,
}) => {
  let playerPoints = 0;
  let computerPoints = 0;

  const winner = useRef(null);

  const compareHands = (playerChoice, computerChoice) => {

    if (playerChoice === 'rock') {
      if (computerChoice === 'scissors') {
        winner.current.textContent = 'Player win!'
      } else if (computerChoice === 'paper') {
        winner.current.textContent = 'Computer win!'
      } else if (computerChoice === 'rock') {
        winner.current.textContent = 'Draw game :('
      }
    };

    if (playerChoice === 'scissors') {
      if (computerChoice === 'rock') {
        winner.current.textContent = 'Computer win!';
      } else if (computerChoice === 'paper') {
        winner.current.textContent = 'Player win!';
      } else if (computerChoice === 'scissors') {
        winner.current.textContent = 'Draw game :('
      }
    };

    if (playerChoice === 'paper') {
      if (computerChoice === 'rock') {
        winner.current.textContent = 'Player win!';
      } else if (computerChoice === 'paper') {
        winner.current.textContent = 'Draw game :('
      } else if (computerChoice === 'scissors') {
        winner.current.textContent = 'Computer win!';
      }
    };

    if (winner.current.textContent === 'Player win!') {
      playerPoints++;
    } else if (winner.current.textContent === 'Computer win!') {
      computerPoints++;
    };

    updateScore(playerPoints, computerPoints);
  };


  return (
    <div ref={matchRef} className="match fadeOut">
      <h2 ref={winner} className="winner">Choose a tool</h2>
      <Hands playerHand={playerHand} computerHand={computerHand} />
      <Options
        options={options}
        playerHand={playerHand}
        compareHands={compareHands}
        computerHand={computerHand}
        optionsWrapper={optionsWrapper}
        computerOptions={computerOptions} />
    </div>
  );
};

export default Match;
