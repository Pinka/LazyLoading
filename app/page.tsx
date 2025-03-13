import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-12 pb-6 border-b border-gray-200">
        <h1 className="text-4xl font-bold mb-4">Lazy Loading Techniques</h1>
        <p className="text-xl text-gray-600">
          A collection of practical examples demonstrating various lazy loading
          techniques in web development.
        </p>
      </div>

      <div className="mb-12 p-6 bg-gray-50 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold mb-6 text-blue-600 border-b-2 border-blue-600 pb-2">
          Image Lazy Loading
        </h2>
        <ul className="space-y-4">
          <li className="p-4 bg-white rounded-lg shadow-sm hover:translate-y-[-3px] transition-transform">
            <Link
              href="/examples/images/native-lazy-loading"
              className="block text-lg font-bold text-gray-800 hover:text-blue-600"
            >
              Native Lazy Loading
            </Link>
            <p className="mt-2 text-gray-600">
              Using the native{" "}
              <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
                loading="lazy"
              </code>{" "}
              attribute to defer loading of images until they are near the
              viewport.
            </p>
          </li>
          <li className="p-4 bg-white rounded-lg shadow-sm hover:translate-y-[-3px] transition-transform">
            <Link
              href="/examples/images/intersection-observer"
              className="block text-lg font-bold text-gray-800 hover:text-blue-600"
            >
              Intersection Observer API
            </Link>
            <p className="mt-2 text-gray-600">
              Using the Intersection Observer API to implement custom lazy
              loading behavior for images.
            </p>
          </li>
        </ul>
      </div>

      <div className="mb-12 p-6 bg-gray-50 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-blue-600 border-b-2 border-blue-600 pb-2">
          Component Lazy Loading
        </h2>
        <ul className="space-y-4">
          <li className="p-4 bg-white rounded-lg shadow-sm hover:translate-y-[-3px] transition-transform">
            <Link
              href="/examples/lazy-components"
              className="block text-lg font-bold text-gray-800 hover:text-blue-600"
            >
              Next.js Dynamic Imports
            </Link>
            <p className="mt-2 text-gray-600">
              Loading UI components on demand using Next.js dynamic imports for
              true lazy loading. Includes Chart.js, Weather Widget, and Comments
              examples.
            </p>
          </li>
          <li className="p-4 bg-white rounded-lg shadow-sm hover:translate-y-[-3px] transition-transform">
            <Link
              href="/examples/react-suspense"
              className="block text-lg font-bold text-gray-800 hover:text-blue-600"
            >
              React Suspense
            </Link>
            <p className="mt-2 text-gray-600">
              Lazy loading components with React's built-in Suspense and lazy
              features. Demonstrates fallback UI, loading states, and code
              splitting using the Suspense boundary pattern.
            </p>
          </li>
        </ul>
      </div>

      <div className="mb-12 p-6 bg-gray-50 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold mb-6 text-blue-600 border-b-2 border-blue-600 pb-2">
          Route-based Lazy Loading
        </h2>
        <ul className="space-y-4">
          <li className="p-4 bg-white rounded-lg shadow-sm hover:translate-y-[-3px] transition-transform">
            <Link
              href="/examples/code-splitting"
              className="block text-lg font-bold text-gray-800 hover:text-blue-600"
            >
              SPA Route Lazy Loading
            </Link>
            <p className="mt-2 text-gray-600">
              Implementing route-based code splitting in a single-page
              application to load page modules on demand.
            </p>
          </li>
        </ul>
      </div>

      <div className="mb-12 p-6 bg-gray-50 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold mb-6 text-blue-600 border-b-2 border-blue-600 pb-2">
          Data Lazy Loading
        </h2>
        <ul className="space-y-4">
          <li className="p-4 bg-white rounded-lg shadow-sm hover:translate-y-[-3px] transition-transform">
            <Link
              href="/examples/data/infinite-scroll"
              className="block text-lg font-bold text-gray-800 hover:text-blue-600"
            >
              Infinite Scroll
            </Link>
            <p className="mt-2 text-gray-600">
              Loading data incrementally as the user scrolls down the page,
              providing a seamless browsing experience.
            </p>
          </li>
        </ul>
      </div>

      <footer className="mb-12 p-5 bg-blue-50 rounded-lg border border-blue-100">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Further Learning Resources
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-3 rounded shadow-sm">
            <h3 className="text-md font-bold text-blue-700 border-b border-gray-200 pb-1 mb-2">
              Image Lazy Loading
            </h3>
            <ul className="text-sm space-y-1">
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline flex items-center"
                >
                  <span className="mr-1">•</span> MDN Web Docs: Lazy Loading
                </a>
              </li>
              <li>
                <a
                  href="https://web.dev/articles/browser-level-image-lazy-loading"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline flex items-center"
                >
                  <span className="mr-1">•</span> Browser-level Image Lazy
                  Loading
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline flex items-center"
                >
                  <span className="mr-1">•</span> Intersection Observer API
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-white p-3 rounded shadow-sm">
            <h3 className="text-md font-bold text-blue-700 border-b border-gray-200 pb-1 mb-2">
              Component Lazy Loading
            </h3>
            <ul className="text-sm space-y-1">
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline flex items-center"
                >
                  <span className="mr-1">•</span> JavaScript Dynamic Imports
                </a>
              </li>
              <li>
                <a
                  href="https://nextjs.org/docs/advanced-features/dynamic-import"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline flex items-center"
                >
                  <span className="mr-1">•</span> Next.js: Dynamic Import
                </a>
              </li>
              <li>
                <a
                  href="https://react.dev/reference/react/Suspense"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline flex items-center"
                >
                  <span className="mr-1">•</span> React: Suspense
                </a>
              </li>
              <li>
                <a
                  href="https://react.dev/reference/react/lazy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline flex items-center"
                >
                  <span className="mr-1">•</span> React: lazy
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-white p-3 rounded shadow-sm">
            <h3 className="text-md font-bold text-blue-700 border-b border-gray-200 pb-1 mb-2">
              Route-based Lazy Loading
            </h3>
            <ul className="text-sm space-y-1">
              <li>
                <a
                  href="https://web.dev/articles/code-splitting-suspense"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline flex items-center"
                >
                  <span className="mr-1">•</span> Code-splitting with React.lazy
                  and Suspense
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Glossary/Code_splitting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline flex items-center"
                >
                  <span className="mr-1">•</span> MDN: Code Splitting
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-white p-3 rounded shadow-sm">
            <h3 className="text-md font-bold text-blue-700 border-b border-gray-200 pb-1 mb-2">
              Data Lazy Loading
            </h3>
            <ul className="text-sm space-y-1">
              <li>
                <a
                  href="https://web.dev/articles/virtualize-long-lists-react-window"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline flex items-center"
                >
                  <span className="mr-1">•</span> Virtualize Large Lists with
                  react-window
                </a>
              </li>
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API/Using_the_Intersection_Observer_API"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline flex items-center"
                >
                  <span className="mr-1">•</span> Using Intersection Observer
                  for Infinite Scroll
                </a>
              </li>
              <li>
                <a
                  href="https://web.dev/articles/infinite-scroll"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline flex items-center"
                >
                  <span className="mr-1">•</span> Infinite Scroll without Layout
                  Shifts
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
}
