import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLaptopCode, FaHeadset, FaCode, FaMobileAlt, FaPenNib, FaPalette } from "react-icons/fa";
import support from "../assets/support.avif";
import web from "../assets/webdesign.jpg";
import webdevelopment from "../assets/webdevelopment.avif";
import responsive from "../assets/responsiveimage.png";
import content from "../assets/contentcreation.png";
import logo from "../assets/logo.jpg";

const services = [
    {
        id: 1,
        img: web,
        title: "Web Design",
        content: "Craft visually appealing websites with advanced UI/UX tools like Adobe XD and Figma. Establish a strong online presence with our expert designers who specialize in building websites from concept to completion.",
        icon: <FaLaptopCode />
    },
    {
        id: 2,
        img: support,
        title: "24/7 Free Support",
        content: "Customer satisfaction is our top priority, and we are available through multiple communication channels to provide round-the-clock assistance. Whether it's web design or e-commerce development, we ensure prompt issue resolution with a proven track record of excellence in customer support.",
        icon: <FaHeadset />
    },
    {
        id: 3,
        img: webdevelopment,
        title: "Web Development",
        content: "As a leading web development company in India, our skilled developers build high-performance websites. We specialize in cutting-edge frameworks, tools, and technologies to deliver outstanding digital solutions tailored to business needs.",
        icon: <FaCode />
    },
    {
        id: 4,
        img: responsive,
        title: "Fully Responsive Websites",
        content: "A responsive website is crucial for business success. We create mobile-friendly, adaptive websites that function seamlessly on all devices, using the latest technologies to ensure a flawless user experience.",
        icon: <FaMobileAlt />
    },
    {
        id: 5,
        img: content,
        title: "Content Creation",
        content: "Our content writing services cover all your business needs, including website content, blog writing, marketing materials, product descriptions, research articles, and press releases—delivering engaging and SEO-optimized content.",
        icon: <FaPenNib />
    },
    {
        id: 6,
        img: logo,
        title: "Custom Logo Design",
        content: "We create professional logos for various industries, including real estate, education, finance, hospitality, IT, fashion, and more. Our custom logo design services ensure a unique brand identity tailored to your vision.",
        icon: <FaPalette />
    },
];


const Services = () => {
    const [flipped, setFlipped] = useState(null);

    return (
        <div className="flex flex-col items-center mt-5 mb-5 p-4" data-aos="fade-down">
            <h1 className="text-4xl font-extrabold mb-6 text-center text-blue-600">
                Our Services
            </h1>

            {/* Grid Layout for Services */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="fade-down">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className="relative shadow-xl rounded-xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer"
                        onClick={() => setFlipped(flipped === service.id ? null : service.id)}
                    >
                        <div className="relative overflow-hidden rounded-t-xl h-40 group">
                            <AnimatePresence mode="wait">
                                {flipped === service.id ? (
                                    <motion.div
                                        key="back"
                                        className="absolute inset-0 bg-[#F8F9FA] bg-opacity-80 flex items-center justify-center text-center text-[#000000] text-sm font-semibold p-6"
                                        initial={{ rotateX: 90, opacity: 0 }}
                                        animate={{ rotateX: 0, opacity: 1 }}
                                        exit={{ rotateX: -90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {service.content}
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="front"
                                        className="absolute inset-0"
                                        initial={{ rotateX: -90, opacity: 0 }}
                                        animate={{ rotateX: 0, opacity: 1 }}
                                        exit={{ rotateX: 90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <img
                                            src={service.img}
                                            alt={service.title}
                                            className="object-fit w-full h-60 transition-all duration-300 group-hover:scale-110 rounded-md"
                                        />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <div className="p-6 bg-white text-center flex flex-col items-center">
                            <div className="flex items-center gap-2 text-[#002B5B] text-lg font-semibold mb-2">
                                {service.icon} {/* React Icon */}
                                <h3>{service.title}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
