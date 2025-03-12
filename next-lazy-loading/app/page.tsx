import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl font-bold mb-6">
        React 19 & Next.js 15 Lazy Loading Techniques
      </h1>

      <div className="mb-8">
        <p className="text-lg mb-4">
          Welcome to the interactive presentation on lazy loading techniques in
          modern web development. This site features real-world examples of
          various lazy loading strategies implemented using Next.js 15 and React
          19.
        </p>
        <p className="mb-4">
          Each example is implemented with actual React code that you can run,
          modify, and use in your own projects, showcasing the latest features
          and best practices available in React 19 and Next.js 15.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="feature-section">
          <h2>What is Lazy Loading?</h2>
          <p>
            Lazy loading is a design pattern that defers the loading of
            resources until they are actually needed, improving initial load
            performance and saving bandwidth. React 19 and Next.js 15 provide
            enhanced tools to implement lazy loading more effectively.
          </p>
        </div>

        <div className="feature-section">
          <h2>Benefits</h2>
          <ul className="list-disc ml-5 space-y-1">
            <li>Faster initial page load</li>
            <li>Reduced resource usage</li>
            <li>Better user experience</li>
            <li>Improved performance metrics</li>
            <li>Enhanced Core Web Vitals scores</li>
          </ul>
        </div>
      </div>

      <div className="p-4 bg-blue-50 text-blue-800 rounded-lg mb-8">
        <h2 className="font-semibold mb-2">
          React 19 & Next.js 15 Improvements
        </h2>
        <ul className="list-disc ml-5 space-y-1">
          <li>Enhanced Suspense API with better fallback control</li>
          <li>Improved Server Components with better interoperability</li>
          <li>Advanced image optimization with better format selection</li>
          <li>More efficient streaming with progressive enhancement</li>
          <li>Simplified code splitting with optimized bundle delivery</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Example Implementations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link
          href="/examples/enhanced-suspense"
          className="feature-section hover:shadow-lg transition-shadow"
        >
          <h2>React Suspense</h2>
          <p>
            Using React Suspense for component-level lazy loading with improved
            error handling and fallback controls.
          </p>
        </Link>

        <Link
          href="/examples/nested-suspense"
          className="feature-section hover:shadow-lg transition-shadow"
        >
          <h2>Nested Suspense Boundaries</h2>
          <p>
            Creating multiple loading zones with prioritized content display for
            better perceived performance.
          </p>
        </Link>

        <Link
          href="/examples/server-components"
          className="feature-section hover:shadow-lg transition-shadow"
        >
          <h2>Server Components</h2>
          <p>
            Using React 19 Server Components to reduce client-side JavaScript
            and improve performance with enhanced server-client
            interoperability.
          </p>
        </Link>

        <Link
          href="/examples/asset-loading"
          className="feature-section hover:shadow-lg transition-shadow"
        >
          <h2>Asset Loading Optimization</h2>
          <p>
            Optimizing image and other asset loading using Next.js 15's advanced
            image handling with improved format selection and quality controls.
          </p>
        </Link>

        <Link
          href="/examples/streaming-ssr"
          className="feature-section hover:shadow-lg transition-shadow"
        >
          <h2>Streaming SSR</h2>
          <p>
            Progressive page loading with enhanced streaming Server-Side
            Rendering for improved user experience and better performance
            metrics.
          </p>
        </Link>

        <Link
          href="/examples/code-splitting"
          className="feature-section hover:shadow-lg transition-shadow"
        >
          <h2>Code Splitting</h2>
          <p>
            Modern code splitting techniques with React 19's optimized bundle
            delivery and improved chunk management.
          </p>
        </Link>
      </div>
    </main>
  );
}
