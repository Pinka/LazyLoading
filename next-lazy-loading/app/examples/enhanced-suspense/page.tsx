import ExampleLayout from "@/components/ExampleLayout";
import CodeDemo from "./CodeDemo";

export default function EnhancedSuspensePage() {
  return (
    <ExampleLayout
      title="Enhanced Suspense"
      description="React 19 enhances the Suspense component with better error handling and more control over fallback states."
    >
      <div className="feature-section">
        <h2>Live Demo</h2>
        <CodeDemo />
      </div>

      <div className="feature-section">
        <h2>Implementation Details</h2>

        <p className="mb-4">
          This example demonstrates how to use React 19's enhanced Suspense
          features:
        </p>

        <ul className="list-disc ml-6 mb-4">
          <li>
            <code>fallbackMinimumTime</code>: Prevents "flash of loading state"
            for fast-loading components by ensuring the fallback is shown for at
            least this duration
          </li>
          <li>
            <code>onError</code>: Built-in callback for error handling with
            detailed error information, reducing the need for error boundaries
            in some cases
          </li>
          <li>
            Improved performance with automatic batching and concurrent
            rendering
          </li>
        </ul>

        <p>
          The demo lazy loads a component that simulates data fetching,
          demonstrating how to properly handle loading states and errors using
          React 19's improved Suspense API.
        </p>
      </div>

      <div className="feature-section">
        <h2>Code Explanation</h2>

        <pre>
          {`// App component with lazy loading using React 19
import React, { Suspense, lazy, useState } from 'react';

// Lazy load component
const LazyComponent = lazy(() => import('./components/LazyComponent'));

// Error logging function
const logError = (error) => {
  console.error('Component failed to load:', error);
  // In production, you might send this to an error tracking service
};

function App() {
  const [showLazyComponent, setShowLazyComponent] = useState(false);
  
  return (
    <div className="App">
      <h1>Enhanced Suspense Example</h1>
      
      <button 
        onClick={() => setShowLazyComponent(true)}
        disabled={showLazyComponent}
      >
        Load Component
      </button>
      
      {showLazyComponent && (
        <Suspense 
          fallback={<div className="loading-indicator">Loading...</div>}
          fallbackMinimumTime={500} // React 19: Ensures fallback is shown for at least 500ms
          onError={(error) => logError(error)} // React 19: Direct error handling in Suspense
        >
          <LazyComponent />
        </Suspense>
      )}
    </div>
  );
}`}
        </pre>
      </div>
    </ExampleLayout>
  );
}
