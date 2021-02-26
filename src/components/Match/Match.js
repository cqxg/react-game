import Hands from './Hands/Hands';
import Options from './Options/Options';

import './Match.css';

const Match = ({ matchRef }) => {
  return (
    <div ref={matchRef} className="match fadeOut">
      <h2 className="winner">Choose a tool</h2>
      <Hands />
      <Options />
    </div>
  );
};

export default Match;
