"use client";

import { useState, useEffect, lazy, Suspense } from "react";
import ExampleLayout from "@/components/ExampleLayout";
import Link from "next/link";

// Lazy-loaded page components
const HomePage = lazy(
  () => import("@/components/examples/code-splitting/HomePage")
);
const AboutPage = lazy(
  () => import("@/components/examples/code-splitting/AboutPage")
);
const ProductsPage = lazy(
  () => import("@/components/examples/code-splitting/ProductsPage")
);
const ContactPage = lazy(
  () => import("@/components/examples/code-splitting/ContactPage")
);

type Route = "home" | "about" | "products" | "contact";

export default function CodeSplittingPage() {
  const [activeRoute, setActiveRoute] = useState<Route>("home");
  const [isLoading, setIsLoading] = useState(false);

  // Handle route changes
  const handleRouteChange = (route: Route) => {
    if (route !== activeRoute) {
      setIsLoading(true);
      // Reset loading state after component is loaded
      // Note: In real use, this would happen automatically with Suspense
      setTimeout(() => setIsLoading(false), 100);
      setActiveRoute(route);
    }
  };

  // Parse hash from URL when component mounts or when URL changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || "/";

      if (hash === "/about") {
        handleRouteChange("about");
      } else if (hash === "/products") {
        handleRouteChange("products");
      } else if (hash === "/contact") {
        handleRouteChange("contact");
      } else {
        handleRouteChange("home");
      }
    };

    // Set initial route based on hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <ExampleLayout
      title="Route-based Lazy Loading"
      description="This example demonstrates route-based lazy loading in a single-page application using React and Next.js"
    >
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">How It Works</h2>
          <p className="mb-4">
            This example demonstrates route-based lazy loading using React in a
            Next.js application. Each "page" of the single-page application is
            loaded only when its route is accessed.
          </p>
          <p className="mb-4">Benefits of route-based lazy loading:</p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">Reduces initial bundle size</li>
            <li className="mb-2">Loads page-specific code only when needed</li>
            <li className="mb-2">
              Improves performance for large applications
            </li>
            <li className="mb-2">
              Better user experience with faster initial load
            </li>
          </ul>
          <p>
            Click the navigation links to load different pages. Open your
            browser's developer tools (Network tab) to observe when each page
            module loads.
          </p>
        </div>

        {/* Navigation */}
        <nav className="bg-gray-800 p-3 rounded-lg shadow-md">
          <div className="flex space-x-2">
            <a
              href="#/"
              className={`text-white px-4 py-2 rounded hover:bg-gray-700 transition ${
                activeRoute === "home" ? "bg-green-600" : ""
              }`}
              onClick={() => handleRouteChange("home")}
            >
              Home
            </a>
            <a
              href="#/about"
              className={`text-white px-4 py-2 rounded hover:bg-gray-700 transition ${
                activeRoute === "about" ? "bg-green-600" : ""
              }`}
              onClick={() => handleRouteChange("about")}
            >
              About
            </a>
            <a
              href="#/products"
              className={`text-white px-4 py-2 rounded hover:bg-gray-700 transition ${
                activeRoute === "products" ? "bg-green-600" : ""
              }`}
              onClick={() => handleRouteChange("products")}
            >
              Products
            </a>
            <a
              href="#/contact"
              className={`text-white px-4 py-2 rounded hover:bg-gray-700 transition ${
                activeRoute === "contact" ? "bg-green-600" : ""
              }`}
              onClick={() => handleRouteChange("contact")}
            >
              Contact
            </a>
          </div>
        </nav>

        {/* Page content */}
        <div className="min-h-[300px] border border-gray-200 rounded-lg p-6 bg-white shadow-md">
          {isLoading ? (
            <div className="flex justify-center items-center h-[200px] text-gray-500 italic">
              Loading...
            </div>
          ) : (
            <Suspense
              fallback={
                <div className="flex justify-center items-center h-[200px] text-gray-500 italic">
                  Loading...
                </div>
              }
            >
              {activeRoute === "home" && <HomePage />}
              {activeRoute === "about" && <AboutPage />}
              {activeRoute === "products" && <ProductsPage />}
              {activeRoute === "contact" && <ContactPage />}
            </Suspense>
          )}
        </div>

        {/* Developer info */}
        <div className="bg-green-50 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2">What to Observe</h2>
          <p className="mb-2">
            In your browser's developer tools (Network tab):
          </p>
          <ul className="list-disc pl-6">
            <li className="mb-2">
              Each page component is loaded only when its route is accessed
            </li>
            <li className="mb-2">
              The initial page load doesn't include all page components
            </li>
            <li className="mb-2">
              Notice the timing of when each module request is made
            </li>
            <li className="mb-2">
              Look for JavaScript chunks being loaded dynamically
            </li>
          </ul>
        </div>

        {/* Code explanation */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">The Code</h2>

          <h3 className="text-xl font-bold mb-2">Lazy-Loaded Components</h3>
          <div className="bg-gray-100 p-4 rounded-md mb-6 overflow-auto">
            <pre className="text-sm">
              {`// Lazy-loaded page components
const HomePage = lazy(() => import("@/components/examples/code-splitting/HomePage"));
const AboutPage = lazy(() => import("@/components/examples/code-splitting/AboutPage"));
const ProductsPage = lazy(() => import("@/components/examples/code-splitting/ProductsPage"));
const ContactPage = lazy(() => import("@/components/examples/code-splitting/ContactPage"));`}
            </pre>
          </div>

          <h3 className="text-xl font-bold mb-2">Route Handling</h3>
          <div className="bg-gray-100 p-4 rounded-md mb-6 overflow-auto">
            <pre className="text-sm">
              {`// Handle route changes with React hooks
useEffect(() => {
  const handleHashChange = () => {
    const hash = window.location.hash.slice(1) || "/";
    
    if (hash === "/about") {
      handleRouteChange("about");
    } else if (hash === "/products") {
      handleRouteChange("products");
    } else if (hash === "/contact") {
      handleRouteChange("contact");
    } else {
      handleRouteChange("home");
    }
  };

  // Set initial route based on hash
  handleHashChange();

  // Listen for hash changes
  window.addEventListener("hashchange", handleHashChange);

  // Cleanup listener on unmount
  return () => {
    window.removeEventListener("hashchange", handleHashChange);
  };
}, []);`}
            </pre>
          </div>

          <h3 className="text-xl font-bold mb-2">
            Component Rendering with Suspense
          </h3>
          <div className="bg-gray-100 p-4 rounded-md overflow-auto">
            <pre className="text-sm">
              {`<Suspense
  fallback={
    <div className="flex justify-center items-center h-[200px] text-gray-500 italic">
      Loading...
    </div>
  }
>
  {activeRoute === "home" && <HomePage />}
  {activeRoute === "about" && <AboutPage />}
  {activeRoute === "products" && <ProductsPage />}
  {activeRoute === "contact" && <ContactPage />}
</Suspense>`}
            </pre>
          </div>
        </div>

        <div className="mt-8">
          <Link href="/" className="text-blue-600 hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    </ExampleLayout>
  );
}
