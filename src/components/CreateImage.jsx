import React, { useState } from 'react';

const CreateImage = () => {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Access the API key from .env file (for Vite)
  const apiKey = import.meta.env.VITE_API_KEY; // If you're using Vite, otherwise keep it as process.env.REACT_APP_API_KEY

  const handleGenerateImage = async () => {
    const API_URL = "https://api-inference.huggingface.co/models/ZB-Tech/Text-to-Image";
    const headers = {
      Authorization: `Bearer ${apiKey}`, // Use the API key
    };
    
    try {
      setError(null);
      setLoading(true);
      setImageUrl(null); // Reset previous image
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({ inputs: prompt }),
      });

      if (!response.ok) throw new Error('Image generation failed. Please try again.');

      const imageBlob = await response.blob();
      setImageUrl(URL.createObjectURL(imageBlob)); // Set image URL for display and download
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-6 space-y-6">
      <h2 className="text-4xl font-bold">Generate Your Image</h2>

      <textarea
        className="w-full max-w-lg p-4 bg-gray-800 text-white rounded-lg shadow-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
        placeholder="Enter your image description, e.g., 'Astronaut riding a horse'"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        disabled={loading} // Disable textarea when loading
      />

      <button
        onClick={handleGenerateImage}
        className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
        disabled={loading} // Disable button when loading
      >
        {loading ? (
          <span className="animate-spin inline-block w-5 h-5 border-2 border-t-transparent border-white rounded-full"></span>
        ) : (
          'Generate Image'
        )}
      </button>

      {error && <p className="text-red-500">{error}</p>}

      {imageUrl && (
        <div className="mt-6 text-center">
          <img src={imageUrl} alt="Generated result" className="w-full max-w-md rounded-lg shadow-md mb-4" />
          <a
            href={imageUrl}
            download="generated-image.png"
            className="px-4 py-2 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-lg shadow-md transition-transform duration-300"
          >
            Download Image
          </a>
        </div>
      )}
    </main>
  );
};

export default CreateImage;
