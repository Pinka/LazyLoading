"use client";

import { useEffect, useState } from "react";

interface Comment {
  id: number;
  user: string;
  avatar: string;
  content: string;
  timestamp: string;
  likes: number;
}

/**
 * Comments section component that demonstrates lazy loading with data fetching.
 * Only loads the comments data when the component is rendered.
 */
export default function CommentsSection() {
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState<Comment[]>([]);

  // Fetch comments data when component mounts
  useEffect(() => {
    const fetchComments = async () => {
      // Simulate API fetch with a delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Mock comments data
      const mockComments: Comment[] = [
        {
          id: 1,
          user: "User1",
          avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=User1",
          content:
            "Great article! I've learned a lot about lazy loading from this.",
          timestamp: "2 hours ago",
          likes: 15,
        },
        {
          id: 2,
          user: "User2",
          avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=User2",
          content:
            "Thanks for sharing this information. It's very helpful for my project.",
          timestamp: "1 day ago",
          likes: 8,
        },
        {
          id: 3,
          user: "User3",
          avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=User3",
          content:
            "I'd like to see more examples of lazy loading in different frameworks.",
          timestamp: "2 days ago",
          likes: 4,
        },
      ];

      setComments(mockComments);
      setLoading(false);
    };

    fetchComments();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full">
        <div className="animate-pulse text-blue-500">Loading comments...</div>
      </div>
    );
  }

  return (
    <div className="w-full bg-gray-50 p-4 rounded-md shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Recent Comments</h3>

      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-white p-3 rounded shadow-sm">
            <div className="flex items-center mb-2">
              <img
                src={comment.avatar}
                alt={`${comment.user}'s avatar`}
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <div className="font-medium">{comment.user}</div>
                <div className="text-xs text-gray-500">{comment.timestamp}</div>
              </div>
            </div>

            <p className="text-gray-700 mb-2">{comment.content}</p>

            <div className="flex items-center text-gray-500 text-sm">
              <button className="flex items-center hover:text-blue-500">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                  />
                </svg>
                {comment.likes}
              </button>
              <button className="flex items-center ml-4 hover:text-blue-500">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                Reply
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-3 border-t">
        <div className="flex">
          <input
            type="text"
            placeholder="Add a comment..."
            className="flex-grow px-3 py-2 border rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition">
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
