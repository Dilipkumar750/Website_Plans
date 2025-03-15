import React from "react";
import home from "../assets/resposive2.png";

const Home = () => {
    const works = [
        { title: "Web Design", subtitle: "Development", icon: "🖥️" },
        { title: "E-Commerce", subtitle: "Websites", icon: "🛒" },
        { title: "Cost Effective", subtitle: "Web Solution", icon: "💰" },
        { title: "Logo Creation", subtitle: "Designing", icon: "🎨" },
        { title: "Content Creating", subtitle: "Development", icon: "✍️" }
    ];

    return (
        <section id="home">
            <div className="bg-white text-black">
                {/* Hero Section */}
                <div className="flex flex-col-reverse md:flex-row justify-center items-center px-6 md:px-12 py-10">
                    {/* Right Side - Text */}
                    <div
                        className="text-center md:text-left w-full md:w-1/2 mt-6 md:mt-0 md:ml-32"
                        data-aos="fade-right"
                    >
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
                            Crafting stunning, responsive websites that drive success.
                            Elevate your brand with innovative, high-performance digital solutions.
                        </h1>
                        <p className="mt-3 italic text-lg text-gray-700">
                            Your Ideas. <span className="bg-blue-200 text-blue-900 px-2">Our Expertise.</span>
                        </p>
                    </div>


                    {/* Left Side - Image */}
                    <div
                        className="flex justify-center w-full md:w-1/2"
                        data-aos="fade-left"
                    >
                        <img
                            src={home}
                            alt="Home Illustration"
                            className="w-full max-w-sm md:max-w-md object-cover"
                        />
                    </div>
                </div>

                {/* Work in Progress Section */}
                <div
                    className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 mt-10 mb-10 px-6"
                    data-aos="fade-up"
                >
                    {works.map((work, index) => (
                        <div
                            key={index}
                            className="p-6 bg-white shadow-lg rounded-xl border flex flex-col items-center text-center hover:shadow-xl transition duration-300"
                            data-aos={work.animation}
                        >
                            <div className="text-5xl mb-4">{work.icon}</div>
                            <h3 className="text-lg md:text-xl font-semibold text-blue-600">{work.title}</h3>
                            <p className="mt-1 text-gray-600">{work.subtitle}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Home;
