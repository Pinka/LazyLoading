"use client";

import { useEffect } from "react";

export default function HomePage() {
  // Log when this component is loaded
  useEffect(() => {
    console.log("Home page component loaded");
  }, []);

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Welcome to Our Website</h2>
      <p className="mb-3">This is the home page that loads by default.</p>
      <p>
        Click the navigation links above to see lazy-loaded routes in action.
      </p>
    </div>
  );
}
