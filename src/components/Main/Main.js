import { useRef } from 'react';

import Score from '../Score/Score';
import Intro from '../Intro/Intro';
import Match from '../Match/Match';

import './Main.css';

const Main = () => {
  const options = useRef(null);
  const introRef = useRef(null);
  const matchRef = useRef(null);
  const playButton = useRef(null);
  const playerHand = useRef(null);
  const playerScore = useRef(null);
  const computerHand = useRef(null);
  const computerScore = useRef(null);
  const optionsWrapper = useRef(null);

  const computerOptions = ['rock', 'paper', 'scissors'];

  const score = {
    player: 0,
    compute: 0,
  };

  return (
    <div className="main">
      <Score />
      <Intro introRef={introRef} matchRef={matchRef} />
      <Match
        options={options}
        matchRef={matchRef}
        playerHand={playerHand}
        computerHand={computerHand}
        optionsWrapper={optionsWrapper}
        computerOptions={computerOptions}
      />
    </div>
  );
};

export default Main;
