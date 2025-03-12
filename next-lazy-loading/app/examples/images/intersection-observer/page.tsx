"use client";

import { useEffect, useState, useRef, ReactElement } from "react";
import Link from "next/link";
import ExampleLayout from "@/components/ExampleLayout";

const LazyImage = ({ dataSrc, index }: { dataSrc: string; index: number }) => {
  const [loaded, setLoaded] = useState(false);
  const [imageElement, setImageElement] = useState<ReactElement | null>(null);
  const placeholderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!placeholderRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When placeholder is visible
          if (entry.isIntersecting) {
            // Create new image element (via React state)
            const img = new Image();
            img.src = dataSrc;
            img.alt = "Lazy loaded image";
            img.className = "lazy-image opacity-0";
            img.style.maxWidth = "100%";
            img.style.height = "auto";
            img.style.border = "1px solid #ddd";
            img.style.borderRadius = "4px";
            img.style.padding = "5px";
            img.style.transition = "opacity 0.3s ease";

            // When image is loaded, replace placeholder
            img.onload = () => {
              setImageElement(
                <img
                  src={dataSrc}
                  alt="Lazy loaded image"
                  className="lazy-image opacity-0"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                    padding: "5px",
                    transition: "opacity 0.3s ease",
                  }}
                  onLoad={(e) => {
                    // Fade in the image (using setTimeout to match the HTML version)
                    setTimeout(() => {
                      (e.target as HTMLImageElement).style.opacity = "1";
                    }, 50);
                  }}
                />
              );
              setLoaded(true);
            };

            img.src = dataSrc; // Trigger the load

            // Stop observing this element
            observer.unobserve(entry.target);
          }
        });
      },
      {
        // Start loading when image is 200px away (match HTML version)
        rootMargin: "200px 0px",
        threshold: 0.01,
      }
    );

    // Start observing
    observer.observe(placeholderRef.current);

    // Clean up observer
    return () => {
      if (placeholderRef.current) {
        observer.unobserve(placeholderRef.current);
      }
    };
  }, [dataSrc]);

  return (
    <div className="image-container mb-[1000px] text-center" key={index}>
      <h2 className="text-xl font-medium mb-4">
        Image {index + 1}: Lazy Loading with Intersection Observer
      </h2>
      <p className="mb-4">
        This image {index === 3 ? "is the last one and " : ""}loads only when
        you scroll down near it.
      </p>

      {!loaded ? (
        <div
          ref={placeholderRef}
          className="placeholder bg-gray-100 flex items-center justify-center min-h-[300px] text-gray-600 italic mx-auto max-w-full"
          style={{ maxWidth: "800px" }}
        >
          Loading image...
        </div>
      ) : (
        imageElement
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
            <p className="mb-4">
              Our React implementation maintains the same approach while using
              React's component model:
            </p>
            <div className="bg-gray-100 p-4 rounded-md overflow-auto">
              <pre className="whitespace-pre-wrap text-sm">
                {`// LazyImage component using Intersection Observer
const LazyImage = ({ dataSrc, index }) => {
  const [loaded, setLoaded] = useState(false);
  const [imageElement, setImageElement] = useState(null);
  const placeholderRef = useRef(null);

  useEffect(() => {
    if (!placeholderRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When placeholder is visible
          if (entry.isIntersecting) {
            // Create new image element
            const img = new Image();
            
            // When image is loaded, replace placeholder
            img.onload = () => {
              setImageElement(
                <img 
                  src={dataSrc}
                  alt="Lazy loaded image"
                  className="lazy-image opacity-0"
                  style={{ transition: "opacity 0.3s ease" }}
                  onLoad={(e) => {
                    // Fade in the image
                    setTimeout(() => {
                      e.target.style.opacity = "1";
                    }, 50);
                  }}
                />
              );
              setLoaded(true);
            };

            // Trigger the load
            img.src = dataSrc;
            
            // Stop observing
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "200px 0px", threshold: 0.01 }
    );

    observer.observe(placeholderRef.current);
    return () => observer.disconnect();
  }, [dataSrc]);

  return (
    <div className="image-container">
      {!loaded ? (
        <div ref={placeholderRef} className="placeholder">
          Loading image...
        </div>
      ) : (
        imageElement
      )}
    </div>
  );
}`}
              </pre>
            </div>
          </div>
        </div>
      </section>
    </ExampleLayout>
  );
}
