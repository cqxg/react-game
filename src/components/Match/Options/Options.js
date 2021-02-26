import './Options.css';

const Options = ({ options }) => {
  return (
    <div className="options-wrapper">
      <div ref={options} className="options">
        <button ref={options} className="rock">
          Rock
        </button>
        <button ref={options} className="scissors">
          scissors
        </button>
        <button ref={options} className="paper">
          paper
        </button>
      </div>
    </div>
  );
};

export default Options;
