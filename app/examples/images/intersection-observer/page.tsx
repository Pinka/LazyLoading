"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import ExampleLayout from "@/components/ExampleLayout";

// Simplified LazyImage component
const LazyImage = ({ dataSrc, index }: { dataSrc: string; index: number }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const placeholderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!placeholderRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Start loading the image when visible
          setIsLoaded(true);
          // Stop observing once triggered
          observer.unobserve(placeholderRef.current!);
        }
      },
      { rootMargin: "200px 0px", threshold: 0.01 }
    );

    observer.observe(placeholderRef.current);

    // Clean up
    return () => observer.disconnect();
  }, []);

  return (
    <div className="image-container mb-[1000px] text-center">
      <h2 className="text-xl font-medium mb-4">
        Image {index + 2}: Lazy Loading with Intersection Observer
      </h2>
      <p className="mb-4">
        This image {index === 2 ? "is the last one and " : ""}loads only when
        you scroll down near it.
      </p>

      {!isLoaded ? (
        <div
          ref={placeholderRef}
          className="placeholder bg-gray-100 flex items-center justify-center min-h-[300px] text-gray-600 italic mx-auto"
          style={{ maxWidth: "800px" }}
        >
          Loading image...
        </div>
      ) : (
        <img
          src={dataSrc}
          alt="Lazy loaded image"
          className="lazy-image max-w-full mx-auto transition-opacity duration-300 opacity-0"
          style={{
            maxWidth: "800px",
            border: "1px solid #ddd",
            borderRadius: "4px",
            padding: "5px",
          }}
          onLoad={(e) => {
            (e.target as HTMLImageElement).classList.remove("opacity-0");
            (e.target as HTMLImageElement).classList.add("opacity-100");
          }}
        />
      )}
    </div>
  );
};

export default function IntersectionObserverLazyLoadingPage() {
  const imageUrls = [
    "https://picsum.photos/id/10/800/450",
    "https://picsum.photos/id/100/800/450",
    "https://picsum.photos/id/1000/800/450",
  ];

  return (
    <ExampleLayout
      title="Lazy Loading with Intersection Observer API"
      description="This example demonstrates how to implement lazy loading for images using the Intersection Observer API"
    >
      <section>
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h1 className="text-2xl font-bold mb-4">
            Intersection Observer for Lazy Loading
          </h1>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">How It Works</h2>
            <p className="mb-4">
              The Intersection Observer API provides a way to observe when an
              element enters or exits the viewport. This makes it perfect for
              implementing lazy loading of images without affecting the main
              thread performance.
            </p>
            <p className="mb-4">
              In this example, we use a placeholder div that gets replaced with
              the actual image once it comes into view. The observer starts
              loading the image when the user scrolls within 200px of the
              placeholder.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Benefits</h2>
            <ul className="list-disc pl-5">
              <li className="mb-2">Reduced initial page load times</li>
              <li className="mb-2">
                Lower bandwidth usage for users who don't scroll to all images
              </li>
              <li className="mb-2">
                Better performance than scroll event listeners
              </li>
              <li className="mb-2">Works with dynamically added content</li>
              <li className="mb-2">
                Allows for custom loading thresholds (load before visible)
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Browser Support</h2>
            <p>
              Intersection Observer is supported in all modern browsers. For
              older browsers, a polyfill is available.
            </p>
            <p className="mt-2">
              <Link
                href="https://caniuse.com/intersectionobserver"
                className="text-blue-600 hover:underline"
                target="_blank"
              >
                Check browser support on caniuse.com
              </Link>
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">
              Scroll Down to See It in Action
            </h2>
            <p className="text-gray-600 italic">
              Scroll down to see each image load as it enters the viewport. Open
              your browser's Developer Tools (Network tab) to observe the images
              loading on-demand.
            </p>
          </div>

          <div className="mb-8 bg-green-50 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">What to Observe</h2>
            <p className="mb-2">
              In your browser's developer tools (Network tab):
            </p>
            <ul className="list-disc pl-6">
              <li className="mb-1">
                The first image should load immediately when the page loads
              </li>
              <li className="mb-1">
                The other images should only load when you scroll down close to
                them
              </li>
              <li className="mb-1">
                Notice the timing of when each request is made
              </li>
              <li className="mb-1">
                Observe the placeholder being replaced with the actual image
              </li>
            </ul>
          </div>
        </div>

        {/* Eager loaded image (loads immediately) */}
        <div className="image-container mb-[1000px] text-center">
          <h2 className="text-xl font-medium mb-4">Image 1: Eager Loading</h2>
          <p className="mb-4">
            This image loads immediately when the page loads.
          </p>
          <img
            src="https://picsum.photos/id/1/800/450"
            alt="Eager loaded image"
            className="lazy-image max-w-full mx-auto"
            style={{
              height: "auto",
              border: "1px solid #ddd",
              borderRadius: "4px",
              padding: "5px",
            }}
          />
        </div>

        {/* Example lazy-loaded images */}
        <div className="mb-16">
          {imageUrls.map((url, index) => (
            <LazyImage key={index} dataSrc={url} index={index} />
          ))}
        </div>

        {/* Code examples moved to the bottom */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold mb-6">Code Implementation</h2>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">
              Observer Code Implementation
            </h3>
            <div className="bg-gray-100 p-4 rounded-md overflow-auto">
              <pre className="whitespace-pre-wrap text-sm">
                {`// Create new IntersectionObserver
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    // When element is visible
    if (entry.isIntersecting) {
      const placeholder = entry.target;
      const imageUrl = placeholder.getAttribute('data-src');
      
      // Create new image
      const img = new Image();
      
      // When image is loaded, replace placeholder
      img.onload = () => {
        placeholder.parentNode.replaceChild(img, placeholder);
        img.classList.add('fade-in');
      };
      
      // Set the source to start loading
      img.src = imageUrl;
      
      // Stop observing this element
      observer.unobserve(placeholder);
    }
  });
}, {
  // Start loading when image is 200px away
  rootMargin: '200px 0px',
  threshold: 0.01
});

// Start observing all placeholders
document.querySelectorAll('.placeholder').forEach(placeholder => {
  observer.observe(placeholder);
});`}
              </pre>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">React Implementation</h3>
            <p className="mb-4">Our simplified React implementation:</p>
            <div className="bg-gray-100 p-4 rounded-md overflow-auto">
              <pre className="whitespace-pre-wrap text-sm">
                {`// Simple LazyImage component
const LazyImage = ({ src, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const placeholderRef = useRef(null);

  useEffect(() => {
    if (!placeholderRef.current) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Start loading the image when visible
          setIsLoaded(true);
          // Stop observing once triggered
          observer.unobserve(placeholderRef.current);
        }
      },
      { rootMargin: "200px 0px", threshold: 0.01 }
    );

    observer.observe(placeholderRef.current);
    
    // Clean up
    return () => observer.disconnect();
  }, []);

  return (
    <div className="image-container">
      {!isLoaded ? (
        <div ref={placeholderRef} className="placeholder">
          Loading image...
        </div>
      ) : (
        <img 
          src={src}
          alt={alt}
          className="lazy-image transition-opacity duration-300 opacity-0"
          onLoad={(e) => {
            e.target.classList.remove("opacity-0");
            e.target.classList.add("opacity-100");
          }}
        />
      )}
    </div>
  );
};

// Usage
<LazyImage src="/image.jpg" alt="Description" />`}
              </pre>
            </div>
          </div>
        </div>
      </section>
    </ExampleLayout>
  );
}
