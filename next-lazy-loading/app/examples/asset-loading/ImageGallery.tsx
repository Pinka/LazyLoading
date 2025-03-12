"use client";

import React from "react";
import Image from "next/image";

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
            quality={90}
          />
        </div>
        <p className="caption text-center mt-2">{featuredImage.caption}</p>
      </div>

      {/* Gallery grid with lazy-loaded images */}
      <div className="gallery-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {galleryImages.map((image) => (
          <div key={image.id} className="gallery-item">
            <div className="relative w-full h-[200px]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                loading="lazy" // Only loads when near viewport
                className="object-cover rounded-lg"
                quality={75}
              />
            </div>
            <p className="caption text-center mt-2">{image.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
