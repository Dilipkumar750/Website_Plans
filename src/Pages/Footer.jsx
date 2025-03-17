import React from "react";
import { FaLinkedin, FaInstagram, FaWhatsapp, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl text-center">
        <p className="my-6 text-gray-500 dark:text-gray-400">
          Gessdemn Global Services - Delivering high-quality web development solutions tailored to your business needs.
        </p>
        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
          <li onClick={(e) => handleScroll(e, "home")} className="mr-4 hover:underline md:mr-6 cursor-pointer">Home</li>
          <li onClick={(e) => handleScroll(e, "about")} className="mr-4 hover:underline md:mr-6 cursor-pointer">About Us</li>
          <li onClick={(e) => handleScroll(e, "services")} className="mr-4 hover:underline md:mr-6 cursor-pointer">Services</li>
          <li onClick={(e) => handleScroll(e, "pricing")} className="mr-4 hover:underline md:mr-6 cursor-pointer">Pricing</li>
          <li onClick={(e) => handleScroll(e, "testimonials")} className="mr-4 hover:underline md:mr-6 cursor-pointer">Testimonials</li>
          <li onClick={(e) => handleScroll(e, "contact")} className="mr-4 hover:underline md:mr-6 cursor-pointer">Contact</li>
        </ul>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://www.linkedin.com/company/gessdemn-global-services/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://www.instagram.com/gessdemnglobalservices/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-pink-600 dark:text-gray-400 dark:hover:text-pink-500"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="https://wa.me/9566794685" // Replace with your WhatsApp link
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400"
          >
            <FaWhatsapp size={30} />
          </a>
          <a
            href="https://twitter.com" // Replace with your Twitter (X) link
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-400 dark:text-gray-400 dark:hover:text-blue-300"
          >
            <FaTwitter size={30} />
          </a>
        </div>

        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {new Date().getFullYear()} Gessdemn Global Services. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
