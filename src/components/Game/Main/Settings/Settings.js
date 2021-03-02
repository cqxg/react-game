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
    volume: [50],
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
        values={state.volume}
        step={step}
        min={min}
        max={max}
        onChange={(values) => setState({ ...state, volume: values })}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              height: '36px',
              display: 'flex',
              width: '100%',
            }}
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
              height: '15px',
              width: '15px',
              borderRadius: '50%',
              backgroundColor: '#FFF',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
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

const SettingsPanel = ({ location }) => {
  const locationName =
    location.pathname === '/statistics' ? 'Main page' : 'Statistic';
  const locationLink = location.pathname === '/statistics' ? '/' : 'statistics';

  return (
    <div className="settings__panel">
      <Volume />
      <Link to={locationLink}>{locationName}</Link>
    </div>
  );
};

export default withRouter(SettingsPanel);
