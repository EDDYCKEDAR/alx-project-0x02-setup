Next.js Project Setup and Basics

# ALX Project 0x02 - Next.js Setup with TypeScript and Tailwind CSS

## Project Description

This project is a comprehensive introduction to setting up and working with Next.js, TypeScript, and Tailwind CSS. It guides you through creating a modern web application with reusable components, routing, API integration, and proper project structure. The project covers fundamental concepts from initial setup to building interactive components and fetching data from external APIs.

## Learning Objectives

By completing this project, you will:

* Understand how to scaffold a Next.js application with TypeScript and Tailwind CSS
* Learn to implement basic routing in Next.js using the Pages Router
* Create reusable components with TypeScript interfaces
* Implement interactive UI elements like modals and buttons
* Fetch and display data from external APIs
* Structure a Next.js project following best practices
* Work with component props and state management
* Build responsive layouts with navigation

## Requirements

* Node.js (v16 or later)
* npm or yarn package manager
* Basic knowledge of React and TypeScript
* Familiarity with HTML/CSS
* Git and GitHub account
* Code editor (VS Code recommended)

## Project Structure

```
alx-project-0x02/
├── components/
│   ├── common/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── PostCard.tsx
│   │   ├── PostModal.tsx
│   │   └── UserCard.tsx
│   └── layout/
│       └── Header.tsx
├── interfaces/
│   └── index.ts
├── pages/
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── about.tsx
│   ├── home.tsx
│   ├── index.tsx
│   ├── posts.tsx
│   └── users.tsx
├── public/
│   └── assets/
│       └── images/
├── styles/
│   └── globals.css
├── .eslintrc.json
├── next.config.js
├── package.json
├── README.md
└── tsconfig.json
```

## Getting Started

### 1. Initial Setup

```bash
# Create the Next.js project
npx create-next-app@latest alx-project-2 --typescript --tailwind --eslint

# Navigate to project directory
cd alx-project-2

# Install dependencies
npm install

# Start development server
npm run dev -- -p 3000
```

### 2. Verify Installation

Navigate to [http://localhost:3000](http://localhost:3000) to ensure the application is running correctly.

## Implementation Guide

### Phase 1: Project Foundation
1. Start by setting up the Next.js project with TypeScript and Tailwind CSS
2. Create the required folder structure (`components/`, `interfaces/`, `public/assets/images/`)
3. Set up basic TypeScript interfaces in `interfaces/index.ts`

### Phase 2: Basic Routing
4. Implement basic routing with the Pages Router
5. Create `pages/home.tsx` and `pages/about.tsx` with basic content
6. Test routing functionality between pages

### Phase 3: Component Development
7. Build reusable components one by one, starting with simple ones:
   - `Card.tsx` - Generic card component
   - `Button.tsx` - Configurable button component
8. Progress to more complex components:
   - `PostModal.tsx` - Interactive modal for user input
   - `PostCard.tsx` - Component for displaying posts
   - `UserCard.tsx` - Component for displaying user information

### Phase 4: Navigation and Layout
9. Implement the `Header.tsx` component for navigation
10. Add navigation links to all pages
11. Ensure consistent layout across the application

### Phase 5: API Integration
12. Fetch and display data from JSONPlaceholder API
13. Implement loading states and error handling
14. Test each component and page as you build them

## Component Overview

### Layout Components
- **Header.tsx**: Navigation header with routing links and active state highlighting

### Common Components
- **Card.tsx**: Reusable card component accepting `title` and `content` props
- **Button.tsx**: Configurable button with `size` and `shape` variants
- **PostCard.tsx**: Displays post data with title, content, and user information
- **UserCard.tsx**: Rich user profile display with contact and company information
- **PostModal.tsx**: Interactive modal form for adding new posts

### TypeScript Interfaces
```typescript
// Key interfaces defined in interfaces/index.ts
interface CardProps { title: string; content: string; }
interface ButtonProps { size: 'small' | 'medium' | 'large'; shape: 'rounded-sm' | 'rounded-md' | 'rounded-full'; }
interface PostProps { id: number; title: string; body: string; userId: number; }
interface UserProps { /* Complete user data structure */ }
```

## Pages Structure

1. **`pages/index.tsx`**: Welcome page with project overview
2. **`pages/home.tsx`**: Interactive page with cards and modal functionality
3. **`pages/about.tsx`**: Button component showcase and project information
4. **`pages/posts.tsx`**: API-driven posts display using PostCard components
5. **`pages/users.tsx`**: User profiles fetched from JSONPlaceholder API

## Best Practices

### 1. Project Structure
- Organize components by domain (layout, common, etc.)
- Keep interfaces in a dedicated folder
- Separate pages according to routes

### 2. Component Design
- Create reusable, modular components
- Use TypeScript interfaces for props
- Follow single responsibility principle

### 3. Code Quality
- Use ESLint for linting
- Maintain consistent code style
- Add meaningful comments where necessary

### 4. Performance
- Optimize API calls
- Implement lazy loading where appropriate
- Use Tailwind CSS for efficient styling

### 5. Documentation
- Maintain a clear README
- Document component props and usage
- Keep commit messages descriptive

## API Integration

The project integrates with [JSONPlaceholder](https://jsonplaceholder.typicode.com/) API:

- **Posts**: `https://jsonplaceholder.typicode.com/posts`
- **Users**: `https://jsonplaceholder.typicode.com/users`

### Error Handling
- Implement loading states for API calls
- Handle network errors gracefully
- Provide user-friendly error messages

## Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run dev -- -p 3000  # Start on specific port

# Production
npm run build        # Build for production
npm start           # Start production server

# Code Quality
npm run lint        # Run ESLint
```

## Expected Outcomes

Upon completion, you will have:

* ✅ A fully functional Next.js application
* ✅ Reusable components that follow TypeScript best practices
* ✅ Proper routing between different pages
* ✅ API integration to fetch and display data
* ✅ Responsive design using Tailwind CSS
* ✅ Clean, well-organized codebase

## Repository Information

- **GitHub Repository**: `alx-project-0x02-setup`
- **Directory**: `alx-project-0x02`
- **Required Files**: All components, pages, and configuration files as specified in the project structure

## Deployment

The application can be deployed using:

### Vercel (Recommended for Next.js)
```bash
npm install -g vercel
vercel
```

### Other Platforms
Build the application with `npm run build` and deploy the generated files to your preferred hosting service.

## Troubleshooting

### Common Issues
1. **Port conflicts**: Use `npm run dev -- -p 3001` to run on a different port
2. **TypeScript errors**: Ensure all interfaces are properly defined
3. **Styling issues**: Verify Tailwind CSS is properly configured
4. **API errors**: Check network connection and API endpoints

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)

---

**Built as part of the ALX Software Engineering Program**
