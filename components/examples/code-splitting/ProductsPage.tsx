"use client";

import { useEffect } from "react";

export default function ProductsPage() {
  // Log when this component is loaded
  useEffect(() => {
    console.log("Products page component loaded");
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Our Products</h2>
      <p className="mb-4">
        This products page was lazy-loaded when you clicked the Products link.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="border border-gray-200 p-4 rounded-lg shadow-sm text-center">
          <h3 className="text-lg font-bold mb-2">Product 1</h3>
          <p className="mb-2">Description of product 1</p>
          <p className="font-semibold">$99.99</p>
        </div>

        <div className="border border-gray-200 p-4 rounded-lg shadow-sm text-center">
          <h3 className="text-lg font-bold mb-2">Product 2</h3>
          <p className="mb-2">Description of product 2</p>
          <p className="font-semibold">$149.99</p>
        </div>

        <div className="border border-gray-200 p-4 rounded-lg shadow-sm text-center">
          <h3 className="text-lg font-bold mb-2">Product 3</h3>
          <p className="mb-2">Description of product 3</p>
          <p className="font-semibold">$199.99</p>
        </div>

        <div className="border border-gray-200 p-4 rounded-lg shadow-sm text-center">
          <h3 className="text-lg font-bold mb-2">Product 4</h3>
          <p className="mb-2">Description of product 4</p>
          <p className="font-semibold">$249.99</p>
        </div>
      </div>
    </div>
  );
}
