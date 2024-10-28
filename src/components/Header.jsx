import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4 shadow-md border-b border-gray-700">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          AI Image Generator <span className="text-blue-400 font-light">by Abdullah</span>
        </h1>
        <nav className="flex space-x-4">
          <Link
            to="/"
            className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition duration-200 shadow-md"
          >
            Home
          </Link>
          <Link
            to="/create-image"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition duration-200 shadow-md"
          >
            Create Image
          </Link>
          <a
            href="https://github.com/Coder-philosopher/Bakerytry1" // Replace with your actual GitHub repo link
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded-lg transition duration-200 shadow-md"
          >
            Source Code
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
