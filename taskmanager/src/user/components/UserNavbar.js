import React from 'react';
import { Link } from 'react-router-dom';

const PublicHeader = ({ onLoginClick }) => {
  return (
    <nav className="flex justify-between items-center bg-gray-600 text-white px-6 py-4">
      <ul className="flex items-center space-x-4">
        <li className="text-xl font-bold">Task Manager</li>
      </ul>
      <ul className="flex items-center space-x-6">
        <li><Link to="/" className="hover:text-yellow-400 transition">Home</Link></li>
        <li><Link to="/project_guide" className="hover:text-yellow-400 transition">Product Guide</Link></li>
        <li><Link to="/about" className="hover:text-yellow-400 transition">About</Link></li>
      </ul>
      <ul className="flex items-center">
        <li>
          <button
            onClick={onLoginClick}
            className="bg-pink-400 hover:bg-pink-300 text-white px-4 py-2 rounded transition"
          >
            Login
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default PublicHeader;
