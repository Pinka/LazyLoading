# Project Upgrade: React 19 & Next.js 15

This document summarizes the changes made to upgrade the project from React 18/Next.js 14 to React 19/Next.js 15.

## Dependencies Updated

- Updated React from 18.2.0 to 19.0.0
- Updated React DOM from 18.2.0 to 19.0.0
- Updated Next.js from 14.0.4 to 15.0.0
- Updated associated type definitions
- Updated ESLint config for Next.js 15

## Configuration Changes

### Next.js Configuration

- Removed deprecated experimental options as they are now stable features in Next.js 15
- Updated image configuration to use `remotePatterns` instead of `domains`
- Removed explicit `serverComponents` and `serverActions` settings as they are now stable by default

## Feature Enhancements

### Enhanced Suspense Example

- Updated to use React 19's improved Suspense API
- Added documentation for new features like `fallbackMinimumTime` for controlling fallback display time
- Improved error handling with Suspense's built-in `onError` callback

### Server Components Example

- Reorganized code to better demonstrate React 19's Server Component pattern
- Updated explanations to highlight the improvements in React 19's Server Components
- Emphasized better interoperability between server and client components

### Asset Loading Example

- Added quality control for images using Next.js 15's enhanced Image component
- Updated documentation to reflect new image optimization features
- Highlighted improvements in format selection and Core Web Vitals metrics

### Home Page Updates

- Emphasized React 19 and Next.js 15 features throughout the UI
- Added a dedicated section highlighting key improvements
- Updated component descriptions to reflect the new capabilities

### Documentation

- Updated README to reflect React 19 and Next.js 15 features
- Added new section specifically about React 19 and Next.js 15 improvements
- Updated project structure descriptions

## TypeScript Improvements

- Updated type definitions to align with React 19
- Fixed typing issues in the Suspense implementation

## Code Quality

- Removed usage of deprecated APIs
- Ensured compatibility with React 19's concurrent rendering features
- Improved error handling patterns

## Note On API Availability

As React 19 and Next.js 15 are still evolving at the time of this update, some features like `fallbackMinimumTime` on Suspense might still be in development. The examples have been structured to show how these features will work while still being compatible with current stable implementations.
