import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import GamesList from "./components/games-list/GamesList";
import CreateGame from "./components/game-create/CreateGame";

function App() {
  return (
    <div id="box">
      <Header />
      <Routes>
        <Route path="/" element= {<Home />} />
        <Route path="/games" element={<GamesList />} />
        <Route path="/games/create" element={<CreateGame />} />
      </Routes>
      
    </div>
  );
}
export default App;
