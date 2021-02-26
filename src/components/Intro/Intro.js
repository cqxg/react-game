import './Intro.css';

const Intro = ({ introRef, matchRef }) => {
  const startGame = () => {
    introRef.current.classList.add('fadeOut');
    matchRef.current.classList.add('fadeIn');
  };

  return (
    <div ref={introRef} className="intro">
      <h1>Rock, scissors, paper</h1>
      <button onClick={startGame}>Play!</button>
    </div>
  );
};

export default Intro;
