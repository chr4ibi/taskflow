// Core type definitions for TaskFlow
// These match our planned Supabase database schema

export interface Task {
  id: string;
  user_id: string;
  title: string;
  description: string | null;
  completed: boolean;
  due_date: string | null;  // ISO date string
  category_id: string | null;
  created_at: string;
  updated_at: string;
}

export interface Category {
  id: string;
  user_id: string;
  name: string;
  color: string;           // Hex color code
  created_at: string;
}

// For creating new tasks (id and timestamps are auto-generated)
export type NewTask = Pick<Task, 'title' | 'description' | 'due_date' | 'category_id'>;

// For updating tasks (all fields optional except we need to know which task)
export type TaskUpdate = Partial<Pick<Task, 'title' | 'description' | 'completed' | 'due_date' | 'category_id'>>;

// User type from Supabase Auth
export interface User {
  id: string;
  email: string;
  created_at: string;
}

// Re-export navigation types
export * from './navigation';
