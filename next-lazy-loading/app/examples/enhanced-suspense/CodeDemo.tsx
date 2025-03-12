"use client";

import React, { Suspense, lazy, useState } from "react";

// Lazy load component with a 1-second delay to simulate network latency
const LazyComponent = lazy(
  () =>
    new Promise<{ default: React.ComponentType }>((resolve) => {
      setTimeout(() => {
        resolve({
          default: () => (
            <div className="p-4 bg-white rounded shadow">
              <h3 className="text-xl font-semibold mb-2">
                Lazy Loaded Component
              </h3>
              <p className="mb-2">This component was loaded on demand!</p>
              <p className="text-sm text-gray-600">
                Successfully loaded at: {new Date().toLocaleTimeString()}
              </p>
            </div>
          ),
        });
      }, 1000);
    })
);

// Error logging function
const logError = (error: Error) => {
  console.error("Component failed to load:", error);
  // In production, you might send this to an error tracking service
};

export default function CodeDemo() {
  const [showLazyComponent, setShowLazyComponent] = useState(false);
  const [errorMode, setErrorMode] = useState(false);

  // Simulate a component that will fail to load
  const ErrorComponent = lazy(
    () =>
      new Promise<{ default: React.ComponentType }>((_, reject) => {
        setTimeout(() => {
          reject(new Error("Failed to load component"));
        }, 1000);
      })
  );

  return (
    <div className="border rounded-lg p-6 bg-gray-50">
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => {
            setShowLazyComponent(true);
            setErrorMode(false);
          }}
          disabled={showLazyComponent && !errorMode}
          className="px-4 py-2 bg-primary text-white rounded hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Load Component
        </button>

        <button
          onClick={() => {
            setShowLazyComponent(true);
            setErrorMode(true);
          }}
          disabled={showLazyComponent && errorMode}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Load Component (Error Mode)
        </button>

        <button
          onClick={() => setShowLazyComponent(false)}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Reset
        </button>
      </div>

      {showLazyComponent && (
        <div className="my-4">
          <ErrorBoundary
            fallback={
              <div className="p-4 bg-red-100 text-red-800 rounded">
                Error loading component
              </div>
            }
          >
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

          <div className="mt-4 p-3 bg-blue-50 text-blue-700 rounded text-sm">
            <p>
              <strong>Note:</strong> In an actual React 19 implementation,
              Suspense supports additional props:
            </p>
            <pre className="mt-2 text-xs overflow-x-auto bg-blue-100 p-2 rounded">
              {`<Suspense 
  fallback={<Loading />}
  fallbackMinimumTime={500} 
  onError={(error) => handleError(error)}
>
  <LazyComponent />
</Suspense>`}
            </pre>
          </div>
        </div>
      )}

      <div className="mt-4 text-sm">
        <h3 className="font-semibold mb-1">How it works:</h3>
        <ul className="list-disc ml-5">
          <li>
            The "Load Component" button triggers lazy loading of a component
          </li>
          <li>
            The "Error Mode" button demonstrates error handling for failed loads
          </li>
          <li>
            Loading state is shown with a skeleton UI during the 1-second delay
          </li>
          <li>
            React 19's enhanced Suspense includes fallbackMinimumTime to prevent
            flashing
          </li>
          <li>
            Built-in error handling with onError callback captures loading
            errors
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
