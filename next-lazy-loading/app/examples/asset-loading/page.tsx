import ExampleLayout from "@/components/ExampleLayout";
import ImageGallery from "./ImageGallery";

export default function AssetLoadingPage() {
  // Example image data
  const images = [
    {
      id: 1,
      src: "https://via.placeholder.com/1200x600",
      width: 1200,
      height: 600,
      alt: "Featured placeholder image",
      caption: "This featured image loads with high priority",
      priority: true,
    },
    {
      id: 2,
      src: "https://via.placeholder.com/300x200?text=Image+2",
      width: 300,
      height: 200,
      alt: "Placeholder image 2",
      caption: "This image loads lazily when near the viewport",
    },
    {
      id: 3,
      src: "https://via.placeholder.com/300x200?text=Image+3",
      width: 300,
      height: 200,
      alt: "Placeholder image 3",
      caption: "This image also loads lazily",
    },
    {
      id: 4,
      src: "https://via.placeholder.com/300x200?text=Image+4",
      width: 300,
      height: 200,
      alt: "Placeholder image 4",
      caption: "Another lazy-loaded image",
    },
    {
      id: 5,
      src: "https://via.placeholder.com/300x200?text=Image+5",
      width: 300,
      height: 200,
      alt: "Placeholder image 5",
      caption: "This image loads when scrolled into view",
    },
    {
      id: 6,
      src: "https://via.placeholder.com/300x200?text=Image+6",
      width: 300,
      height: 200,
      alt: "Placeholder image 6",
      caption: "Another image that loads only when needed",
    },
  ];

  return (
    <ExampleLayout
      title="Asset Loading Optimization"
      description="Next.js 15 and React 19 include enhanced optimizations for loading assets like images, with improved lazy loading capabilities and better performance."
    >
      <div className="feature-section">
        <h2>Image Loading Demo</h2>
        <p className="mb-4">
          This example demonstrates how Next.js 15 optimizes image loading with
          the Image component. The first (featured) image loads immediately with
          high priority, while the other images load lazily as you scroll down
          the page. React 19 and Next.js 15 provide improved performance and
          more efficient resource usage.
        </p>

        <ImageGallery images={images} />
      </div>

      <div className="feature-section">
        <h2>Implementation Details</h2>

        <p className="mb-4">Next.js 15 enhances image optimization with:</p>

        <ul className="list-disc ml-6 mb-4">
          <li>
            <code>priority</code>: Marks an image as high priority, loading it
            immediately
          </li>
          <li>
            <code>loading="lazy"</code>: Defers loading until the image is near
            the viewport
          </li>
          <li>
            Improved automatic format selection (WebP/AVIF/JPEG XL) based on
            browser support
          </li>
          <li>
            Better responsive image handling with the <code>sizes</code>{" "}
            attribute
          </li>
          <li>
            Enhanced Core Web Vitals metrics with reduced Cumulative Layout
            Shift
          </li>
          <li>
            New <code>quality</code> control for fine-tuned image optimization
          </li>
        </ul>

        <p>
          The demo above shows a real implementation of these techniques, with
          the first image loading immediately and the rest loading as they come
          into view, optimizing both performance and user experience.
        </p>
      </div>

      <div className="feature-section">
        <h2>Code Explanation</h2>

        <pre>
          {`// ImageGallery.tsx
'use client';

import React from 'react';
import Image from 'next/image';

interface ImageItem {
  id: number;
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  priority?: boolean;
}

interface ImageGalleryProps {
  images: ImageItem[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  // Featured image is the first image
  const featuredImage = images[0];
  
  // Rest of the gallery images
  const galleryImages = images.slice(1);
  
  return (
    <div className="gallery">
      {/* Hero image loads immediately with high priority */}
      <div className="featured-image mb-6">
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
          <Image 
            src={featuredImage.src}
            alt={featuredImage.alt}
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            priority={featuredImage.priority}
            className="object-cover rounded-lg"
            quality={90} // Next.js 15: Control the quality of the optimized image
          />
        </div>
        <p className="caption text-center mt-2">{featuredImage.caption}</p>
      </div>
      
      {/* Gallery grid with lazy-loaded images */}
      <div className="gallery-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {galleryImages.map(image => (
          <div key={image.id} className="gallery-item">
            <div className="relative w-full h-[200px]">
              <Image 
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                loading="lazy" // Only loads when near viewport
                className="object-cover rounded-lg"
                quality={75} // Lower quality for thumbnails is acceptable
              />
            </div>
            <p className="caption text-center mt-2">{image.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
}`}
        </pre>
      </div>
    </ExampleLayout>
  );
}
