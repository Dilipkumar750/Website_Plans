import React, { useState } from "react";
import gessdemn from "../assets/gessdemn.png";
import { Menu, X } from "lucide-react"; // Icons for mobile menu toggle

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Function for smooth scrolling
    const handleScroll = (e, targetId) => {
        e.preventDefault();
        const target = document.getElementById(targetId);
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        setIsOpen(false); // Close mobile menu after click
    };

    return (
        <nav className="bg-gray-200 p-4 text-black font-bold flex justify-between items-center sticky top-0 z-50 shadow-md">
            {/* Logo Section */}
            <div className="flex items-center space-x-4">
                <img src={gessdemn} alt="Gessdemn Global Services" className="h-10" />
                <div className="text-xl font-bold">Gessdemn Global Services</div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
                <a href="#home" onClick={(e) => handleScroll(e, "home")} className="hover:text-gray-500 transition duration-300">Home</a>
                <a href="#about" onClick={(e) => handleScroll(e, "about")} className="hover:text-gray-500 transition duration-300">About Us</a>
                <a href="#services" onClick={(e) => handleScroll(e, "services")} className="hover:text-gray-500 transition duration-300">Services</a>
                <a href="#pricing" onClick={(e) => handleScroll(e, "pricing")} className="hover:text-gray-500 transition duration-300">Pricing</a>
                <a href="#testimonials" onClick={(e) => handleScroll(e, "testimonials")} className="hover:text-gray-500 transition duration-300">Testimonials</a>
                <a href="#contact" onClick={(e) => handleScroll(e, "contact")} className="hover:text-gray-500 transition duration-300">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden block focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-16 left-0 w-full bg-gray-200 shadow-md p-6 flex flex-col space-y-4 md:hidden">
                    <a href="#home" onClick={(e) => handleScroll(e, "home")} className="hover:text-gray-500 transition duration-300">Home</a>
                    <a href="#about" onClick={(e) => handleScroll(e, "about")} className="hover:text-gray-500 transition duration-300">About Us</a>
                    <a href="#services" onClick={(e) => handleScroll(e, "services")} className="hover:text-gray-500 transition duration-300">Services</a>
                    <a href="#pricing" onClick={(e) => handleScroll(e, "pricing")} className="hover:text-gray-500 transition duration-300">Pricing</a>
                    <a href="#testimonials" onClick={(e) => handleScroll(e, "testimonials")} className="hover:text-gray-500 transition duration-300">Testimonials</a>
                    <a href="#contact" onClick={(e) => handleScroll(e, "contact")} className="hover:text-gray-500 transition duration-300">Contact</a>
                </div>
            )}
        </nav>
    );
};

export default Header;
