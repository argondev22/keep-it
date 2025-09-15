# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Setup
- This project uses Dev Containers for development environment
- Run `bash ./bin/setup-container.sh` to set up the development container
- Start the application with `docker compose up`

### Application Commands
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality checks

### Access Points
- Application runs on http://localhost:3000

## Architecture Overview

### Technology Stack
- **Framework**: Next.js 15 with React 19
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Development**: Dev Containers with Docker

### Application Structure
This is a study management application (学習管理アプリケーション) called "keepIT" that provides a Pomodoro-style timer for focused learning sessions.

#### Core Components Architecture
The application follows a component-based architecture with clear separation of concerns:

1. **Page Level** (`app/src/app/page.tsx`):
   - Main page component that manages global state for subjects and selected subject
   - Uses "use client" directive for client-side state management
   - Coordinates between StudyTimer and SubjectList components

2. **Component Structure** (`app/src/components/`):
   - **Header**: App branding with "keepIT" logo (keep in navy, IT in yellow) and user profile avatar
   - **StudyTimer**: Central timer component (25-minute countdown) that receives selectedSubject as prop
   - **SubjectList**: Sidebar component for managing study subjects with fixed height and scroll overflow
   - **WelcomeSection**: Static welcome message component
   - **QuickActions & StatsSection**: Feature placeholder components (currently commented out)

#### State Management Pattern
- Parent component (`page.tsx`) holds subjects array and selectedSubject state
- Props are passed down to child components for data flow
- Callback functions passed for state updates (onSelectSubject, onAddSubject, onResetSelection)

#### Subject Data Model
```typescript
interface Subject {
  id: string;
  name: string;  
  color: string;  // Tailwind background class
  icon: string;   // Emoji icon
}
```

#### Key UI Patterns
- Timer is absolutely centered with SubjectList positioned absolutely to the right
- SubjectList has fixed height matching timer with scrollable overflow
- Responsive design using Tailwind's utility classes
- Component composition over inheritance

### Development Notes
- Components are organized by feature/UI section
- State lifting pattern used for shared data between sibling components
- TypeScript interfaces defined inline within components
- Tailwind classes used for styling with specific color scheme (navy blue + yellow branding)