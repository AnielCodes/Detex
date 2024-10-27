import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faSearch, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import detexLogo from '../assets/Detex-logo.webp';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearchBar = () => setIsSearchOpen(!isSearchOpen);

  return (
    <div className="bg-black w-full px-6 py-4 flex justify-between items-center relative">
      {/* Logo Section */}
      <div className="flex items-center space-x-4">
        <img src={detexLogo} className="h-16 logo" alt="Detex Logo" />
      </div>

      {/* Hamburger Menu Icon for Mobile */}
      <div className="lg:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white hover:text-gray-400 focus:outline-none z-50">
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
        </button>
      </div>

      {/* Menu and Search Section */}
      <nav
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } lg:flex lg:items-center lg:space-x-8 absolute lg:static bg-black top-16 left-0 w-full lg:w-auto lg:bg-transparent transition-all duration-300 z-50`}
      >
        <ul className="lg:flex lg:space-x-8 text-white space-y-4 lg:space-y-0 p-4 lg:p-0">
          <li>
            <a href="#home" className="hover:text-gray-400 block">Home</a>
          </li>

          {/* About Dropdown */}
          <li className="relative group">
            <button className="hover:text-gray-400 flex items-center space-x-1">
              <span>About</span>
              <FontAwesomeIcon icon={faChevronDown} />
            </button>
            <ul className="absolute hidden group-hover:block top-10 left-0 bg-gray-800 text-white rounded shadow-lg py-2 z-50">
              <li className="px-4 py-2 hover:bg-gray-700">
                <a href="#team" className="block">Our Team</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-700">
                <a href="#mission" className="block">Our Mission</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-700">
                <a href="#history" className="block">History</a>
              </li>
            </ul>
          </li>

          {/* Services Dropdown */}
          <li className="relative group">
            <button className="hover:text-gray-400 flex items-center space-x-1">
              <span>Services</span>
              <FontAwesomeIcon icon={faChevronDown} />
            </button>
            <ul className="absolute hidden group-hover:block top-10 left-0 bg-gray-800 text-white rounded shadow-lg py-2 z-50">
              <li className="px-4 py-2 hover:bg-gray-700">
                <a href="#consulting" className="block">Consulting</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-700">
                <a href="#support" className="block">Support</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-700">
                <a href="#customization" className="block">Customization</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="#contact" className="hover:text-gray-400 block">Contact</a>
          </li>
        </ul>

        {/* Search Icon and Input */}
        <div className="relative flex items-center lg:ml-4 p-4 lg:p-0">
          <button onClick={toggleSearchBar} className="text-white hover:text-gray-400">
            <FontAwesomeIcon icon={faSearch} />
          </button>

          {/* Search Input Field */}
          <input
            type="text"
            placeholder="Search..."
            className={`transition-all duration-300 ease-in-out ${
              isSearchOpen ? 'w-48 opacity-100 ml-2' : 'w-0 opacity-0'
            } p-2 bg-gray-800 text-white rounded-full focus:outline-none`}
          />
        </div>
      </nav>
    </div>
  );
};

export default Header;

