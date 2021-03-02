import { useRef, useState, useEffect } from 'react';

import Hands from './Hands/Hands';
import Score from './Score/Score';
import Options from './Options/Options';

import './Match.scss';

const Match = ({
  options,
  matchRef,
  playerHand,
  computerHand,
  optionsWrapper,
}) => {
  const winner = useRef(null);

  const [state, setState] = useState({
    winner: '',
    gamesCount: 0,
    playerPoints: 0,
    computerPoints: 0,
  });

  useEffect(() => {
    const getStats = JSON.parse(localStorage.getItem('stats'));
    if (state.gamesCount !== 0) {
      if (getStats) {
        localStorage.setItem(
          'stats',
          JSON.stringify([...getStats, { ...state }])
        );
      } else {
        localStorage.setItem('stats', JSON.stringify([state]));
      }
    }
  }, [state]);

  const computerOptions = ['rock', 'paper', 'scissors'];

  const compareHands = (playerChoice, computerChoice) => {
    if (playerChoice === 'rock') {
      if (computerChoice === 'scissors') {
        winner.current.textContent = 'Player win!';
      } else if (computerChoice === 'paper') {
        winner.current.textContent = 'Computer win!';
      } else if (computerChoice === 'rock') {
        winner.current.textContent = 'Draw game :(';
      }
    }

    if (playerChoice === 'scissors') {
      if (computerChoice === 'rock') {
        winner.current.textContent = 'Computer win!';
      } else if (computerChoice === 'paper') {
        winner.current.textContent = 'Player win!';
      } else if (computerChoice === 'scissors') {
        winner.current.textContent = 'Draw game :(';
      }
    }

    if (playerChoice === 'paper') {
      if (computerChoice === 'rock') {
        winner.current.textContent = 'Player win!';
      } else if (computerChoice === 'paper') {
        winner.current.textContent = 'Draw game :(';
      } else if (computerChoice === 'scissors') {
        winner.current.textContent = 'Computer win!';
      }
    }

    if (winner.current.textContent === 'Player win!') {
      setState({
        ...state,
        winner: 'player',
        gamesCount: state.gamesCount + 1,
        playerPoints: state.playerPoints + 1,
      });
    } else if (winner.current.textContent === 'Computer win!') {
      setState({
        ...state,
        winner: 'computer',
        gamesCount: state.gamesCount + 1,
        computerPoints: state.computerPoints + 1,
      });
    } else if (winner.current.textContent === 'Draw game :(') {
      setState({
        ...state,
        winner: 'draw',
        gamesCount: state.gamesCount + 1,
      });
    }
  };

  return (
    <div ref={matchRef} className="match fadeOut">
      <Score
        playerPoints={state.playerPoints}
        computerPoints={state.computerPoints}
      />
      <h2 ref={winner} className="winner">
        Choose a tool
      </h2>
      <Hands playerHand={playerHand} computerHand={computerHand} />
      <Options
        options={options}
        playerHand={playerHand}
        computerHand={computerHand}
        compareHands={compareHands}
        gamesCount={state.gamesCount}
        optionsWrapper={optionsWrapper}
        computerOptions={computerOptions}
      />
    </div>
  );
};

export default Match;
