import ExampleLayout from "@/components/ExampleLayout";
import CodeDemo from "./CodeDemo";

export const metadata = {
  title: "Enhanced Suspense Example | Next.js Lazy Loading",
  description:
    "Learn how to use React Suspense to build components with powerful lazy loading capabilities",
};

export default function EnhancedSuspensePage() {
  return (
    <ExampleLayout
      title="React Suspense"
      description="This example demonstrates real component lazy loading with Suspense. Open your browser's DevTools to see actual code-splitting and network requests as components load."
    >
      <div className="space-y-8">
        <CodeDemo />

        <section>
          <h2 className="text-xl font-medium text-gray-800 mb-4">
            Visible Lazy Loading in DevTools
          </h2>
          <p className="mb-4 text-gray-600">
            This demonstration uses actual code-splitting with separate
            component files, so you can see real network requests in the
            browser's DevTools when components are loaded.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-gray-600">
            <div>
              <h3 className="text-base font-medium mb-2 text-gray-800">
                What You're Seeing
              </h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Real dynamic imports that create separate JavaScript bundles
                </li>
                <li>
                  React's Suspense API providing a built-in way to show loading
                  states
                </li>
                <li>Error boundaries catching and handling loading failures</li>
                <li>Network-visible requests showing actual code-splitting</li>
              </ul>
            </div>
            <div>
              <h3 className="text-base font-medium mb-2 text-gray-800">
                Benefits
              </h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Smaller initial bundles - only load what's needed immediately
                </li>
                <li>Faster first paint - render the shell of your UI first</li>
                <li>
                  Progressive enhancement - show useful UI while loading content
                </li>
                <li>
                  Better UX - provide clear visual feedback during loading
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-medium text-gray-800 mb-4">
            Code Explanation
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-base font-medium mb-3 text-gray-800">
                Main Component
              </h3>
              <div className="bg-white p-4 rounded border border-gray-200">
                <pre className="text-sm overflow-x-auto">
                  <code>{`// Main component with Suspense
import React, { Suspense, lazy } from "react";

// Import components lazily
const LazyComponent = lazy(() => 
  import("./LazyComponent"));

export default function App() {
  const [showComponent, setShowComponent] = 
    useState(false);
    
  return (
    <div>
      <button onClick={() => setShowComponent(true)}>
        Load Component
      </button>
      
      {showComponent && (
        <ErrorBoundary fallback={<ErrorUI />}>
          <Suspense fallback={<LoadingUI />}>
            <LazyComponent />
          </Suspense>
        </ErrorBoundary>
      )}
    </div>
  );
}`}</code>
                </pre>
              </div>
            </div>
            <div>
              <h3 className="text-base font-medium mb-3 text-gray-800">
                Lazy-Loaded Component
              </h3>
              <div className="bg-white p-4 rounded border border-gray-200">
                <pre className="text-sm overflow-x-auto">
                  <code>{`// LazyComponent.tsx
// This file is loaded only when needed
"use client";

import { useEffect, useState } from "react";

export default function LazyComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Log when the component is loaded
    console.log("LazyComponent has been loaded!");
    
    // Simulate data fetching
    fetchData().then(result => {
      setData(result);
      setLoading(false);
    });
  }, []);
  
  if (loading) return <p>Loading data...</p>;
  
  return (
    <div>
      <h3>Lazy Component Loaded!</h3>
      <p>Data: {data}</p>
    </div>
  );
}`}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ExampleLayout>
  );
}
