import { useRef } from 'react';

import Score from '../Score/Score';
import Intro from '../Intro/Intro';
import Match from '../Match/Match';

import './Main.css';

const Main = () => {
  const introRef = useRef(null);
  const matchRef = useRef(null);

  return (
    <div className="main">
      <Score />
      <Intro introRef={introRef} matchRef={matchRef} />
      <Match matchRef={matchRef} />
    </div>
  );
};

export default Main;
