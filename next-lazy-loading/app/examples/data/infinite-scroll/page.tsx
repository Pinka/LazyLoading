"use client";

import { useState, useEffect, useRef } from "react";
import ExampleLayout from "@/components/ExampleLayout";
import Link from "next/link";

// Post type definition
interface Post {
  id: number;
  title: string;
  body: string;
  author: string;
  date: string;
  likes: number;
}

export default function InfiniteScrollPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [noMorePosts, setNoMorePosts] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const loadingIndicatorRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Load more posts function
  const loadMorePosts = async () => {
    if (isLoading || noMorePosts) return;

    setIsLoading(true);

    try {
      // Simulate API fetch with a delay
      const response = await fetchPostsData(currentPage, 5);

      if (response.posts.length === 0) {
        setNoMorePosts(true);
        return;
      }

      // Add new posts to the existing posts
      setPosts((prevPosts) => [...prevPosts, ...response.posts]);
      setCurrentPage((prevPage) => prevPage + 1);

      // If we've reached the last page
      if (currentPage >= response.totalPages) {
        setNoMorePosts(true);
      }
    } catch (error) {
      console.error("Error loading posts:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Setup Intersection Observer
  useEffect(() => {
    if (loadingIndicatorRef.current) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !isLoading && !noMorePosts) {
              loadMorePosts();
            }
          });
        },
        {
          rootMargin: "200px 0px",
          threshold: 0.1,
        }
      );

      observerRef.current.observe(loadingIndicatorRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [isLoading, noMorePosts]); // Re-setup observer when loading/noMorePosts changes

  // Monitor scroll position for the scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Initial load
  useEffect(() => {
    loadMorePosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ExampleLayout
      title="Data Lazy Loading - Infinite Scroll"
      description="Loading data incrementally as the user scrolls down the page, providing a seamless browsing experience"
    >
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">How It Works</h2>
          <p className="mb-4">
            This example demonstrates data lazy loading using the infinite
            scroll technique. Instead of loading all data at once, new content
            is loaded as the user scrolls down the page.
          </p>
          <p className="mb-4">Benefits of data lazy loading:</p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">Reduces initial data transfer</li>
            <li className="mb-2">Improves page load performance</li>
            <li className="mb-2">Saves server resources</li>
            <li className="mb-2">Provides a seamless user experience</li>
            <li className="mb-2">Handles large datasets efficiently</li>
          </ul>
          <p>
            Scroll down to see more posts load automatically. Open your
            browser's developer tools (Network tab) to observe when new data is
            fetched.
          </p>
        </div>

        {/* Posts container */}
        <div className="space-y-4 min-h-[300px]">
          {posts.map((post) => (
            <div
              key={post.id}
              className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm transition-transform hover:translate-y-[-3px] hover:shadow-md"
            >
              <h3 className="text-xl font-bold mb-2 text-blue-600">
                {post.title}
              </h3>
              <div className="text-gray-700 mb-3">{post.body}</div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>
                  By {post.author} on {post.date}
                </span>
                <span>❤️ {post.likes} likes</span>
              </div>
            </div>
          ))}
        </div>

        {/* Loading indicator */}
        <div
          ref={loadingIndicatorRef}
          className={`text-center py-5 italic text-gray-600 ${
            !isLoading && noMorePosts ? "hidden" : ""
          }`}
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-gray-200 border-t-blue-500 rounded-full animate-spin mr-2"></div>
              Loading more posts...
            </div>
          ) : noMorePosts ? (
            <div>End of content</div>
          ) : null}
        </div>

        {/* Scroll to top button */}
        <button
          onClick={scrollToTop}
          className={`fixed bottom-5 right-5 bg-blue-600 text-white w-12 h-12 rounded-full shadow-md flex items-center justify-center text-2xl hover:bg-blue-700 transition-opacity ${
            showScrollTop ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          aria-label="Scroll to top"
        >
          ↑
        </button>

        {/* Developer info */}
        <div className="bg-green-50 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2">What to Observe</h2>
          <p className="mb-2">
            In your browser's developer tools (Network tab):
          </p>
          <ul className="list-disc pl-6">
            <li className="mb-2">
              Initial data load is small (only the first batch of posts)
            </li>
            <li className="mb-2">
              Additional data is loaded only when you scroll near the bottom
            </li>
            <li className="mb-2">Each request fetches a new "page" of data</li>
            <li className="mb-2">
              Notice how the loading is triggered before you reach the very
              bottom
            </li>
          </ul>
        </div>

        {/* Code explanation */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">The Code</h2>

          <h3 className="text-xl font-bold mb-2">
            Intersection Observer for Infinite Scroll
          </h3>
          <div className="bg-gray-100 p-4 rounded-md mb-6 overflow-auto">
            <pre className="text-sm whitespace-pre-wrap">
              {`// Create an Intersection Observer to detect when the loading indicator is visible
useEffect(() => {
  if (loadingIndicatorRef.current) {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          // When loading indicator is visible and we're not already loading
          if (entry.isIntersecting && !isLoading && !noMorePosts) {
            loadMorePosts();
          }
        });
      },
      {
        // Start loading when indicator is 200px away
        rootMargin: "200px 0px",
        threshold: 0.1
      }
    );

    observerRef.current.observe(loadingIndicatorRef.current);
  }

  return () => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }
  };
}, [isLoading, noMorePosts]);`}
            </pre>
          </div>

          <h3 className="text-xl font-bold mb-2">Loading Data in Batches</h3>
          <div className="bg-gray-100 p-4 rounded-md overflow-auto">
            <pre className="text-sm whitespace-pre-wrap">
              {`async function loadMorePosts() {
  if (isLoading || noMorePosts) return;
  
  setIsLoading(true);
  
  try {
    // In a real app, this would be an API call with pagination
    // For example: fetch(\`/api/posts?page=\${currentPage}&limit=10\`)
    const response = await fetchPostsData(currentPage, 5);
    
    if (response.posts.length === 0) {
      setNoMorePosts(true);
      return;
    }
    
    // Add new posts to the existing posts
    setPosts(prevPosts => [...prevPosts, ...response.posts]);
    setCurrentPage(prevPage => prevPage + 1);
    
    // If we've reached the last page
    if (currentPage >= response.totalPages) {
      setNoMorePosts(true);
    }
  } catch (error) {
    console.error('Error loading posts:', error);
  } finally {
    setIsLoading(false);
  }
}`}
            </pre>
          </div>
        </div>

        <div className="mt-8">
          <Link href="/" className="text-blue-600 hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    </ExampleLayout>
  );
}

// Mock data - in a real app, this would come from an API
function generateMockPosts(page: number, limit: number): Post[] {
  const posts: Post[] = [];
  const startIndex = (page - 1) * limit + 1;

  for (let i = 0; i < limit; i++) {
    const postIndex = startIndex + i;
    // Only generate up to 30 posts total
    if (postIndex > 30) break;

    posts.push({
      id: postIndex,
      title: `Post ${postIndex}: ${getRandomTitle()}`,
      body: getRandomBody(),
      author: getRandomName(),
      date: getRandomDate(),
      likes: Math.floor(Math.random() * 100),
    });
  }

  return posts;
}

// Simulate API fetch with delay
function fetchPostsData(
  page: number,
  limit: number
): Promise<{ posts: Post[]; page: number; totalPages: number }> {
  return new Promise((resolve) => {
    // Simulate network delay
    setTimeout(() => {
      const posts = generateMockPosts(page, limit);
      resolve({ posts, page, totalPages: 6 });
    }, 800); // 800ms delay to simulate network request
  });
}

// Helper functions for generating random content
function getRandomTitle(): string {
  const titles = [
    "Understanding Lazy Loading",
    "Performance Optimization Techniques",
    "Web Development Best Practices",
    "Modern JavaScript Features",
    "Building Responsive Websites",
    "CSS Grid Layout Tutorial",
    "Mastering Flexbox",
    "Progressive Web Apps",
    "Frontend Development Tips",
    "Optimizing Web Performance",
  ];
  return titles[Math.floor(Math.random() * titles.length)];
}

function getRandomBody(): string {
  const bodies = [
    "Lazy loading is a design pattern commonly used in web development to defer initialization of an object until the point at which it is needed. It can contribute to efficiency in the program's operation if properly and appropriately used.",
    "Web performance optimization is the field of knowledge about increasing web performance. Faster websites have better user experience, conversion rates, and higher ranks in organic search results.",
    "Responsive web design is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes. Recent work also considers the viewer proximity as part of the viewing context as an extension for RWD.",
    "JavaScript is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.",
    "CSS Grid Layout excels at dividing a page into major regions or defining the relationship in terms of size, position, and layer, between parts of a control built from HTML primitives.",
    "Flexbox is a one-dimensional layout method for laying out items in rows or columns. Items flex to fill additional space and shrink to fit into smaller spaces.",
    "Progressive Web Apps are web apps that use service workers, manifests, and other web-platform features in combination with progressive enhancement to give users an experience on par with native apps.",
  ];
  return bodies[Math.floor(Math.random() * bodies.length)];
}

function getRandomName(): string {
  const names = [
    "Alex Johnson",
    "Sam Smith",
    "Jordan Lee",
    "Taylor Brown",
    "Casey Wilson",
    "Morgan Davis",
    "Jamie Miller",
    "Riley Anderson",
  ];
  return names[Math.floor(Math.random() * names.length)];
}

function getRandomDate(): string {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = months[Math.floor(Math.random() * months.length)];
  const day = Math.floor(Math.random() * 28) + 1;
  const year = 2023;
  return `${month} ${day}, ${year}`;
}
