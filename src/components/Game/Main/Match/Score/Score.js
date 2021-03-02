import './Score.scss';

const Score = ({
  playerPoints,
  playerScoreRef,
  computerPoints,
  computerScoreRef,
}) => (
  <div className="score">
    <div className="player-score">
      <h2>Player</h2>
      <p ref={playerScoreRef}>{playerPoints}</p>
    </div>

    <div className="computer-score">
      <h2>Computer</h2>
      <p ref={computerScoreRef}>{computerPoints}</p>
    </div>
  </div>
);

export default Score;
