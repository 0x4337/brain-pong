import "./HomePage.scss";
import { Link } from "react-router-dom";

const HomePage = ({ players, handleInputChange, input, handleSubmit }) => {
  const filteredPlayers = players.filter((player) => {
    return player.name.toLowerCase().includes(input.toLowerCase());
  });

  return (
    <main className="hero">
      <section className="hero__div">
        <h1 className="hero__title">
          BrainP<span className="hero__title-ball">o</span>ng
        </h1>
        <p className="hero__subtitle">BrainStations PingPong Leaderboard.</p>
      </section>

      <section className="input">
        <h4 className="input__title">Input Your Name</h4>

        <div className="input__wrapper">
          <form onSubmit={handleSubmit} className="input__form">
            <input
              onChange={handleInputChange}
              placeholder="name"
              value={input}
              type="text"
              className="input__input"
            />
            <button type="submit" className="input__submit">
              Submit
            </button>
          </form>
        </div>
      </section>
      <div className="input__players">
        {input &&
          filteredPlayers.map((player) => {
            return (
              <Link
                to={`/leaderboard/${player.id}`}
                className="input__player"
                key={player.id}
              >
                <p className="input__player-name">{player.name}</p>
              </Link>
            );
          })}
      </div>
    </main>
  );
};

export default HomePage;
