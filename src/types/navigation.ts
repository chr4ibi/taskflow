// Navigation type definitions
// These tell TypeScript what screens exist and what params they accept

import type { Task } from './index';

// ============================================================
// HOW REACT NAVIGATION TYPING WORKS
// ============================================================
//
// 1. Define a "param list" type - maps screen names to their params
// 2. Each screen can have:
//    - undefined: no params required
//    - An object: specific params required
//
// 3. This enables:
//    - Autocomplete when calling navigation.navigate()
//    - Type errors if you pass wrong params
//    - Type-safe useRoute() in screen components
// ============================================================

// Stack Navigator: Task-related screens
// Stack = screens that push on top of each other
export type TaskStackParamList = {
  // TaskList takes no params
  TaskList: undefined;

  // TaskDetail requires a task to display
  // We pass the full task object for immediate display (no loading state)
  TaskDetail: {
    task: Task;
  };

  // Future: TaskCreate will take optional initial values
  // TaskCreate: {
  //   categoryId?: string;
  //   dueDate?: string;
  // };
};

// Tab Navigator: Main app sections
// Tabs = screens shown in the bottom tab bar
export type RootTabParamList = {
  // Each tab can contain a nested navigator
  // TasksTab contains the TaskStack navigator
  TasksTab: undefined;

  // Settings is a single screen (for now)
  Settings: undefined;
};

// ============================================================
// TYPED HOOKS - USE THESE IN YOUR COMPONENTS
// ============================================================
//
// Instead of:
//   const navigation = useNavigation();
//
// Use the typed versions we'll create:
//   const navigation = useTaskStackNavigation();
//
// This gives you full autocomplete and type checking.
// ============================================================

// We'll add typed hook exports here in the navigation setup file
