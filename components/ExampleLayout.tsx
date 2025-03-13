import React, { ReactNode } from "react";
import Link from "next/link";

interface ExampleLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
}

export default function ExampleLayout({
  title,
  description,
  children,
}: ExampleLayoutProps) {
  return (
    <div className="example-container">
      <Link href="/" className="text-primary hover:underline mb-4 inline-block">
        ← Back to Home
      </Link>

      <h1 className="text-3xl font-bold mb-2">{title}</h1>

      <div className="explanation mb-6">
        <p>{description}</p>
      </div>

      {children}

      <Link href="/" className="back-link">
        ← Back to Home
      </Link>
    </div>
  );
}
