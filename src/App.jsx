import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Hero from './Component/Hero';
import Header from './Pages/Header';
import Footer from './Pages/Footer';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
      offset: 200, // Offset (in px) from the top before animation starts
    });
  }, []); // Empty dependency array ensures it runs only once

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
