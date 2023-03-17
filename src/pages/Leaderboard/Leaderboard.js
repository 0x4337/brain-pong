import "./Leaderboard.scss";
import Player from "../../components/Player/Player";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Leaderboard = () => {
  const { playerId } = useParams();

  const API_BASE_URL = "http://localhost:8085";
  const API_LEADERBOARD_ENDPOINT = "/leaderboard";

  const [players, setStoredPlayers] = useState(null);

  useEffect(() => {
    const players = localStorage.getItem("players");
    if (players) {
      setStoredPlayers(JSON.parse(players));
    }
    console.log(players);
  }, []);

  const handleWin = async () => {
    // TODO:
    // Send a patch request to api endpoint
    // Increment won games and games played
    // Pass function down as prop
    const { data } = await axios.patch(
      `${API_BASE_URL}${API_LEADERBOARD_ENDPOINT}/${playerId}/win`
    );
    const { data: players } = await axios.get(
      `${API_BASE_URL}${API_LEADERBOARD_ENDPOINT}`
    );
    localStorage.setItem("players", JSON.stringify(players));
    setStoredPlayers(players);
  };

  const handleLoss = async () => {
    // TODO:
    // Send a patch request to api endpoint
    // Increment just games played
    // Pass function down as prop
    const { data } = await axios.patch(
      `${API_BASE_URL}${API_LEADERBOARD_ENDPOINT}/${playerId}/lost`
    );
    const { data: players } = await axios.get(
      `${API_BASE_URL}${API_LEADERBOARD_ENDPOINT}`
    );
    localStorage.setItem("players", JSON.stringify(players));
    setStoredPlayers(players);
  };

  //   const sortedPlayers = players.sort((a, b) => {
  //     // return b.gamesWon - a.gamesWon;
  //   });

  // FIXME:
  // Fix errors on leaderboard when refresh
  // Something to do with local storage
  // localStorage.setItem(player);

  if (!players) return <h1>Loading...</h1>;

  const player = players.find((player) => player.id === playerId);

  const winRateCalc = player ? (player.gamesWon / player.gamesPlayed) * 100 : 0;

  const playerScore = Math.floor(
    player.gamesWon * ((player.gamesPlayed / (player.gamesPlayed + 1)) * 1000)
  );

  console.log(winRateCalc);

  const getPlayerRank = (winRate) => {
    if (winRate <= 10 || !winRate) return "Peasant 🧌";
    if (winRate <= 20) return "Squire 🦥";
    if (winRate <= 30) return "Apprentice 🐀";
    if (winRate <= 40) return "Knight 🏹";
    if (winRate <= 50) return "Warrior 🏋🏼‍♂️";
    if (winRate <= 60) return "Gladiator 🏇🏼";
    if (winRate <= 70) return "Champion 🏅";
    if (winRate <= 80) return "Elite 🎯";
    if (winRate <= 90) return "Master 🥷🏽";
    return "Legend 👑";
  };

  const getPlayersScore = (player) => {
    return (
      player.gamesWon * ((player.gamesPlayed / (player.gamesPlayed + 1)) * 1000)
    );
  };

  return (
    <section className="leaderboard">
      <h2 className="leaderboard__title">
        Leaderb<span className="leaderboard__ball">o</span>ard
      </h2>

      <div className="stats">
        <h3 className="stats__name">{player.name}</h3>
        <p className="stats__rank">Rank: {getPlayerRank(winRateCalc)}</p>
        {/* <p className="stats__add">Add A Game</p> */}
        <p className="stats__score">Score: {playerScore}</p>
        <div className="stats__buttons">
          <button onClick={handleWin} className="stats__button">
            WON
          </button>
          <button onClick={handleLoss} className="stats__button">
            LOST
          </button>
        </div>

        {/* <p className="stats__rank">Rank: Knight</p> */}
      </div>

      <div className="leaderboard__players">
        <div className="leaderboard__wrapper">
          <p className="leaderboard__stat">Name</p>
          <p className="leaderboard__stat">Wins</p>
          <p className="leaderboard__stat">Played</p>
          <p className="leaderboard__stat">Losses</p>
          <p className="leaderboard__stat">Score</p>
          <p className="leaderboard__stat">Winrate</p>
        </div>
        {players
          .sort((a, b) => getPlayersScore(b) - getPlayersScore(a))
          .map((player) => {
            return (
              <Player
                //   playerScore={playerScore}
                player={player}
                playerId={playerId}
              />
            );
          })}
      </div>
    </section>
  );
};

export default Leaderboard;
