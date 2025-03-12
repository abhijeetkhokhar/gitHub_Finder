import React from "react";
// import { useGlobal } from "../context/GlobalContext";

export default function Home() {
  // const { username } = useGlobal();
  return (
    <div>
      <div className="min-h-150 flex flex-col items-center justify-center">
        <div className="bg-white shadow-xl rounded-lg p-8 max-w-2xl text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-5">
            Welcome, to Our Website
          </h1>
          <p className="text-gray-600 mb-6">
            Discover amazing content, explore our services, and get in touch
            with us.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/about"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Learn More
            </a>
            <a
              href="/contact"
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
