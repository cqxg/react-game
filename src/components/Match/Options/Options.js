import paper from '../../../assets/paper.png';
import rock from '../../../assets/rock.png';
import scissors from '../../../assets/scissors.png';

import './Options.css';

const Options = ({ options, optionsWrapper, playerHand, computerHand, computerOptions }) => {

  const play = (e) => {
    optionsWrapper.current.classList.add('disabled');

    const computerNumber = Math.floor(Math.random() * 3);
    const computerChoise = computerOptions[computerNumber];

    playerHand.current.src = rock;
    computerHand.current.src = rock;

    setTimeout(() => {
      switch (computerChoise) {
        case 'rock':
          computerHand.current.src = rock;
          break
        case 'paper':
          computerHand.current.src = paper;
          break
        case 'scissors':
          computerHand.current.src = scissors;
          break
        default:
          break
      }

      switch (computerChoise) {
        case 'rock':
          playerHand.current.src = rock;
          break
        case 'paper':
          playerHand.current.src = paper;
          break
        case 'scissors':
          playerHand.current.src = scissors;
          break
        default:
          break
      }

      optionsWrapper.current.classList.remove('disabled');
    }, 2000);

    playerHand.current.style.animation = 'shakePlayer 2s ease';
    computerHand.current.style.animation = 'shakeComputer 2s ease';
  };

  return (
    <div ref={optionsWrapper} className="options-wrapper">
      <div ref={options} className="options">
        <button onClick={(e) => play(e)} ref={options} className="rock">
          Rock
        </button>
        <button onClick={(e) => play(e)} ref={options} className="scissors">
          scissors
        </button>
        <button onClick={(e) => play(e)} ref={options} className="paper">
          paper
        </button>
      </div>
    </div>
  );
};

export default Options;
