"use client";

import { useEffect, useState } from "react";

// Simulate a data fetching function
const fetchData = async () => {
  // Add artificial delay to make loading visible
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return {
    title: "Dynamic Content Loaded",
    items: [
      "Only loaded when requested",
      "Reduces initial bundle size",
      "Improves application performance",
      "Demonstrates actual code-splitting",
    ],
  };
};

export default function LazyComponent() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Log when the component is mounted
    console.log("LazyComponent has been loaded and mounted");

    // Fetch data
    fetchData().then((result) => {
      setData(result);
      setLoading(false);
      console.log("Data loaded successfully");
    });
  }, []);

  if (loading) {
    return (
      <div className="py-4">
        <p className="text-gray-600">Loading data...</p>
      </div>
    );
  }

  return (
    <div className="p-4 border border-gray-200 rounded bg-white">
      <h3 className="text-lg font-medium text-gray-800 mb-3">{data.title}</h3>

      <ul className="space-y-2">
        {data.items.map((item: string, index: number) => (
          <li key={index} className="flex items-center text-gray-600">
            <span className="mr-2">•</span> {item}
          </li>
        ))}
      </ul>

      <div className="mt-4 pt-3 border-t border-gray-200 text-sm text-gray-500">
        Component loaded at: {new Date().toLocaleTimeString()}
      </div>
    </div>
  );
}
