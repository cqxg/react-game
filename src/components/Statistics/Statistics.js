import './Statistics.scss';

const Statistics = ({ t }) => {
  const localStorageData = localStorage.getItem('stats');
  const data = localStorageData ? JSON.parse(localStorageData) : [];

  return (
    <div className="statistic">
      {data.length ? (
        <table>
          <thead>
            <tr>
              <th>{t('gamecount')}</th>
              <th>{t('playercount')}</th>
              <th>{t('computercount')}</th>
              <th>{t('winner')}</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={`${JSON.stringify(item)} ${index}`}>
                  <td>{item.gamesCount}</td>
                  <td>{item.playerPoints}</td>
                  <td>{item.computerPoints}</td>
                  <td>{item.winner}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
          <h1>{t('empty')}</h1>
        )}
    </div>
  );
};

export default Statistics;
