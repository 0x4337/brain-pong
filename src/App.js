import "./App.scss";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import Leaderboard from "./pages/Leaderboard/Leaderboard";
import { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const API_BASE_URL = process.env.REACT_APP_API_URL;
  const API_LEADERBOARD_ENDPOINT = "/leaderboard";

  const [players, setPlayers] = useState([]);
  const [input, setInput] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
    console.log(event.target.value);
  };

  const handleSubmit = async (event) => {
    // post the event.target.value to the api
    event.preventDefault();
    console.log(input);
    if (!input) {
      console.log("Please enter a name");
    } else {
      try {
        const { data } = await axios.post(
          `${API_BASE_URL}${API_LEADERBOARD_ENDPOINT}`,
          {
            name: input,
          }
        );
        getLeaderboard();
      } catch (error) {
        console.log(error);
      }
    }

    // // Navigate("/leaderboard/:playerId");
    // getLeaderboard();
  };

  // useEffect(() => {
  //   try {
  //     handleSubmit();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, [newPlayer]);

  const getLeaderboard = async () => {
    const { data } = await axios.get(
      `${API_BASE_URL}${API_LEADERBOARD_ENDPOINT}`
    );
    setPlayers(data);
    localStorage.setItem("players", JSON.stringify(data));
    // console.log(players);
  };

  useEffect(() => {
    try {
      getLeaderboard();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              players={players}
              handleInputChange={handleInputChange}
              input={input}
              handleSubmit={handleSubmit}
            />
          }
        />
        <Route
          path="leaderboard/:playerId"
          element={<Leaderboard players={players} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
