// components/MenuItem.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface MenuItemProps {
  label: string;
  href: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, href }) => {
  return (
    <li className="mb-2" key={label}>
      <Link to={href} className="hover:bg-gray-700 p-2 block rounded">
        {label}
      </Link>
    </li>
  );
};

export default MenuItem;
