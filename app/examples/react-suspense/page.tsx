"use client";

import { useState, lazy, Suspense } from "react";
import ExampleLayout from "@/components/ExampleLayout";

// Lazy-loaded components using React.lazy and Suspense
// Note: We need to add "use client" directive to each component
const ChartComponent = lazy(
  () => import("@/components/examples/react-suspense/ChartComponent")
);
const WeatherWidget = lazy(
  () => import("@/components/examples/react-suspense/WeatherWidget")
);
const CommentsSection = lazy(
  () => import("@/components/examples/react-suspense/CommentsSection")
);

// Loading components for Suspense fallbacks
const ChartLoadingFallback = () => (
  <div className="flex justify-center items-center h-[300px] w-full bg-gray-100 text-gray-500 animate-pulse">
    Loading chart component...
  </div>
);

const WeatherLoadingFallback = () => (
  <div className="flex justify-center items-center h-[200px] w-full bg-gray-100 text-gray-500 animate-pulse">
    Loading weather widget...
  </div>
);

const CommentsLoadingFallback = () => (
  <div className="flex justify-center items-center h-[200px] w-full bg-gray-100 text-gray-500 animate-pulse">
    Loading comments section...
  </div>
);

export default function ReactSuspensePage() {
  // State to track which components should be shown
  const [showChart, setShowChart] = useState(false);
  const [showWeather, setShowWeather] = useState(false);
  const [showComments, setShowComments] = useState(false);

  return (
    <ExampleLayout
      title="React Suspense Lazy Loading"
      description="This example demonstrates lazy loading of UI components using React's Suspense and lazy features"
    >
      <div className="space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">How It Works</h2>
          <p className="mb-4">
            This example demonstrates lazy loading of UI components using
            React's built-in Suspense and lazy features. Components are loaded
            only when needed, with a fallback UI shown during loading.
          </p>
          <p className="mb-4">Benefits of Suspense-based lazy loading:</p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">Built directly into React</li>
            <li className="mb-2">
              Declarative loading states with Suspense boundaries
            </li>
            <li className="mb-2">Can be nested for complex UIs</li>
            <li className="mb-2">Works with Server Components in React 18+</li>
            <li className="mb-2">Reduces initial bundle size</li>
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
            React Suspense will show a fallback while the component loads.
          </p>
          <button
            onClick={() => setShowChart(true)}
            disabled={showChart}
            className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            {showChart ? "Chart Loaded" : "Load Chart Component"}
          </button>
          <div className="mt-4 min-h-[300px] flex items-center justify-center">
            {!showChart ? (
              <div className="text-gray-500">
                Chart will appear here after loading
              </div>
            ) : (
              <Suspense fallback={<ChartLoadingFallback />}>
                <ChartComponent />
              </Suspense>
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
            onClick={() => setShowWeather(true)}
            disabled={showWeather}
            className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            {showWeather ? "Weather Loaded" : "Load Weather Widget"}
          </button>
          <div className="mt-4 min-h-[200px] flex items-center justify-center">
            {!showWeather ? (
              <div className="text-gray-500">
                Weather widget will appear here after loading
              </div>
            ) : (
              <Suspense fallback={<WeatherLoadingFallback />}>
                <WeatherWidget />
              </Suspense>
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
            onClick={() => setShowComments(true)}
            disabled={showComments}
            className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            {showComments ? "Comments Loaded" : "Load Comments"}
          </button>
          <div className="mt-4 min-h-[200px] flex items-center justify-center">
            {!showComments ? (
              <div className="text-gray-500">
                Comments section will appear here after loading
              </div>
            ) : (
              <Suspense fallback={<CommentsLoadingFallback />}>
                <CommentsSection />
              </Suspense>
            )}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Code Implementation</h2>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">
              React.lazy and Suspense
            </h3>
            <div className="bg-gray-100 p-4 rounded-md overflow-auto">
              <pre className="whitespace-pre-wrap text-sm">
                {`// Lazy loading components with React.lazy and Suspense
import { lazy, Suspense } from 'react';

// Dynamic import with React.lazy
const ChartComponent = lazy(() => import('@/components/ChartComponent'));
const WeatherWidget = lazy(() => import('@/components/WeatherWidget'));

// Custom loading components
const ChartFallback = () => (
  <div className="loading-state">Loading chart...</div>
);

// Component usage with Suspense
function MyPage() {
  const [showChart, setShowChart] = useState(false);
  
  return (
    <div>
      <button onClick={() => setShowChart(true)}>
        Load Chart
      </button>
      
      {showChart && (
        <Suspense fallback={<ChartFallback />}>
          <ChartComponent />
        </Suspense>
      )}
    </div>
  );
}`}
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Suspense Boundaries</h3>
            <div className="bg-gray-100 p-4 rounded-md overflow-auto">
              <pre className="whitespace-pre-wrap text-sm">
                {`// Nested Suspense boundaries for granular loading states
import { Suspense, lazy } from 'react';

const Header = lazy(() => import('./Header'));
const MainContent = lazy(() => import('./MainContent'));
const Sidebar = lazy(() => import('./Sidebar'));
const Footer = lazy(() => import('./Footer'));

function MyApp() {
  return (
    <div className="app-container">
      {/* Each component can load independently */}
      <Suspense fallback={<div>Loading header...</div>}>
        <Header />
      </Suspense>
      
      <div className="content-area">
        <Suspense fallback={<div>Loading main content...</div>}>
          <MainContent />
        </Suspense>
        
        <Suspense fallback={<div>Loading sidebar...</div>}>
          <Sidebar />
        </Suspense>
      </div>
      
      <Suspense fallback={<div>Loading footer...</div>}>
        <Footer />
      </Suspense>
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
