# CLAUDE.md - Assistant Guide for viet-type

## Project Overview
This is a SvelteKit project initialized with TypeScript support. It's a web application using Svelte 5 with SvelteKit 2.16.0.

## Build Commands
- Build: `npm run build`
- Dev mode: `npm run dev`
- Preview build: `npm run preview`
- Type checking: `npm run check`
- Watch for type errors: `npm run check:watch`

## Project Structure
- `/src` - Main source code
  - `/routes` - SvelteKit routes
  - `/lib` - Shared components and utilities
- `/static` - Static assets like images
- `/node_modules` - Dependencies 

## Technology Stack
- SvelteKit 2.16.0
- Svelte 5.0.0
- TypeScript 5.x
- Vite 6.x for bundling

## Code Style Guidelines
- Use TypeScript with strict type checking
- Format with Prettier using 2-space indentation
- Follow ESLint rules for code quality
- Use camelCase for variables/functions, PascalCase for classes/components
- Prefer async/await over raw promises
- Use meaningful error messages and proper error handling
- Group imports: external libraries, then internal modules
- Comment complex logic but prefer self-documenting code