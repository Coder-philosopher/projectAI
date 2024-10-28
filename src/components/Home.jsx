import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-6">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">Welcome to AI Image Generator</h2>
      <p className="text-lg md:text-xl text-gray-300 text-center mb-8 max-w-2xl animate-slideUp">
        This application allows users to generate high-quality images from text prompts using AI. 
        Leveraging the Hugging Face API, our tool transforms your imagination into visuals within seconds. 
        Perfect for creative projects, prototyping, and artistic exploration!
      </p>
      <Link to="/create-image">
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 animate-bounce">
          Create Image
        </button>
      </Link>
    </main>
  );
};

export default Home;
