import { useRef, useState, useEffect } from 'react';

import Hands from './Hands/Hands';
import Score from './Score/Score';
import Options from './Options/Options';

import './Match.scss';

const Match = ({
  t,
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
        setState({
          ...state,
          winner: 'player',
          gamesCount: state.gamesCount + 1,
          playerPoints: state.playerPoints + 1,
        });
        winner.current.textContent = t('playerwin');
      } else if (computerChoice === 'paper') {
        setState({
          ...state,
          winner: 'computer',
          gamesCount: state.gamesCount + 1,
          computerPoints: state.computerPoints + 1,
        });
        winner.current.textContent = t('computerwin');
      } else if (computerChoice === 'rock') {
        setState({
          ...state,
          winner: 'draw',
          gamesCount: state.gamesCount + 1,
        });
        winner.current.textContent = t('draw');
      }
    }

    if (playerChoice === 'scissors') {
      if (computerChoice === 'rock') {
        setState({
          ...state,
          winner: 'computer',
          gamesCount: state.gamesCount + 1,
          computerPoints: state.computerPoints + 1,
        });
        winner.current.textContent = t('computerwin')
      } else if (computerChoice === 'paper') {
        setState({
          ...state,
          winner: 'player',
          gamesCount: state.gamesCount + 1,
          playerPoints: state.playerPoints + 1,
        });
        winner.current.textContent = t('playerwin');
      } else if (computerChoice === 'scissors') {
        setState({
          ...state,
          winner: 'draw',
          gamesCount: state.gamesCount + 1,
        });
        winner.current.textContent = t('draw');
      }
    }

    if (playerChoice === 'paper') {
      if (computerChoice === 'rock') {
        setState({
          ...state,
          winner: 'player',
          gamesCount: state.gamesCount + 1,
          playerPoints: state.playerPoints + 1,
        });
        winner.current.textContent = t('playerwin');
      } else if (computerChoice === 'paper') {
        setState({
          ...state,
          winner: 'draw',
          gamesCount: state.gamesCount + 1,
        });
        winner.current.textContent = t('draw');
      } else if (computerChoice === 'scissors') {
        setState({
          ...state,
          winner: 'computer',
          gamesCount: state.gamesCount + 1,
          computerPoints: state.computerPoints + 1,
        });
        winner.current.textContent = t('computerwin')
      }
    }
  };

  return (
    <div ref={matchRef} className="match fadeOut">
      <Score
        t={t}
        playerPoints={state.playerPoints}
        computerPoints={state.computerPoints}
      />
      <h2 ref={winner} className="winner">
        {t('choosetool')}
      </h2>
      <Hands playerHand={playerHand} computerHand={computerHand} />
      <Options
        t={t}
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
