import { Route, Switch } from 'react-router-dom';

import Game from './Pages/Game/Game';
import Statistics from './Pages/Statistics/Statistics';

const App = () => (
  <Switch>
    <Route path="/" exact component={Game} />
    <Route path="/statistics" exact component={Statistics} />
  </Switch>
);

export default App;
