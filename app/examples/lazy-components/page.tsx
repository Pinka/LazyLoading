"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import ExampleLayout from "@/components/ExampleLayout";

// Lazy-loaded components using Next.js dynamic imports
// We're using actual lazy loading, not simulating it
const ChartComponent = dynamic(
  () => import("@/components/examples/lazy-components/ChartComponent"),
  {
    loading: () => (
      <div className="flex justify-center items-center h-[300px] w-full bg-gray-100 text-gray-500 animate-pulse">
        Loading chart component...
      </div>
    ),
    ssr: false, // Disable SSR for the chart component
  }
);

const WeatherWidget = dynamic(
  () => import("@/components/examples/lazy-components/WeatherWidget"),
  {
    loading: () => (
      <div className="flex justify-center items-center h-[200px] w-full bg-gray-100 text-gray-500 animate-pulse">
        Loading weather widget...
      </div>
    ),
  }
);

const CommentsSection = dynamic(
  () => import("@/components/examples/lazy-components/CommentsSection"),
  {
    loading: () => (
      <div className="flex justify-center items-center h-[200px] w-full bg-gray-100 text-gray-500 animate-pulse">
        Loading comments section...
      </div>
    ),
  }
);

export default function LazyComponentsPage() {
  // State to track which components are loaded
  const [isChartLoaded, setIsChartLoaded] = useState(false);
  const [isWeatherLoaded, setIsWeatherLoaded] = useState(false);
  const [isCommentsLoaded, setIsCommentsLoaded] = useState(false);

  return (
    <ExampleLayout
      title="Component Lazy Loading"
      description="This example demonstrates lazy loading of UI components using Next.js dynamic imports"
    >
      <div className="space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">How It Works</h2>
          <p className="mb-4">
            This example demonstrates lazy loading of UI components using
            Next.js dynamic imports. Components are loaded only when needed,
            typically when a user interacts with the page.
          </p>
          <p className="mb-4">Benefits of lazy loading components:</p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">Reduces initial page load time</li>
            <li className="mb-2">
              Saves resources by loading only what's needed
            </li>
            <li className="mb-2">Improves perceived performance</li>
            <li className="mb-2">Allows for more modular code organization</li>
          </ul>
          <p>Click the buttons below to load different components on demand.</p>

          <div className="mt-6 p-4 bg-blue-50 rounded-md text-sm">
            <strong>Developer Note:</strong> Open your browser's Network tab in
            DevTools to see the actual JavaScript chunks being loaded when you
            click each button.
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Chart Component</h2>
          <p className="mb-4">
            This component loads a chart library (Chart.js) only when requested.
            The actual Chart.js script is only loaded when the component mounts.
          </p>
          <button
            onClick={() => setIsChartLoaded(true)}
            disabled={isChartLoaded}
            className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            {isChartLoaded ? "Chart Loaded" : "Load Chart Component"}
          </button>
          <div className="mt-4 min-h-[300px] flex items-center justify-center">
            {isChartLoaded ? (
              <ChartComponent />
            ) : (
              <div className="text-gray-500">
                Chart will appear here after loading
              </div>
            )}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Weather Widget</h2>
          <p className="mb-4">
            This component loads weather data from an API when requested. The
            API call is only made when the component is rendered.
          </p>
          <button
            onClick={() => setIsWeatherLoaded(true)}
            disabled={isWeatherLoaded}
            className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            {isWeatherLoaded ? "Weather Loaded" : "Load Weather Widget"}
          </button>
          <div className="mt-4 min-h-[200px] flex items-center justify-center">
            {isWeatherLoaded ? (
              <WeatherWidget />
            ) : (
              <div className="text-gray-500">
                Weather widget will appear here after loading
              </div>
            )}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Comments Section</h2>
          <p className="mb-4">
            This component loads a comments section with data when requested.
            The comments data is fetched only when the component mounts.
          </p>
          <button
            onClick={() => setIsCommentsLoaded(true)}
            disabled={isCommentsLoaded}
            className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            {isCommentsLoaded ? "Comments Loaded" : "Load Comments"}
          </button>
          <div className="mt-4 min-h-[200px] flex items-center justify-center">
            {isCommentsLoaded ? (
              <CommentsSection />
            ) : (
              <div className="text-gray-500">
                Comments section will appear here after loading
              </div>
            )}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Code Implementation</h2>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">
              Next.js Dynamic Imports
            </h3>
            <div className="bg-gray-100 p-4 rounded-md overflow-auto">
              <pre className="whitespace-pre-wrap text-sm">
                {`// Lazy loading components with Next.js
import dynamic from 'next/dynamic';

// Dynamic import with loading state
const ChartComponent = dynamic(
  () => import('@/components/examples/lazy-components/ChartComponent'),
  {
    loading: () => <div>Loading chart...</div>,
    ssr: false // Disable SSR for client-only components
  }
);

// Component is imported only when rendered in the DOM
function MyPage() {
  const [showChart, setShowChart] = useState(false);
  
  return (
    <div>
      <button onClick={() => setShowChart(true)}>
        Load Chart
      </button>
      
      {showChart && <ChartComponent />}
    </div>
  );
}`}
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              React.lazy() Alternative
            </h3>
            <div className="bg-gray-100 p-4 rounded-md overflow-auto">
              <pre className="whitespace-pre-wrap text-sm">
                {`// React.lazy approach (for client components)
import React, { Suspense, lazy } from 'react';

// Lazy load the component
const LazyComponent = lazy(() => import('./SomeComponent'));

function MyApp() {
  const [showComponent, setShowComponent] = useState(false);
  
  return (
    <div>
      <button onClick={() => setShowComponent(true)}>
        Show Component
      </button>
      
      {showComponent && (
        <Suspense fallback={<div>Loading...</div>}>
          <LazyComponent />
        </Suspense>
      )}
    </div>
  );
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </ExampleLayout>
  );
}
