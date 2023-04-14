import axios from "axios";
import { useEffect } from "react";
import "./Player.scss";

const Player = ({ player, playerId }) => {
  console.log(player);
  const winRate = (player.gamesWon / player.gamesPlayed) * 100;
  const isHighlighted = player.id === playerId;

  const API_BASE_URL = "http://localhost:8085";
  const API_LEADERBOARD_ENDPOINT = "/leaderboard";

  const playerScore = Math.floor(
    player.gamesWon * ((player.gamesPlayed / (player.gamesPlayed + 1)) * 1000)
  );

  const getClassName = (baseClass) => {
    return `${baseClass}${isHighlighted ? ` ${baseClass}--highlighted` : ""}`;
  };

  return (
    <article className={getClassName("player")}>
      <div className={getClassName("player__div")}>
        <p className={getClassName("player__name")}>{player.name}</p>
        <p className={getClassName("player__wins")}>{player.gamesWon}</p>
        <p className={getClassName("player__played")}>{player.gamesPlayed}</p>
        <p className={getClassName("player__losses")}>
          {player.gamesPlayed - player.gamesWon}
        </p>
        {/* <p className={getClassName("player__score")}>{player.score}</p> */}
        <p className={getClassName("player__score")}>{playerScore}</p>
        <p className={getClassName("player__winrate")}>
          {Math.floor(winRate) || 0}%
        </p>
      </div>
    </article>
  );
};

export default Player;

// import "./Player.scss";

// const Player = ({ player, playerId }) => {
//   console.log(player);
//   const winRate = (player.gamesWon / player.gamesPlayed) * 100;
//   const isHighlighted = player.id === playerId;

//   return (
//     <article className={`player${isHighlighted ? " player--highlighted" : ""}`}>
//       <div
//         className={`player__div${
//           isHighlighted ? " player__div--highlighted" : ""
//         }`}
//       >
//         <p
//           className={`player__name${
//             isHighlighted ? " player__name--highlighted" : ""
//           }`}
//         >
//           {player.name}
//         </p>
//         <p
//           className={`player__wins${
//             isHighlighted ? " player__wins--highlighted" : ""
//           }`}
//         >
//           {player.gamesWon}
//         </p>
//         <p
//           className={`player__played${
//             isHighlighted ? " player__played--highlighted" : ""
//           }`}
//         >
//           {player.gamesPlayed}
//         </p>
//         <p
//           className={`player__losses${
//             isHighlighted ? " player__losses--highlighted" : ""
//           }`}
//         >
//           {player.gamesPlayed - player.gamesWon}
//         </p>
//         <p
//           className={`player__winrate${
//             isHighlighted ? " player__winrate--highlighted" : ""
//           }`}
//         >
//           {winRate.toFixed(2)}%
//         </p>
//       </div>
//     </article>
//   );
// };

// export default Player;

// import "./Player.scss";

// const Player = ({ player, playerId }) => {
//   console.log(player);
//   const winRate = (player.gamesWon / player.gamesPlayed) * 100;

//   //   if (player.id === playerId) {
//   //     return <Player player={player} className="leaderboard__selected" />;
//   //   } else {
//   //     return <Player player={player} />;
//   //   }

//   const createPlayerNormal = () => {
//     return (
//       <article className="player">
//         <div className="player__div">
//           <p className="player__name">{player.name}</p>
//           <p className="player__wins">{player.gamesWon}</p>
//           <p className="player__played">{player.gamesPlayed}</p>
//           <p className="player__losses">
//             {player.gamesPlayed - player.gamesWon}
//           </p>
//           <p className="player__winrate">{winRate}%</p>
//         </div>
//       </article>
//     );
//   };

//   const createPlaterHighlighted = () => {
//     return (
//       <article className="player player--highlighted">
//         <div className="player__div">
//           <p className="player__name">{player.name}</p>
//           <p className="player__wins">{player.gamesWon}</p>
//           <p className="player__played">{player.gamesPlayed}</p>
//           <p className="player__losses">
//             {player.gamesPlayed - player.gamesWon}
//           </p>
//           <p className="player__winrate">{winRate}%</p>
//         </div>
//       </article>
//     );
//   };

//   const createPlayter = () => {
//     if (player.id === playerId) {
//       return createPlaterHighlighted();
//     } else {
//       return createPlayerNormal();
//     }
//   };

//   return createPlayter();
// };

// export default Player;
