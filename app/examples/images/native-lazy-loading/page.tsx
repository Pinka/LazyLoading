import ExampleLayout from "@/components/ExampleLayout";
import Link from "next/link";

export const metadata = {
  title: "Native Image Lazy Loading | Next.js Lazy Loading",
  description: "Learn how to use native lazy loading for images in Next.js",
};

export default function NativeLazyLoadingPage() {
  return (
    <ExampleLayout
      title="Native Image Lazy Loading"
      description="This example demonstrates the native loading='lazy' attribute in HTML. Images with this attribute will only load when they are about to enter the viewport."
    >
      <div>
        <section className="bg-gray-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
          <h2 className="text-xl font-medium text-gray-800 mb-2">
            How It Works
          </h2>
          <p className="mb-2">
            Modern browsers support the{" "}
            <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">
              loading="lazy"
            </code>{" "}
            attribute which defers loading of images until they're about to
            enter the viewport.
          </p>
          <p>
            Scroll down to see the lazy-loaded images. Open your browser's
            developer tools (Network tab) to observe when each image loads.
          </p>
        </section>

        {/* Image 1: Eager Loading (Default) */}
        <section className="mb-[800px] text-center">
          <h2 className="text-xl font-medium text-gray-800 mb-4">
            Image 1: Eager Loading (Default)
          </h2>
          <p className="mb-4 text-gray-600">
            This image loads immediately when the page loads.
          </p>
          <div className="flex justify-center">
            <img
              src="https://picsum.photos/id/1/800/450"
              alt="Eager loaded image"
              loading="eager"
              className="max-w-full h-auto border border-gray-200 rounded-lg p-1"
            />
          </div>
          <p className="mt-4 bg-gray-100 p-2 rounded text-sm font-mono inline-block">
            &lt;img src="image.jpg" alt="Eager loaded image" loading="eager"&gt;
          </p>
        </section>

        {/* Image 2: Lazy Loading */}
        <section className="mb-[800px] text-center">
          <h2 className="text-xl font-medium text-gray-800 mb-4">
            Image 2: Lazy Loading
          </h2>
          <p className="mb-4 text-gray-600">
            This image loads only when you scroll down near it.
          </p>
          <div className="flex justify-center">
            <img
              src="https://picsum.photos/id/10/800/450"
              alt="Lazy loaded image"
              loading="lazy"
              className="max-w-full h-auto border border-gray-200 rounded-lg p-1"
            />
          </div>
          <p className="mt-4 bg-gray-100 p-2 rounded text-sm font-mono inline-block">
            &lt;img src="image.jpg" alt="Lazy loaded image" loading="lazy"&gt;
          </p>
        </section>

        {/* Image 3: Lazy Loading */}
        <section className="mb-[800px] text-center">
          <h2 className="text-xl font-medium text-gray-800 mb-4">
            Image 3: Lazy Loading
          </h2>
          <p className="mb-4 text-gray-600">
            This image also loads only when you scroll down near it.
          </p>
          <div className="flex justify-center">
            <img
              src="https://picsum.photos/id/100/800/450"
              alt="Another lazy loaded image"
              loading="lazy"
              className="max-w-full h-auto border border-gray-200 rounded-lg p-1"
            />
          </div>
          <p className="mt-4 bg-gray-100 p-2 rounded text-sm font-mono inline-block">
            &lt;img src="image.jpg" alt="Another lazy loaded image"
            loading="lazy"&gt;
          </p>
        </section>

        {/* Image 4: Lazy Loading */}
        <section className="mb-[200px] text-center">
          <h2 className="text-xl font-medium text-gray-800 mb-4">
            Image 4: Lazy Loading
          </h2>
          <p className="mb-4 text-gray-600">
            This is the last lazy-loaded image in our example.
          </p>
          <div className="flex justify-center">
            <img
              src="https://picsum.photos/id/1000/800/450"
              alt="Final lazy loaded image"
              loading="lazy"
              className="max-w-full h-auto border border-gray-200 rounded-lg p-1"
            />
          </div>
          <p className="mt-4 bg-gray-100 p-2 rounded text-sm font-mono inline-block">
            &lt;img src="image.jpg" alt="Final lazy loaded image"
            loading="lazy"&gt;
          </p>
        </section>

        <section className="bg-green-50 p-4 rounded-lg border border-green-200">
          <h2 className="text-xl font-medium text-gray-800 mb-2">
            What to Observe
          </h2>
          <p className="mb-2">
            In your browser's developer tools (Network tab):
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              The first image (eager) should load immediately when the page
              loads
            </li>
            <li>
              The other images should only load when you scroll down close to
              them
            </li>
            <li>Notice the timing of when each request is made</li>
          </ul>
        </section>
      </div>
    </ExampleLayout>
  );
}
