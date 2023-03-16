import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import Leaderboard from "./pages/Leaderboard/Leaderboard";
import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const API_BASE_URL = "http://localhost:8085";
  const API_LEADERBOARD_ENDPOINT = "/leaderboard";

  const [players, setPlayers] = useState([]);
  const [input, setInput] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
    console.log(event.target.value);
  };

  const getLeaderboard = async () => {
    const { data } = await axios.get(
      `${API_BASE_URL}${API_LEADERBOARD_ENDPOINT}`
    );
    setPlayers(data);
    console.log(players);
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
