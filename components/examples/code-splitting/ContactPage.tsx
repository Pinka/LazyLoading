"use client";

import { useEffect } from "react";

export default function ContactPage() {
  // Log when this component is loaded
  useEffect(() => {
    console.log("Contact page component loaded");
  }, []);

  return (
    <div className="bg-blue-50 p-5 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <p className="mb-3">
        This contact page was lazy-loaded when you clicked the Contact link.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <p className="mb-2">
            <strong>Email:</strong> example@example.com
          </p>
          <p className="mb-2">
            <strong>Phone:</strong> (123) 456-7890
          </p>
          <p>
            <strong>Address:</strong> 123 Lazy Loading St, Web Development City
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-3">Business Hours</h3>
          <p className="mb-1">
            <strong>Monday-Friday:</strong> 9am - 5pm
          </p>
          <p className="mb-1">
            <strong>Saturday:</strong> 10am - 2pm
          </p>
          <p>
            <strong>Sunday:</strong> Closed
          </p>
        </div>
      </div>

      <div className="bg-white p-5 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Send Us a Message</h3>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-1 font-medium">
              Name:
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 font-medium">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block mb-1 font-medium">
              Message:
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="button"
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
