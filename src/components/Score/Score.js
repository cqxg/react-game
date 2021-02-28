import './Score.css';

const Score = ({ playerScoreRef, computerScoreRef }) => {
    return (
        <div className="score">
            <div className="player-score">
                <h2>Player</h2>
                <p ref={playerScoreRef}>0</p>
            </div>

            <div className="computer-score">
                <h2>Computer</h2>
                <p ref={computerScoreRef} >0</p>
            </div>
        </div>
    )
}

export default Score;