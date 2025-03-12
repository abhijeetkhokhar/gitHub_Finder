import React from "react";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-150 p-8">
      <div className="bg-white shadow-xl rounded-lg p-6 md:p-12 w-full max-w-2xl text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          About Us
        </h1>
        <p className="text-gray-600 text-lg md:text-xl mb-6">
          We are passionate about building amazing web applications that enhance
          user experience and productivity. Our mission is to deliver
          high-quality, scalable, and innovative solutions tailored to our
          user's needs.
        </p>
        <div className="flex flex-col md:flex-row justify-center space-y-3 md:space-y-0 md:space-x-4">
          <a
            href="/contact"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition text-lg"
          >
            Get in Touch
          </a>
          <a
            href="/github-users"
            className="bg-gray-300 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-400 transition text-lg"
          >
            Explore GitHub Users
          </a>
        </div>
      </div>
    </div>
  );
}
