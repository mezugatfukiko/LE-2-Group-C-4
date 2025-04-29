import React, { useState, useEffect, useRef } from 'react';
import { FaUser } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io'; // Dropdown arrow
import { MdLogout } from 'react-icons/md'; // Logout icon
import './Header.css';

const Header = ({ user }: { user: { name: string; email: string } }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // Create a ref for the dropdown menu to detect outside clicks
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Close dropdown if clicked outside or press ESC
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownVisible(false);
      }
    };

    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setDropdownVisible(false);
      }
    };

    // Add event listeners
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscKey);

    // Clean up event listeners on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscKey);
    };
  }, []);

  const toggleDropdown = () => setDropdownVisible(!dropdownVisible);

  return (
    <header className="header">
      <img src="/assets/perahub.svg" alt="PeraHub logo" className="logo" />

      <div className="profile">
        <FaUser className="profile-icon" />
        <div className="user-info">
          <span className="user-name">{user.name}</span>
          <span className="user-email">{user.email}</span>
        </div>
        <IoIosArrowDown
          className="dropdown-icon"
          onClick={toggleDropdown}
        />
      </div>

      {/* Dropdown menu for logout */}
      {dropdownVisible && (
        <div ref={dropdownRef} className="dropdown-menu">
          <button className="logout-button">
            <MdLogout className="logout-icon" />
            Log out
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
