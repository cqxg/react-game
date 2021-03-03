import { useEffect, useRef, useState } from 'react';
import { Range, getTrackBackground } from 'react-range';
import { Link, withRouter } from 'react-router-dom';
import { useHotkeys } from 'react-hotkeys-hook';

import volume from '../../../../assets/volume.png';
import backgroundMusic from '../../../../assets/phonemusic.mp3';

import './Settings.scss';

const min = 0;
const max = 100;
const step = 0.1;

const Volume = () => {
  const phoneMusic = useRef(null);

  const [state, setState] = useState({
    toggled: false,
    volume: [100],
  });

  useHotkeys('-', () => setState({ ...state, volume: [0] }));

  useEffect(() => {
    const e = state.volume[0];
    phoneMusic.current.volume = e * 0.01;
    document.addEventListener('click', () => phoneMusic.current?.play());
  }, [state.volume]);

  const RenderRange = () => (
    <div>
      <Range
        max={max}
        min={min}
        step={step}
        values={state.volume}
        onChange={(values) => setState({ ...state, volume: values })}
        renderTrack={({ props, children }) => (
          <div
            style={{
              width: '100%',
              height: '36px',
              display: 'flex',
            }}
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
          >
            <div
              ref={props.ref}
              style={{
                height: '5px',
                width: '100%',
                borderRadius: '4px',
                background: getTrackBackground({
                  values: state.volume,
                  colors: ['#548BF4', '#ccc'],
                  min: min,
                  max: max,
                }),
                alignSelf: 'center',
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            {...props}
            style={{
              width: '15px',
              height: '15px',
              display: 'flex',
              borderRadius: '50%',
              alignItems: 'center',
              backgroundColor: '#FFF',
              justifyContent: 'center',
              boxShadow: '0px 2px 6px #AAA',
            }}
          >
            <div
              style={{
                height: '5px',
                width: '5px',
                borderRadius: '50%',
                backgroundColor: isDragged ? '#548BF4' : '#CCC',
              }}
            />
          </div>
        )}
      />
    </div>
  );

  return (
    <div
      onMouseEnter={() => setState({ ...state, toggled: true })}
      onMouseLeave={() => setState({ ...state, toggled: false })}
      className="volume"
    >
      {state.toggled ? (
        RenderRange()
      ) : (
        <img width="30px" src={volume} alt="volume-icon" />
      )}
      <audio loop ref={phoneMusic} src={backgroundMusic} />
    </div>
  );
};

const Settings = ({
  t,
  i18n,
  theme,
  setTheme,
  location,
  activeLocale,
  changeLocale,
}) => {
  const setLanguage = (language) => {
    i18n.changeLanguage(language);
    changeLocale(language);
  };

  const RU = (
    <div
      className={
        activeLocale === 'ru'
          ? 'settings__language-container__ru active'
          : 'settings__language-container__ru'
      }
      onClick={() => setLanguage('ru')}
    >
      RU
    </div>
  );

  const EN = (
    <div
      className={
        activeLocale === 'en'
          ? 'settings__language-container__en active'
          : 'settings__language-container__en'
      }
      onClick={() => setLanguage('en')}
    >
      EN
    </div>
  );

  const locationName =
    location.pathname === '/statistics' ? t('ingame') : t('statistics');
  const locationLink = location.pathname === '/statistics' ? '/' : 'statistics';

  return (
    <div className="settings">
      <Volume />
      <Link to={locationLink}>
        <span>{locationName}</span>
      </Link>
      <div className="settings__language-container">
        {EN} {RU}
      </div>
      <span>{t('blactheme')}</span>
      <input
        type="checkbox"
        checked={theme}
        onChange={() => setTheme(!theme)}
      />
    </div>
  );
};

export default withRouter(Settings);
