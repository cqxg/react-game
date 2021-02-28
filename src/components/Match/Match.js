import { useRef } from 'react';

import Score from '../Score/Score';

import Hands from './Hands/Hands';
import Options from './Options/Options';

import './Match.scss';

const Match = ({
  options,
  matchRef,
  playerHand,
  computerHand,
  optionsWrapper,
}) => {
  let playerPoints = 0;
  let computerPoints = 0;

  const winner = useRef(null);
  const playerScoreRef = useRef(null);
  const computerScoreRef = useRef(null);

  const computerOptions = ['rock', 'paper', 'scissors'];

  const updateScore = () => {
    playerScoreRef.current.textContent = playerPoints;
    computerScoreRef.current.textContent = computerPoints;
  };

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
      <Score playerScoreRef={playerScoreRef} computerScoreRef={computerScoreRef} />
      <h2 ref={winner} className="winner">Choose a tool</h2>
      <Hands playerHand={playerHand} computerHand={computerHand} />
      <Options
        options={options}
        playerHand={playerHand}
        computerHand={computerHand}
        compareHands={compareHands}
        optionsWrapper={optionsWrapper}
        computerOptions={computerOptions} />
    </div>
  );
};

export default Match;
