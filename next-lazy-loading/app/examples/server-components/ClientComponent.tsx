"use client";

import React, { useState } from "react";

export function ClientComponent() {
  const [showThankYou, setShowThankYou] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowThankYou(true);
  };

  return (
    <div className="newsletter-signup">
      {showThankYou ? (
        <div className="bg-green-50 p-4 rounded text-green-800">
          <h3 className="font-semibold">Thanks for subscribing!</h3>
          <p>We've sent a confirmation to {email}</p>
          <button
            onClick={() => {
              setShowThankYou(false);
              setEmail("");
            }}
            className="mt-2 text-sm text-green-700 underline"
          >
            Subscribe another email
          </button>
        </div>
      ) : (
        <>
          <h3 className="text-lg font-semibold mb-2">
            Subscribe to our newsletter
          </h3>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-3 py-2 border rounded"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-white rounded hover:bg-blue-600"
            >
              Subscribe
            </button>
          </form>
        </>
      )}
    </div>
  );
}
