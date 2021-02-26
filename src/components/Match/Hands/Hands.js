import hand from '../../../assets/rock.png';

import './Hands.css';

const Hands = () => {
  return (
    <div className="hands">
      <img alt="player-hand" className="player-hand" src={hand} />
      <img alt="computer-hand" className="computer-hand" src={hand} />
    </div>
  );
};

export default Hands;
