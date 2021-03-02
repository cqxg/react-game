import { Route, Switch } from 'react-router-dom';

import Game from './components/Game/Game';
import Statistics from './components/Statistics/Statistics';
import Settings from './components/Game/Main/Settings/Settings';

const App = () => (
  <>
    <Settings />
    <Switch>
      <Route path="/" exact component={Game} />
      <Route path="/statistics" exact component={Statistics} />
    </Switch>
  </>
);

export default App;
