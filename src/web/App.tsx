import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./styles/App.css";
import Header from "./components/Header";
import Sidebar from './components/Sidebar';
import DashboardPage from "./pages/DashboardPage";
import GameStats from "./components/GameStats";
import FavoriteCards from "./components/FavoriteCards";
import OngoingGames from "./components/OngoingGames";
import StartNewGame from "./components/StartNewGame";

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <Router basename="/">
      <div className="font-sans">
        <Header />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 space-y-4 p-4">      
            <StartNewGame />
            <GameStats />
            <FavoriteCards />
            <OngoingGames />
            <Routes>
              <Route path="/dashboard" element={<DashboardPage />} />

            </Routes>
              
            
          </main>
        </div>
      </div>
    </Router>
  );
};
