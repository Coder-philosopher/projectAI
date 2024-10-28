import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import CreateImage from './components/CreateImage'; // Placeholder for Create Image page

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-image" element={<CreateImage />} />
      </Routes>
    </Router>
  );
}

export default App;
