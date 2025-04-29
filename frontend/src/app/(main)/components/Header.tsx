import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io'; // Dropdown arrow
import './Header.css';

const Header = ({ user }: { user: { name: string; email: string } }) => {
  return (
    <header className="header">
      <img src="/assets/perahub.svg" alt="PeraHub logo" className="logo" />

      <div className="profile">
        <FaUserCircle className="profile-icon" />
        <div className="user-info">
          <span className="user-name">{user.name}</span>
          <span className="user-email">{user.email}</span>
        </div>
        <IoIosArrowDown className="dropdown-icon" />
      </div>
    </header>
  );
};

export default Header;
