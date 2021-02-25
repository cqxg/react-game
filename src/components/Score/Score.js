import './Score.css';

const Score = () => {
    return (
        <div class="score">
            <div class="player-score">
                <h2>Player</h2>
                <p>0</p>
            </div>

            <div class="computer-score">
                <h2>Computer</h2>
                <p>0</p>
            </div>
        </div>
    )
}

export default Score;