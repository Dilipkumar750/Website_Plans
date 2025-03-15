import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Alex K.",
    role: "Design Lead",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    review:
      "Pagedone stands out as the most user-friendly and effective solution I've ever used.",
    color: "text-yellow-500",
  },
  {
    name: "Jane D",
    role: "CEO",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    review: "Pagedone is simply the best tool of investment in the market right now.",
    color: "text-blue-500",
  },
  {
    name: "Harsh P.",
    role: "Product Designer",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
    rating: 5,
    review:
      "I was hesitant to try pagedone at first, but I'm so glad I did - it's exceeded all of my expectations.",
    color: "text-yellow-500",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to next testimonial
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to previous testimonial
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="max-w-4xl mx-auto py-16 px-5 text-center relative" id="testimonials">
      <h2 className="text-4xl font-bold text-gray-800">Testimonials</h2>
      <p className="text-gray-600 mt-2">See what our customers are saying.</p>

      {/* Testimonial Card */}
      <div className="relative mt-10">
        <div
          className="p-6 bg-white shadow-md rounded-lg border transition-transform"
          key={currentIndex}
        >
          {/* Star Rating */}
          <div className={`flex justify-center ${testimonials[currentIndex].color} text-xl mb-3`}>
            {"★".repeat(testimonials[currentIndex].rating)}
          </div>

          {/* Review Text */}
          <p className="text-gray-700 mb-4">{testimonials[currentIndex].review}</p>

          {/* User Info */}
          <div className="flex items-center justify-center gap-3">
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="w-12 h-12 rounded-full border"
            />
            <div className="text-left">
              <p className="text-lg font-semibold text-gray-800">{testimonials[currentIndex].name}</p>
              <p className="text-gray-500">{testimonials[currentIndex].role}</p>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-3 rounded-full shadow hover:bg-gray-300"
          onClick={prevTestimonial}
        >
          <FaArrowLeft />
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-3 rounded-full shadow hover:bg-gray-300"
          onClick={nextTestimonial}
        >
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
