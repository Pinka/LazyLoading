import ExampleLayout from "@/components/ExampleLayout";
import { ServerComponent } from "./ServerComponent";
import { ClientComponent } from "./ClientComponent";

export default function ServerComponentsPage() {
  return (
    <ExampleLayout
      title="Server Components"
      description="React 19 and Next.js 15 enhance Server Components, which run exclusively on the server and send only the rendered HTML to the client, reducing JavaScript bundle size."
    >
      <div className="feature-section">
        <h2>Live Demo</h2>
        <p className="mb-4">
          The component below is a React Server Component. It fetches data on
          the server and renders HTML without sending any JavaScript to the
          client. The interactive subscribe form below it is a Client Component
          that includes JavaScript. React 19 improves Server Components with
          better interoperability between server and client components.
        </p>

        <div className="border rounded-lg overflow-hidden">
          <div className="bg-gray-100 p-4 border-b">
            <strong>Server Component</strong> (Zero JavaScript)
          </div>
          <div className="p-6">
            <ServerComponent />
          </div>
        </div>

        <div className="border rounded-lg overflow-hidden mt-6">
          <div className="bg-gray-100 p-4 border-b">
            <strong>Client Component</strong> (Includes JavaScript)
          </div>
          <div className="p-6">
            <ClientComponent />
          </div>
        </div>
      </div>

      <div className="feature-section">
        <h2>Implementation Details</h2>

        <p className="mb-4">
          React 19 and Next.js 15 improve Server Components with:
        </p>

        <ul className="list-disc ml-6 mb-4">
          <li>Better performance with optimized server rendering</li>
          <li>
            Improved streaming capabilities for faster time-to-interactive
          </li>
          <li>
            Enhanced data fetching patterns with async/await directly in
            components
          </li>
          <li>Seamless integration between server and client components</li>
          <li>More reliable hydration with reduced client-side JavaScript</li>
        </ul>

        <p>
          This example shows a Server Component fetching data and rendering
          articles, combined with a Client Component that provides client-side
          interactivity - demonstrating how to effectively use both patterns
          together.
        </p>
      </div>

      <div className="feature-section">
        <h2>Code Explanation</h2>

        <h3 className="text-lg font-semibold mt-4 mb-2">Server Component</h3>
        <pre>
          {`// ServerComponent.tsx - This component never gets sent to the client as JS
// Note the absence of 'use client' directive

// Using React 19's improved async component pattern
export async function ServerComponent() {
  // Data fetching happens on the server
  const articles = await getArticles();
  
  return (
    <div className="server-rendered">
      <h2 className="text-xl font-semibold mb-4">Latest Articles</h2>
      <div className="grid gap-4">
        {articles.map(article => (
          <div key={article.id} className="article-card p-4 border rounded">
            <h3 className="text-lg font-medium">{article.title}</h3>
            <p>{article.excerpt}</p>
            <div className="text-sm text-gray-600 mt-2">
              <span>By {article.author.name}</span>
              <span className="mx-2">•</span>
              <span>{new Date(article.createdAt).toLocaleDateString()}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// This data fetching happens on the server
async function getArticles() {
  // In a real app, this would be a database query
  await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
  
  return [
    { id: 1, title: 'Understanding Lazy Loading', excerpt: 'Learn about lazy loading techniques...', author: { name: 'Jane Doe' }, createdAt: '2023-05-15T10:30:00Z' },
    { id: 2, title: 'React Performance Tips', excerpt: 'Optimize your React applications...', author: { name: 'John Smith' }, createdAt: '2023-05-20T14:15:00Z' },
    { id: 3, title: 'Modern Web Development', excerpt: 'Explore the latest trends...', author: { name: 'Alice Johnson' }, createdAt: '2023-06-01T09:45:00Z' }
  ];
}`}
        </pre>

        <h3 className="text-lg font-semibold mt-6 mb-2">Client Component</h3>
        <pre>
          {`// ClientComponent.tsx - This component includes JavaScript for the client
'use client';

import { useState } from 'react';

export function ClientComponent() {
  const [showThankYou, setShowThankYou] = useState(false);
  const [email, setEmail] = useState('');
  
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
              setEmail('');
            }}
            className="mt-2 text-sm text-green-700 underline"
          >
            Subscribe another email
          </button>
        </div>
      ) : (
        <>
          <h3 className="text-lg font-semibold mb-2">Subscribe to our newsletter</h3>
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
}`}
        </pre>
      </div>
    </ExampleLayout>
  );
}
