GoDaddy Repository Collater Assignment

This is a React + TypeScript application built using Vite as the bundler. It uses React Testing Library for unit tests, with Vitest as the test runner.

Setup and Commands

Use the following commands to work with this project:

# Install dependenciess
npm install

# Run the development server
npm run dev

# Build for production
npm run build

# Run unit tests with coverage
npm run test

# Format the code
npm run format

# Features

1. Lightweight UI Components

Used Radix UI for UI components such as the toggle button, dark/light theme switch, and card components.

Material UI was omitted due to its larger bundle size and the feature requirements not justifying its inclusion.

2. State Management

Used React Context API instead of Redux, as the project’s scope did not justify installing an external state management library.

3. Routing

Used React Router for navigation and routing functionality.

4. Type Safety & Validation

Instead of using PropTypes, TypeScript was used to ensure type safety for props and API responses.

5. Code Formatting

Added a npm run format command to ensure consistent code formatting.