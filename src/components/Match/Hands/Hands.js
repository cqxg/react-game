import hand from '../../../assets/rock.png';

import './Hands.css';

const Hands = () => {
  return (
    <div class="hands">
      <img class="player-hand" src={hand} />
      <img class="computer-hand" src={hand} />
    </div>
  );
};

export default Hands;
