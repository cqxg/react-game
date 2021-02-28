import { useRef, useEffect } from 'react';

import Hands from './Hands/Hands';
import Options from './Options/Options';

import './Match.css';

const Match = ({
  options,
  matchRef,
  playerHand,
  computerHand,
  optionsWrapper,
  computerOptions,
}) => {
  useEffect(() => {
    const playMatch = () => {
      // console.log(options.current.children);


      // options?.current?.children?.forEach(option => {
      //   console.log(option);
      // });


      // playerHand.current.animationend((this.animation = ''));
      // computerHand.current.animationend((this.animation = ''));
      // options.forEach((option) => {
      //   option.addEventListener('click', function () {
      //     optionsWrapper.current.classList.add('disabled');
      //     const computerNumber = Math.floor(Math.random() * 3);
      //     const computerChoise = computerOptions[computerNumber];
      //     playerHand.src = `./assets/rock.png`;
      //     computerHand.src = `./assets/rock.png`;
      //     setTimeout(() => {
      //       //   compareHands(this.className, computerChoise);
      //       playerHand.src = `./assets/${this.className}.png`;
      //       computerHand.src = `./assets/${computerChoise}.png`;
      //       optionsWrapper.classList.remove('disabled');
      //     }, 2000);
      //     playerHand.style.animation = 'shakePlayer 2s ease';
      //     computerHand.style.animation = 'shakeComputer 2s ease';
      //   });
      // });
    };

    playMatch();
  }, []);

  return (
    <div ref={matchRef} className="match fadeOut">
      <h2 className="winner">Choose a tool</h2>
      <Hands playerHand={playerHand} computerHand={computerHand} />
      <Options optionsWrapper={optionsWrapper} options={options} playerHand={playerHand} computerHand={computerHand} computerOptions={computerOptions} />
    </div>
  );
};

export default Match;
