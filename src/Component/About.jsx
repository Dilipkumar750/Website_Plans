import React from "react";
import online from "../assets/Online.png";

const About = () => {
    return (
        <section id="about">
            <div className="relative bg-gray-100 py-12 px-4 sm:px-8 md:px-12 lg:px-24 overflow-hidden">
                {/* Background Design */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent opacity-50"></div>
                <div className="absolute top-0 left-0 w-20 h-20 md:w-32 md:h-32 bg-blue-400 rounded-full opacity-30 blur-2xl"></div>
                <div className="absolute bottom-0 right-0 w-28 h-28 md:w-48 md:h-48 bg-blue-400 rounded-full opacity-30 blur-2xl"></div>
                <div className="absolute top-1/2 left-5 md:left-10 w-4 h-4 md:w-6 md:h-6 bg-blue-600 rounded-full opacity-70 animate-bounce"></div>
                <div className="absolute top-1/4 right-5 md:right-10 w-5 h-5 md:w-8 md:h-8 bg-blue-600 rounded-full opacity-50 animate-bounce"></div>

                <div className="max-w-6xl mx-auto text-center relative z-10" data-aos="fade-up">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                        Welcome to <span className="text-blue-600">Gessdemn Global Services</span>
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
                        Your Trusted Partner in <span className="font-semibold">Digital Excellence</span>.
                        As a <span className="text-blue-500">100% Registered</span> and Trusted Web Development Company in India,
                        we specialize in crafting <strong>high-performance, scalable, and visually stunning</strong> websites tailored to your business needs.
                    </p>
                </div>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
                    {/* Left Side - Image */}
                    <div className="flex justify-center" data-aos="fade-right">
                        <img
                            src={online}
                            alt="About Us"
                            className="w-10/12 sm:w-9/12 md:w-7/12 lg:w-6/12 rounded-lg shadow-lg border-4 border-blue-200"
                        />
                    </div>

                    {/* Right Side - Content */}
                    <div data-aos="fade-left">
                        <h3 className="text-xl sm:text-2xl font-semibold text-blue-800 mb-4">
                            Why Choose Us?
                        </h3>
                        <ul className="text-gray-600 space-y-2 font-bold text-sm sm:text-base">
                            <li className="flex items-center">
                                ✅ Custom Web Development for Unique Business Needs
                            </li>
                            <li className="flex items-center">
                                ✅ High-Performance & Responsive Designs for all devices
                            </li>
                            <li className="flex items-center">
                                ✅ Scalable & Future-Ready Solutions for business growth
                            </li>
                            <li className="flex items-center">
                                ✅ E-commerce with seamless functionality
                            </li>
                        </ul>

                        <p className="mt-6 text-gray-600 text-sm sm:text-base">
                            At <span className="font-bold">Gessdemn Global Services</span>, we don’t just build websites – we create digital experiences
                            that <strong>drive engagement, boost conversions, and empower brands</strong> to thrive in the digital landscape.
                            Partner with us and let’s transform your vision into a <strong>powerful online presence</strong>. 🚀
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
