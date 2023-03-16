import "./Leaderboard.scss";
import Player from "../../components/Player/Player";
import { useParams } from "react-router-dom";

const Leaderboard = ({ players }) => {
  const { playerId } = useParams();

  const player = players.find((player) => player.id === playerId);

  //   localStorage.setItem(player);

  //   console.log("PLAYER IS BELOW");
  //   console.log(player);

  //   const winRateCalc = player ? (player.gamesWon / player.gamesPlayed) * 100 : 0;

  //   console.log(winRateCalc);

  //   const getPlayerRank = (winRate) => {
  //     if (winRate <= 10) return "Peasant";
  //     if (winRate <= 20) return "Squire";
  //     if (winRate <= 30) return "Apprentice";
  //     if (winRate <= 40) return "Knight";
  //     if (winRate <= 50) return "Warrior";
  //     if (winRate <= 60) return "Gladiator";
  //     if (winRate <= 70) return "Champion";
  //     if (winRate <= 80) return "Elite";
  //     if (winRate <= 90) return "Master";
  //     return "Legend";
  //   };

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

      <div className="stats">
        <h3 className="stats__name">{player.name}</h3>
        {/* <p className="stats__rank">{getPlayerRank(winRateCalc)}</p> */}
        <p className="stats__rank">Rank: Knight</p>
      </div>
    </section>
  );
};

export default Leaderboard;
