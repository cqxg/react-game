import { useRef } from 'react';

import Score from '../Score/Score';
import Intro from '../Intro/Intro';
import Match from '../Match/Match';

import './Main.css';

const Main = () => {
  const options = useRef(null);
  const introRef = useRef(null);
  const matchRef = useRef(null);
  const playerHand = useRef(null);
  const computerHand = useRef(null);
  const optionsWrapper = useRef(null);
  const playerScoreRef = useRef(null);
  const computerScoreRef = useRef(null);

  const computerOptions = ['rock', 'paper', 'scissors'];

  const updateScore = (playerPoints, computerPoints) => {
    playerScoreRef.current.textContent = playerPoints;
    computerScoreRef.current.textContent = computerPoints;
  };

  return (
    <div className="main">
      <Score playerScoreRef={playerScoreRef} computerScoreRef={computerScoreRef} />
      <Intro introRef={introRef} matchRef={matchRef} />
      <Match
        options={options}
        matchRef={matchRef}
        playerHand={playerHand}
        updateScore={updateScore}
        computerHand={computerHand}
        optionsWrapper={optionsWrapper}
        computerOptions={computerOptions}
      />
    </div>
  );
};

export default Main;
