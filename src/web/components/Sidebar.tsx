import React from 'react';
import MenuItem from './MenuItem';

const Sidebar: React.FC = () => {
  return (
    <aside className="bg-neutral-50 text-gray-900 w-56 p-4 border-r-[1px]">
      <h1 className="text-2xl font-bold mb-4">KarutApp</h1>
      <nav>
        <ul>
            <MenuItem label="ダッシュボード" href="/dashboard" />
            <MenuItem label="試合を開始" href="/cardSelection" />
            <MenuItem label="分析" href="#" />
            <MenuItem label="設定" href="#" />
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
