"use client";

import { useEffect } from "react";

// This component will deliberately throw an error when loaded
export default function ErrorComponent() {
  useEffect(() => {
    // Log that this component was loaded before throwing the error
    console.log("Error component loaded - will throw error");
  }, []);

  // Deliberately throw an error to demonstrate error boundary handling with lazy-loaded components.
  throw new Error(
    "This is a deliberate error to demonstrate error boundary handling with lazy-loaded components."
  );

  // This code is unreachable but TypeScript might expect a return
  return null;
}
