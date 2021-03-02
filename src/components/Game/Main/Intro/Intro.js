import './Intro.scss';

const Intro = ({ t, introRef, matchRef }) => {
  const startGame = () => {
    introRef.current.classList.add('fadeOut');
    matchRef.current.classList.add('fadeIn');
  };

  return (
    <div ref={introRef} className="intro">
      <h1>{t('gamename')}</h1>
      <button onClick={startGame}>{t('play')}</button>
    </div>
  );
};

export default Intro;
