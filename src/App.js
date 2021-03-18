import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import back from './assets/dark_wall.webp';
import Game from './components/Game/Game';
import Statistics from './components/Statistics/Statistics';
import Settings from './components/Game/Main/Settings/Settings';

const App = () => {
  const { t, i18n } = useTranslation();

  const body = document.getElementsByTagName('body');

  const [theme, setTheme] = useState(true);
  const [activeLocale, setActiveLocale] = useState('en');
  const changeLocale = (e) => setActiveLocale(e);

  useEffect(() => {
    if (!theme) body[0].style.background = '#fbfcfd';
    if (theme) body[0].style.background = `url(${back})`;
  }, [theme]);

  return (
    <>
      <Settings
        t={t}
        i18n={i18n}
        theme={theme}
        setTheme={setTheme}
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
