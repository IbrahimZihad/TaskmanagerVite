import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 flex flex-col items-center justify-center text-white">
      <h1 className="text-5xl font-extrabold mb-6">Welcome to Task Manager</h1>
      <p className="text-xl mb-10">Manage your projects efficiently and collaboratively.</p>

      <div className="flex gap-4">
        <Link
          to="/login"
          className="bg-white text-blue-600 font-semibold px-6 py-2 rounded hover:bg-gray-100"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="bg-white text-blue-600 font-semibold px-6 py-2 rounded hover:bg-gray-100"
        >
          Sign Up
        </Link>
      </div>

      <div className="mt-10 text-sm">
        <Link to="/help" className="underline mr-4 hover:text-gray-200">Help</Link>
        <Link to="/privacy-policy" className="underline hover:text-gray-200">Privacy Policy</Link>
      </div>
    </div>
  );
};

export default Landing;
