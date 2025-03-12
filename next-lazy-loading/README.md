# Next.js 15 & React 19 Lazy Loading Examples

This project demonstrates various lazy loading techniques implemented with Next.js 15 and React 19. It's designed as a presentation to showcase real-world implementations of different lazy loading strategies using the latest features available in modern React.

## Live Examples

The project includes several working examples of lazy loading techniques:

1. **Enhanced Suspense** - Using React 19's improved Suspense for component-level lazy loading with better error handling and fallback controls.
2. **Nested Suspense Boundaries** - Creating multiple loading zones with prioritized content display.
3. **Server Components** - Using React 19 Server Components to reduce client-side JavaScript.
4. **Asset Loading Optimization** - Optimizing image and other asset loading using Next.js 15's advanced image handling.
5. **Streaming SSR** - Progressive page loading with enhanced streaming Server-Side Rendering.
6. **Code Splitting** - Modern code splitting techniques with React 19's optimized bundle delivery.

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone this repository:

```bash
git clone https://github.com/yourusername/next-lazy-loading.git
cd next-lazy-loading
```

2. Install dependencies:

```bash
npm install
# or
yarn
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the examples.

## Project Structure

```
next-lazy-loading/
├── app/                      # Next.js App Router
│   ├── examples/             # Example implementations
│   │   ├── enhanced-suspense/  # React 19's Suspense with improved controls
│   │   ├── nested-suspense/    # Multiple loading zones
│   │   ├── server-components/  # React 19 Server Components
│   │   ├── asset-loading/      # Next.js 15 image optimization
│   │   ├── streaming-ssr/      # Enhanced progressive page loading
│   │   └── code-splitting/     # React 19 bundle optimization
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── components/               # Shared components
│   └── ExampleLayout.tsx     # Layout for example pages
├── public/                   # Static assets
├── next.config.js            # Next.js configuration
├── package.json              # Dependencies
├── postcss.config.js         # PostCSS configuration
├── tailwind.config.js        # Tailwind CSS configuration
└── tsconfig.json             # TypeScript configuration
```

## Technologies Used

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS

## React 19 & Next.js 15 Features

This project showcases several key improvements in React 19 and Next.js 15:

- **Enhanced Suspense API**: Better fallback control with `fallbackMinimumTime` and direct error handling with `onError`
- **Improved Server Components**: Better performance and interoperability between server and client components
- **Advanced Image Optimization**: New quality controls and improved format selection
- **Enhanced Streaming**: Better progressive loading for improved user experience
- **Simplified Code Splitting**: More efficient bundle delivery and loading

## About Lazy Loading

Lazy loading is a design pattern that defers the loading of resources until they are actually needed, improving initial load performance and saving bandwidth. This project showcases different approaches to implementing lazy loading in modern web applications, taking advantage of the latest features in React 19 and Next.js 15.

## License

MIT
