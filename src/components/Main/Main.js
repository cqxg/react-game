import { useRef } from 'react';

import Intro from '../Intro/Intro';
import Match from '../Match/Match';

import './Main.scss';

const Main = () => {
  const options = useRef(null);
  const introRef = useRef(null);
  const matchRef = useRef(null);
  const playerHand = useRef(null);
  const computerHand = useRef(null);
  const optionsWrapper = useRef(null);

  return (
    <main>
      <Intro introRef={introRef} matchRef={matchRef} />
      <Match
        options={options}
        matchRef={matchRef}
        playerHand={playerHand}
        computerHand={computerHand}
        optionsWrapper={optionsWrapper}
      />
    </main>
  );
};

export default Main;
