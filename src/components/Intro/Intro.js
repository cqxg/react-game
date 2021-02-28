import './Intro.scss';

const Intro = ({ introRef, matchRef }) => {
  const startGame = () => {
    introRef.current.classList.add('fadeOut');
    matchRef.current.classList.add('fadeIn');
  };

  return (
    <div ref={introRef} className="intro">
      <h1>Rock - Scissors - Paper</h1>
      <button onClick={startGame}>Play!</button>
    </div>
  );
};

export default Intro;
