// components/StartNewGame.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const StartNewGame: React.FC = () => {
  return (
    <Link to="/cardSelection" className="bg-blue-500 text-white p-4 rounded shadow">
      新しい試合を開始
    </Link>
  );
};

export default StartNewGame;
