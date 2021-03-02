import './Score.scss';

const Score = ({
  t,
  playerPoints,
  playerScoreRef,
  computerPoints,
  computerScoreRef,
}) => (
  <div className="score">
    <div className="player-score">
      <h2>{t('player')}</h2>
      <p ref={playerScoreRef}>{playerPoints}</p>
    </div>

    <div className="computer-score">
      <h2>{t('computer')}</h2>
      <p ref={computerScoreRef}>{computerPoints}</p>
    </div>
  </div>
);

export default Score;
