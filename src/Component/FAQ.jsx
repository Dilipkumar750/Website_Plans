import React, { useState } from "react";
import faqImage from "../assets/FAQs.png"; // Ensure you have an image in your project

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqData = [
        { question: "What is the MERN stack?", answer: "MERN stands for MongoDB, Express.js, React, and Node.js. It is a popular full-stack JavaScript framework used for developing modern web applications." },
        { question: "Why use the MERN stack for web development?", answer: "The MERN stack is preferred for its efficiency, flexibility, and ability to handle both front-end and back-end development using JavaScript." },
        { question: "What is the role of MongoDB in the MERN stack?", answer: "MongoDB is a NoSQL database that stores data in JSON-like documents, providing flexibility and scalability for modern applications." },
        { question: "How does React work in the MERN stack?", answer: "React is a front-end JavaScript library used for building interactive and dynamic user interfaces with a component-based structure." },
        { question: "What is the difference between the MERN and MEAN stacks?", answer: "The main difference is that MERN uses React for the front end, while MEAN uses Angular. React provides a more flexible and efficient UI development experience." },
        { question: "What are the advantages of using Node.js in the MERN stack?", answer: "Node.js allows JavaScript to run on the server side, enabling fast, scalable, and non-blocking operations for web applications." },
        { question: "Is the MERN stack suitable for e-commerce websites?", answer: "Yes, the MERN stack is widely used for developing e-commerce platforms due to its scalability, flexibility, and real-time data handling capabilities." },
    ];

    return (
        <div className="flex flex-col md:flex-row items-center justify-center py-12 px-4">
            {/* Left Side - FAQ Image */}
            <div className="w-full md:w-1/2 flex justify-center" data-aos="fade-right">
                <img src={faqImage} alt="FAQs" className="w-full max-w-md md:max-w-sm lg:max-w-md xl:max-w-lg object-fit" />
            </div>

            {/* Right Side - FAQ Accordion */}
            <div className="w-full md:w-1/2 px-4 md:px-8">
                <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center md:text-left" data-aos="fade-up">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-4 justify-start">
                    {faqData.map((faq, index) => (
                        <div key={index} className="border border-gray-300 rounded-lg overflow-hidden" data-aos="fade-left" data-aos-delay={`${index * 100}`}>
                            <button
                                className="w-full flex justify-between items-center px-4 py-3 text-md font-medium text-gray-800 bg-white hover:bg-gray-50 transition duration-200"
                                onClick={() => toggleAccordion(index)}
                                aria-expanded={openIndex === index}
                            >
                                <span>{faq.question}</span>
                                <svg
                                    className={`transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                                    width="22"
                                    height="22"
                                    viewBox="0 0 22 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                                        stroke="currentColor"
                                        strokeWidth="1.6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                            {openIndex === index && (
                                <div className="px-4 py-3 bg-gray-50 text-gray-700 border-t border-gray-200">
                                    <p>{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
