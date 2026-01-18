# React Native + Supabase Learning Project

## Project Overview
**App:** TaskFlow - A full-featured task management mobile app
**Tech Stack:** React Native (Expo), TypeScript, Supabase
**Target Platforms:** iOS and Android

---

## Teaching Guidelines

### Principles I Will Follow
1. **Explain as I implement** - Every new concept gets explained with WHY it exists as I write the code
2. **Build incrementally** - Small, working pieces that combine into the full app
3. **Compare to React web** - Leverage your React knowledge by highlighting similarities and differences
4. **I write, you learn** - I'll write all the code with detailed explanations so you can focus on understanding
5. **Real-world patterns** - Use industry-standard practices, not shortcuts
6. **Debug together** - Errors are learning opportunities, we'll work through them

### Teaching Format for Each Module
1. **Concept Introduction** - What we're learning and why
2. **Key Differences from Web** - React Native specifics
3. **Code Implementation** - I write the code with inline explanations
4. **Walkthrough** - Detailed explanation of what each part does
5. **Questions** - Opportunity to ask about anything unclear

---

## Learning Modules

### Module 1: Environment Setup & Project Foundation
**Concepts:**
- Expo vs bare React Native (why we're using Expo)
- React Native architecture overview
- Project structure and conventions
- TypeScript configuration

**Deliverables:**
- Working Expo development environment
- Project scaffolding with proper folder structure
- Running app on simulator/device

---

### Module 2: React Native Core Fundamentals
**Concepts:**
- Core components: View, Text, ScrollView, FlatList, Pressable
- Styling: StyleSheet vs CSS (no CSS, all JavaScript)
- Flexbox differences (default column direction)
- Platform-specific code (iOS vs Android)
- Safe areas and device notches

**Deliverables:**
- Basic task list UI with hardcoded data
- Understanding of React Native component model

**Key Difference from React Web:**
- No DOM - can't use div, span, button, etc.
- No CSS files - StyleSheet.create() instead
- No hover states - touch feedback instead

---

### Module 3: Navigation
**Concepts:**
- React Navigation library
- Stack Navigator (screen transitions)
- Tab Navigator (bottom tabs)
- Passing data between screens
- Navigation types with TypeScript

**Deliverables:**
- Multi-screen app with tab navigation
- Task list screen, task detail screen, settings screen

---

### Module 4: Supabase Fundamentals
**Concepts:**
- What is Supabase (Postgres + Auth + Storage + Realtime)
- Setting up a Supabase project
- Database design for tasks
- Row Level Security (RLS) - critical for mobile apps
- Supabase client setup in React Native

**Deliverables:**
- Supabase project with tasks table
- RLS policies configured
- Connected React Native app

---

### Module 5: Authentication
**Concepts:**
- Supabase Auth (email/password)
- Auth state management
- Protected routes
- Secure token storage in React Native
- Auth context pattern

**Deliverables:**
- Login/signup screens
- Persistent auth sessions
- Protected app routes

---

### Module 6: CRUD Operations
**Concepts:**
- Supabase queries (select, insert, update, delete)
- React Query or Supabase's built-in hooks
- Optimistic updates for better UX
- Error handling patterns
- Loading states

**Deliverables:**
- Full task CRUD functionality
- Create, read, update, delete tasks
- Proper loading and error states

---

### Module 7: Real-time Features
**Concepts:**
- Supabase Realtime subscriptions
- Websocket connections in mobile
- Syncing state across devices
- Handling connection drops

**Deliverables:**
- Tasks sync in real-time across devices
- Online/offline indicator

---

### Module 8: Advanced Features
**Concepts:**
- Task categories/tags
- Due dates and reminders
- Local notifications
- Search and filtering
- Pull-to-refresh

**Deliverables:**
- Categories for tasks
- Due date picker
- Search functionality

---

### Module 9: Polish & UX
**Concepts:**
- Animations with Reanimated
- Haptic feedback
- App icons and splash screens
- Dark mode support
- Keyboard handling

**Deliverables:**
- Smooth animations on task actions
- Professional app appearance

---

### Module 10: Deployment
**Concepts:**
- Building for production
- EAS Build service
- TestFlight (iOS) and Internal Testing (Android)
- Environment variables for production

**Deliverables:**
- Production build ready for testing
- Understanding of the deployment process

---

## Database Schema (Preview)

```sql
-- Users handled by Supabase Auth

-- Tasks table
create table tasks (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users not null,
  title text not null,
  description text,
  completed boolean default false,
  due_date timestamptz,
  category_id uuid references categories,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Categories table
create table categories (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users not null,
  name text not null,
  color text not null,
  created_at timestamptz default now()
);
```

---

## How We'll Work Together

1. **I explain the concept** - Background and why it matters
2. **I write the code** - With detailed inline explanations
3. **I walk you through it** - Breaking down each piece
4. **You ask questions** - Anytime, about anything
5. **We troubleshoot together** - If issues arise

---

## Progress Tracker

- [ ] Module 1: Environment Setup & Project Foundation
- [ ] Module 2: React Native Core Fundamentals
- [ ] Module 3: Navigation
- [ ] Module 4: Supabase Fundamentals
- [ ] Module 5: Authentication
- [ ] Module 6: CRUD Operations
- [ ] Module 7: Real-time Features
- [ ] Module 8: Advanced Features
- [ ] Module 9: Polish & UX
- [ ] Module 10: Deployment

---

## Ready to Start?

We'll begin with **Module 1: Environment Setup** which includes:
- Installing Expo CLI
- Creating the project
- Understanding the project structure
- Running on simulator and/or physical device

This gives us a working foundation before diving into React Native specifics.
