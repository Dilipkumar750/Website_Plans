import React from "react";

const Contact = () => {
  return (
    <section className="bg-blue-50 dark:bg-slate-800" id="contact">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-4 text-center">
          <p className="text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-200">
            Contact
          </p>
          <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
            Build Your Website with Us
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
            Get a professionally designed website for just <span className="font-semibold text-blue-700">₹2999 per month</span>.
            Renewal charges apply from the second month. Let's create your online presence today!
          </p>
        </div>

        <div className="flex items-stretch justify-center">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact Info Section */}
            <div className="pr-6">
              <p className="mb-12 text-lg text-gray-600 dark:text-slate-400">
                We specialize in modern, responsive web development to help businesses grow online.
              </p>
              <ul className="space-y-6">
                {/* Address */}
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                    📍
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Our Address</h3>
                    <p className="text-gray-600 dark:text-slate-400">25, Lakshmipuram, 4th Street, Peelamedu, Coimbatore</p>
                  </div>
                </li>
                {/* Phone & Email */}
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                    📞
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Contact</h3>
                    <p className="text-gray-600 dark:text-slate-400">Mobile: +91 95668 73364</p>
                    <p className="text-gray-600 dark:text-slate-400">Email: gessdemn@gmail.com</p>
                  </div>
                </li>
                {/* Working Hours */}
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                    ⏰
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Working Hours</h3>
                    <p className="text-gray-600 dark:text-slate-400">Mon - Fri: 08:00 - 17:00</p>
                    <p className="text-gray-600 dark:text-slate-400">Sat & Sun: 08:00 - 12:00</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Contact Form Section */}
            <div className="card h-fit max-w-6xl p-5 md:p-12 bg-white shadow-lg rounded-lg">
              <h2 className="mb-4 text-2xl font-bold dark:text-black">Get Your Website Today!</h2>
              <form id="contactForm">
                <div className="mb-6">
                  <div className="space-y-4">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider text-gray-700">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        autoComplete="given-name"
                        placeholder="Your name"
                        className="w-full rounded-md border border-gray-400 py-2 px-3 shadow-md dark:text-gray-900"
                        name="name"
                      />
                    </div>
                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wider text-gray-700">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        autoComplete="email"
                        placeholder="Your email address"
                        className="w-full rounded-md border border-gray-400 py-2 px-3 shadow-md dark:text-gray-900"
                        name="email"
                      />
                    </div>
                  </div>
                  {/* Message Field */}
                  <div className="mt-4">
                    <label htmlFor="message" className="pb-1 text-xs uppercase tracking-wider text-gray-700">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      placeholder="Tell us about your project..."
                      className="w-full rounded-md border border-gray-400 py-2 px-3 shadow-md dark:text-gray-900"
                    ></textarea>
                  </div>
                </div>
                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="w-full bg-blue-800 text-white px-6 py-3 font-medium rounded-md hover:bg-blue-900 transition duration-300"
                  >
                    Get Started Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
