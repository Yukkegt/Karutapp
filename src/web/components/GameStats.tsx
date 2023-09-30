// components/GameStats.tsx
import React from 'react';

const GameStats: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-2">試合統計</h2>
      <p>試合数: 10</p>
      <p>勝った回数: 7</p>
      <p>負けた回数: 3</p>
    </div>
  );
};

export default GameStats;
