import Hands from './Hands/Hands';
import Options from './Options/Options';

import './Match.css';

const Match = () => {
    return (
        <div class="match fadeOut">
            <h2 class="winner">Choose a tool</h2>
            <Hands />
            <Options />
        </div>
    )
}

export default Match;