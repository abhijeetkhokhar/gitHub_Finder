import React from "react";

export default function Contact() {
  return (
    <div className="flex justify-center items-center min-h-150 p-6">
      <div className="bg-white shadow-xl rounded-lg p-6 md:p-10 max-w-md w-full text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Contact Us
        </h2>
        <p className="text-gray-600 text-lg mb-4">
          Have any questions? We'd love to hear from you! Reach out via email or
          phone.
        </p>

        {/* Email Section */}
        <div className="mb-1 text-lg">
          <span className="font-semibold text-gray-700">Email:</span>
          <a
            href="mailto:info@example.com"
            className="text-blue-500 hover:underline ml-2"
          >
            info@example.com
          </a>
        </div>

        {/* Phone Section */}
        <div className="mb-6 text-lg">
          <span className="font-semibold text-gray-700">Phone:</span>
          <a
            href="tel:+1234567890"
            className="text-blue-500 hover:underline ml-2"
          >
            +1 (234) 567-890
          </a>
        </div>

        {/* Button */}
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300 w-full md:w-auto">
          Send a Message
        </button>
      </div>
    </div>
  );
}
