import './Statistics.scss';

const Statistics = () => {
  const localStorageData = localStorage.getItem('stats');
  const data = localStorageData ? JSON.parse(localStorageData) : [];

  return (
    <div className="statistic">
      {data.length ? (
        <table>
          <thead>
            <tr>
              <th>Game Count</th>
              <th>Player Points</th>
              <th>Computer Points</th>
              <th>Winner</th>
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
        <h1>Empty</h1>
      )}
    </div>
  );
};

export default Statistics;
