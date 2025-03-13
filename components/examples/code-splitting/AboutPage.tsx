"use client";

import { useEffect } from "react";

export default function AboutPage() {
  // Log when this component is loaded
  useEffect(() => {
    console.log("About page component loaded");
  }, []);

  return (
    <div className="bg-gray-50 p-5 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">About Us</h2>
      <p className="mb-3">
        This page was lazy-loaded when you clicked the About link.
      </p>
      <p className="mb-3">
        In a real application, this would be a separate JavaScript chunk.
      </p>
      <p className="mb-3">
        We are a company dedicated to demonstrating lazy loading techniques.
      </p>
      <p>
        This content was loaded asynchronously when you navigated to this route.
      </p>
    </div>
  );
}
