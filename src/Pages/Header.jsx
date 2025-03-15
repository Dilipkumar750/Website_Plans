import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-gray-200 p-4 text-black font-bold flex justify-between sticky top-0 z-50">
      <div className="text-xl font-bold">Flown Developer</div>
      <div className="space-x-4">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/about" className="hover:text-gray-300">About Us</Link>
        <Link to="/services" className="hover:text-gray-300">Services</Link>
        <Link to="/projects" className="hover:text-gray-300">Projects</Link>
        <Link to="/contact" className="hover:text-gray-300">Contact</Link>
      </div>
    </nav>
  );
};

export default Header;
