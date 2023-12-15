import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import GamesList from "./components/games-list/GamesList";
import CreateGame from "./components/game-create/CreateGame";
import Login from "./components/login/Login";
import Register from "./components/register/Register";

function App() {
  return (
    <div id="box">
      <Header />
      <Routes>
        <Route path="/" element= {<Home />} />
        <Route path="/games" element={<GamesList />} />
        <Route path="/games/create" element={<CreateGame />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      
    </div>
  );
}
export default App;
