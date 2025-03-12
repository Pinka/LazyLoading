"use client";

import React, { Suspense, lazy, useState } from "react";

// Lazy load components using actual dynamic imports
// Next.js will automatically code-split these into separate chunks
const LazyComponent = lazy(() => import("./LazyComponent"));
const ErrorComponent = lazy(() => import("./ErrorComponent"));

// Error logging function
const logError = (error: Error) => {
  console.error("Component failed to load:", error);
  // In production, you might send this to an error tracking service
};

export default function CodeDemo() {
  const [showLazyComponent, setShowLazyComponent] = useState(false);
  const [errorMode, setErrorMode] = useState(false);

  // Log when buttons are clicked to make it clear in DevTools
  const handleLoadComponent = () => {
    console.log("Loading regular component...");
    setShowLazyComponent(true);
    setErrorMode(false);
  };

  const handleLoadErrorComponent = () => {
    console.log("Loading error component...");
    setShowLazyComponent(true);
    setErrorMode(true);
  };

  const handleReset = () => {
    console.log("Resetting demo...");
    setShowLazyComponent(false);
    setErrorMode(false);
  };

  return (
    <div className="border rounded-lg p-6 bg-white">
      <div className="flex flex-wrap gap-3 mb-6">
        <button
          onClick={handleLoadComponent}
          disabled={showLazyComponent && !errorMode}
          className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
        >
          Load Component
        </button>

        <button
          onClick={handleLoadErrorComponent}
          disabled={showLazyComponent && errorMode}
          className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-500 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
        >
          Load Error Component
        </button>

        <button
          onClick={handleReset}
          className="px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-100 transition-colors"
        >
          Reset
        </button>
      </div>

      {showLazyComponent && (
        <div className="my-4">
          <ErrorBoundary
            fallback={
              <div className="p-4 bg-gray-100 text-gray-800 rounded border border-gray-200">
                <h3 className="font-semibold">Error loading component</h3>
                <p>Check the console for error details</p>
              </div>
            }
          >
            {/* Using standard React Suspense API */}
            <Suspense
              fallback={
                <div className="p-4 border border-gray-200 rounded animate-pulse">
                  <div className="h-5 w-3/4 bg-gray-200 rounded mb-4"></div>
                  <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
                </div>
              }
            >
              {errorMode ? <ErrorComponent /> : <LazyComponent />}
            </Suspense>
          </ErrorBoundary>

          <div className="mt-4 p-3 bg-gray-50 text-gray-700 rounded border border-gray-200 text-sm">
            <p>
              <strong>DevTools Tip:</strong> Open your browser's DevTools (F12)
              to observe:
            </p>
            <ul className="list-disc ml-5 mt-2">
              <li>
                <strong>Network tab:</strong> Watch for JavaScript chunks being
                dynamically loaded
              </li>
              <li>
                <strong>Console:</strong> View the logs as components load
              </li>
              <li>
                <strong>Performance tab:</strong> Record and see the lazy
                loading process
              </li>
            </ul>
          </div>
        </div>
      )}

      <div className="mt-4 text-sm border-t pt-4 border-gray-200">
        <h3 className="font-semibold mb-2">How It Works:</h3>
        <ul className="list-disc ml-5 space-y-1">
          <li>
            Each component lives in a separate file that Next.js automatically
            code-splits
          </li>
          <li>
            Components are loaded only when needed, reducing initial page load
          </li>
          <li>
            <code className="text-xs bg-gray-100 px-1 py-0.5 rounded">
              lazy()
            </code>{" "}
            creates a component that suspends while loading its dynamic import
          </li>
          <li>
            <code className="text-xs bg-gray-100 px-1 py-0.5 rounded">
              Suspense
            </code>{" "}
            displays a fallback while waiting for the lazy component
          </li>
          <li>
            <code className="text-xs bg-gray-100 px-1 py-0.5 rounded">
              ErrorBoundary
            </code>{" "}
            catches errors from failed component loads
          </li>
        </ul>
      </div>
    </div>
  );
}

// Simple error boundary component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; fallback: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    logError(error);
    console.error("Error caught in ErrorBoundary:", errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}
