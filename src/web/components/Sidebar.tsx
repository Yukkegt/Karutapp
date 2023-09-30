// components/Sidebar.tsx
import React from 'react';
import MenuItem from './MenuItem';

const Sidebar: React.FC = () => {
  return (
    <aside className="bg-gray-800 text-white w-64 p-4">
      <h1 className="text-2xl font-bold mb-4">メニュー</h1>
      <nav>
        <ul>
            <MenuItem label="ダッシュボード" href="/dashboard" />
            <MenuItem label="試合を開始" href="#" />
            <MenuItem label="分析" href="#" />
            <MenuItem label="設定" href="#" />
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
