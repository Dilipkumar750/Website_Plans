import React, { useState } from "react";
import enquiry from "../assets/enquiry.jpg";

const Pricing = () => {
    const plans = [
        {
            type: "Starter",
            price: "2999",
            subscription: "Month",
            description: "Perfect for small businesses and startup websites.",
            active: true,
            features: [
                "Single Page Website",
                "WhatsApp Integration",
                "Development From Scratch",
                "Responsive for Mobile Devices",
                "Google Map Integration",
                "Basic Contact Form",
                "Image Gallery for Showcasing Products/Services",
                "Social Media Links Integration",
                "Basic SEO Optimization",
                "Fast Loading Speed Optimization",
                "1 Revision Included"
            ]
        },
        {
            type: "Premium",
            price: "4999",
            subscription: "Year",
            description: "Ideal for growing businesses needing advanced website features.",
            features: [
                "Starter Plan +",
                "Multi-page Navigation",
                "Product Filter Functionality",
                "View More Option for Enhanced Content Display",
                "Admin Panel for Easy Website Management",
                "Front-end and Back-end Development",
                "Client Customization Options",
                "Database Management System for Organized Data Handling",
                "Basic Animations for an Engaging User Experience",
                "2 Revisions Included"
            ]
        },
        {
            type: "Pro",
            price: "9999",
            subscription: "Year",
            description: "Designed for enterprises needing top-tier customization and advanced features.",
            features: [
                "Premium Plan +",
                "Unlimited Customization Tailored to Business Needs",
                "SEO Booster for Improved Search Engine Rankings",
                "Digital Marketing Integrations",
                "Secure Payment Gateway Integration",
                "Advanced Animations and Design Enhancements for a Visually Stunning Interface"
            ]
        }
    ];

    const [showModal, setShowModal] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState("");
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const openModal = (plan) => {
        setSelectedPlan(plan);
        setShowModal(true);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendToWhatsApp = () => {
        const { name, email, message } = formData;
        const whatsappMessage = `Enquiry Details:%0A%0AName: ${name}%0AEmail: ${email}%0APlan: ${selectedPlan}%0AMessage: ${message}`;
        window.open(`https://wa.me/9566794685?text=${whatsappMessage}`, "_blank");
        setShowModal(false); // Close modal after sending
    };

    return (
        <section className="max-w-6xl mx-auto py-20 text-center" id="pricing">
            <div className="mb-12">
                <h2 className="text-4xl font-bold text-gray-800">Our Pricing Plan</h2>
                <p className="text-gray-600 mt-2">Choose a plan that suits your business needs.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
                {plans.map((plan, index) => (
                    <PricingCard key={index} {...plan} openModal={openModal} />
                ))}
            </div>

            {/* Enquiry Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl flex flex-col md:flex-row overflow-hidden min-h-[400px] md:min-h-[500px]">

                        {/* Left Side - Image (Will Adjust Based on Form Height) */}
                        <div className="md:w-1/2 hidden md:flex">
                            <img src={enquiry} alt="Enquiry" className="w-full h-full object-cover" />
                        </div>

                        {/* Right Side - Form (Limited Height & Scrollable) */}
                        <div className="w-full md:w-1/2 p-6 flex flex-col max-h-[500px] overflow-auto">
                            <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">Enquire Now</h2>

                            <label className="block text-left text-gray-600 mb-1">Name:</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange}
                                className="w-full p-2 mb-3 border rounded" placeholder="Enter your name" required />

                            <label className="block text-left text-gray-600 mb-1">Email:</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange}
                                className="w-full p-2 mb-3 border rounded" placeholder="Enter your email" required />

                            <label className="block text-left text-gray-600 mb-1">Plan:</label>
                            <input type="text" value={selectedPlan} readOnly
                                className="w-full p-2 mb-3 border rounded bg-gray-100" />

                            <label className="block text-left text-gray-600 mb-1">Message:</label>
                            <textarea name="message" value={formData.message} onChange={handleChange}
                                className="w-full p-2 mb-3 border rounded resize-y min-h-[100px] max-h-[200px]"
                                placeholder="Enter your message"></textarea>

                            <div className="flex justify-between mt-4">
                                <button onClick={() => setShowModal(false)} className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500">
                                    Cancel
                                </button>
                                <button onClick={sendToWhatsApp} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </section>
    );
};

const PricingCard = ({ type, price, subscription, description, features, active, openModal }) => {
    return (
        <div className={`w-80 h-[700px] p-6 rounded-2xl shadow-lg relative transition-transform transform hover:scale-105 ${active ? "border-4 border-blue-500 bg-blue-50" : "border border-gray-300 bg-white"}`}>
            <h3 className="text-2xl font-semibold text-blue-600">{type}</h3>
            <p className="text-3xl font-bold text-gray-800 mt-2">{price} <span className="text-lg text-gray-500">/ {subscription}</span></p>
            <p className="text-gray-600 mt-3">{description}</p>
            <ul className="text-left mt-4 space-y-2">
                {features.map((feature, idx) => (
                    <li key={idx} className="text-gray-700 flex items-center gap-2">
                        <span className="text-blue-500">✔</span> {feature}
                    </li>
                ))}
            </ul>

            {/* Buttons Section - Fixed at Bottom */}
            <div className="absolute bottom-4 left-0 w-full px-4">
                <div className="flex justify-between gap-4">
                    <a href="tel:9566794685" className="w-1/2 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700 font-semibold text-center transition-colors">
                        Call Now
                    </a>
                    <button onClick={() => openModal(type)} className="w-1/2 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold text-center transition-colors">
                        Enquire Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
