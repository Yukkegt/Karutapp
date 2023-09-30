// components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-slate-100 text-gray-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          KarutApp
        </div>
        <nav className="flex space-x-4">
          <a href="#" className="hover:text-gray-300">
            ダッシュボード
          </a>
          <a href="#" className="hover:text-gray-300">
            設定
          </a>
          <a href="#" className="hover:text-gray-300">
            ログアウト
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
