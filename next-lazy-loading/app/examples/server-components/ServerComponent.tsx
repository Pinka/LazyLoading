// Note the absence of 'use client' directive - this is a Server Component

// Using React 19's improved async component pattern
export async function ServerComponent() {
  // Data fetching happens on the server
  const articles = await getArticles();

  return (
    <div className="server-rendered">
      <h2 className="text-xl font-semibold mb-4">Latest Articles</h2>
      <div className="grid gap-4">
        {articles.map((article) => (
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
  await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate network delay

  return [
    {
      id: 1,
      title: "Understanding Lazy Loading",
      excerpt:
        "Learn about lazy loading techniques for improved application performance and user experience.",
      author: { name: "Jane Doe" },
      createdAt: "2023-05-15T10:30:00Z",
    },
    {
      id: 2,
      title: "React Performance Tips",
      excerpt:
        "Optimize your React applications with these proven strategies for better rendering speed and efficiency.",
      author: { name: "John Smith" },
      createdAt: "2023-05-20T14:15:00Z",
    },
    {
      id: 3,
      title: "Modern Web Development",
      excerpt:
        "Explore the latest trends in web development including server components, streaming, and more.",
      author: { name: "Alice Johnson" },
      createdAt: "2023-06-01T09:45:00Z",
    },
  ];
}
