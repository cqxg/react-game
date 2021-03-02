import { Route, Switch } from 'react-router-dom';

import Game from './Pages/Game/Game';
import Statistics from './Pages/Statistics/Statistics';
import SettingsPanel from './Pages/Game/Header/SettingsPanel/SettingsPanel';

const App = () => (
  <>
    <SettingsPanel />
    <Switch>
      <Route path="/" exact component={Game} />
      <Route path="/statistics" exact component={Statistics} />
    </Switch>
  </>
);

export default App;
