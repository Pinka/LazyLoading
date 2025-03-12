import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-12 pb-6 border-b border-gray-200">
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

      <div className="mb-12 p-6 bg-gray-50 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold mb-6 text-blue-600 border-b-2 border-blue-600 pb-2">
          Component Lazy Loading
        </h2>
        <ul className="space-y-4">
          <li className="p-4 bg-white rounded-lg shadow-sm hover:translate-y-[-3px] transition-transform">
            <Link
              href="/examples/lazy-components"
              className="block text-lg font-bold text-gray-800 hover:text-blue-600"
            >
              Lazy Components
            </Link>
            <p className="mt-2 text-gray-600">
              Loading UI components on demand using Next.js dynamic imports for
              true lazy loading. Includes Chart.js, Weather Widget, and Comments
              examples.
            </p>
          </li>
          <li className="p-4 bg-white rounded-lg shadow-sm hover:translate-y-[-3px] transition-transform">
            <Link
              href="/examples/enhanced-suspense"
              className="block text-lg font-bold text-gray-800 hover:text-blue-600"
            >
              React Suspense
            </Link>
            <p className="mt-2 text-gray-600">
              Exploring advanced lazy loading features in React with actual
              React code examples. Includes Suspense, error handling, and code
              splitting ready to use in your projects.
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

      <div className="mb-12 p-6 bg-gray-50 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold mb-6 text-blue-600 border-b-2 border-blue-600 pb-2">
          Advanced Techniques
        </h2>
        <ul className="space-y-4">
          <li className="p-4 bg-white rounded-lg shadow-sm hover:translate-y-[-3px] transition-transform">
            <Link
              href="/examples/server-components"
              className="block text-lg font-bold text-gray-800 hover:text-blue-600"
            >
              Server Components
            </Link>
            <p className="mt-2 text-gray-600">
              Using React Server Components to reduce client-side JavaScript and
              improve performance with server-client interoperability.
            </p>
          </li>
          <li className="p-4 bg-white rounded-lg shadow-sm hover:translate-y-[-3px] transition-transform">
            <Link
              href="/examples/asset-loading"
              className="block text-lg font-bold text-gray-800 hover:text-blue-600"
            >
              Asset Loading Optimization
            </Link>
            <p className="mt-2 text-gray-600">
              Optimizing image and other asset loading using Next.js's advanced
              image handling with improved format selection and quality
              controls.
            </p>
          </li>
          <li className="p-4 bg-white rounded-lg shadow-sm hover:translate-y-[-3px] transition-transform">
            <Link
              href="/examples/streaming-ssr"
              className="block text-lg font-bold text-gray-800 hover:text-blue-600"
            >
              Streaming SSR
            </Link>
            <p className="mt-2 text-gray-600">
              Progressive page loading with streaming Server-Side Rendering for
              improved user experience and better performance metrics.
            </p>
          </li>
        </ul>
      </div>

      <footer className="mt-12 pt-6 border-t border-gray-200 text-center text-gray-600 text-sm">
        <p className="mb-2">
          These examples are part of a presentation on lazy loading techniques
          in web development.
        </p>
        <p>
          Open your browser's developer tools to observe how each lazy loading
          technique works behind the scenes.
        </p>
      </footer>
    </main>
  );
}
