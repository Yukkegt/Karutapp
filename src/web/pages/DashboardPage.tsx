// pages/DashboardPage.tsx
import React from 'react';
import GameStats from '../components/GameStats';
import FavoriteCards from '../components/FavoriteCards';
import StartNewGame from '../components/StartNewGame';
import OngoingGames from '../components/OngoingGames';

const DashboardPage: React.FC = () => {
  return (
    <div className="space-y-4">
      <GameStats />
      <FavoriteCards />
      <StartNewGame />
      <OngoingGames />
    </div>
  );
};

export default DashboardPage;
