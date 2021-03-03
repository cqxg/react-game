import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Game from './components/Game/Game';
import Statistics from './components/Statistics/Statistics';
import Settings from './components/Game/Main/Settings/Settings';

const App = () => {
  const { t, i18n } = useTranslation();

  const [activeLocale, setActiveLocale] = useState('en');
  const changeLocale = (e) => setActiveLocale(e);

  return (
    <>
      <Settings
        t={t}
        i18n={i18n}
        changeLocale={changeLocale}
        activeLocale={activeLocale}
      />
      <Switch>
        <Route path="/" exact render={() => <Game t={t} />} />
        <Route path="/statistics" render={() => <Statistics t={t} />} />
      </Switch>
    </>
  );
};

export default App;
