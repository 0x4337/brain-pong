import "./Leaderboard.scss";
import Player from "../../components/Player/Player";
import { useParams } from "react-router-dom";

const Leaderboard = ({ players }) => {
  const { playerId } = useParams();

  // TODO:
  // If the player ID matches the player ID in the URL, add a class to the player component
  // that will highlight the player in the leaderboard.

  return (
    <section className="leaderboard">
      <h2 className="leaderboard__title">Leaderboard</h2>

      <div className="leaderboard__players">
        <div className="leaderboard__wrapper">
          <p className="leaderboard__stat">Name</p>
          <p className="leaderboard__stat">Wins</p>
          <p className="leaderboard__stat">Played</p>
          <p className="leaderboard__stat">Losses</p>
          <p className="leaderboard__stat">Winrate</p>
        </div>
        {players.map((player) => {
          return <Player player={player} playerId={playerId} />;
        })}
      </div>
    </section>
  );
};

export default Leaderboard;
