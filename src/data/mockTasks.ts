// Mock data for development
// This simulates what we'll eventually get from Supabase
// Using our Task type ensures consistency

import { Task, Category } from '../types';

export const MOCK_CATEGORIES: Category[] = [
  {
    id: '1',
    user_id: 'user-1',
    name: 'Work',
    color: '#6366F1', // Indigo
    created_at: '2024-01-01T00:00:00Z',
  },
  {
    id: '2',
    user_id: 'user-1',
    name: 'Personal',
    color: '#10B981', // Green
    created_at: '2024-01-01T00:00:00Z',
  },
  {
    id: '3',
    user_id: 'user-1',
    name: 'Shopping',
    color: '#F59E0B', // Amber
    created_at: '2024-01-01T00:00:00Z',
  },
];

export const MOCK_TASKS: Task[] = [
  {
    id: '1',
    user_id: 'user-1',
    title: 'Review pull request',
    description: 'Check the new authentication flow implementation',
    completed: false,
    due_date: '2024-01-20T10:00:00Z',
    category_id: '1', // Work
    created_at: '2024-01-15T08:00:00Z',
    updated_at: '2024-01-15T08:00:00Z',
  },
  {
    id: '2',
    user_id: 'user-1',
    title: 'Buy groceries',
    description: 'Milk, eggs, bread, fruits',
    completed: false,
    due_date: '2024-01-18T18:00:00Z',
    category_id: '3', // Shopping
    created_at: '2024-01-15T09:00:00Z',
    updated_at: '2024-01-15T09:00:00Z',
  },
  {
    id: '3',
    user_id: 'user-1',
    title: 'Morning workout',
    description: '30 minutes cardio + stretching',
    completed: true,
    due_date: null,
    category_id: '2', // Personal
    created_at: '2024-01-14T06:00:00Z',
    updated_at: '2024-01-15T07:00:00Z',
  },
  {
    id: '4',
    user_id: 'user-1',
    title: 'Prepare presentation',
    description: 'Q1 planning slides for Monday meeting',
    completed: false,
    due_date: '2024-01-22T09:00:00Z',
    category_id: '1', // Work
    created_at: '2024-01-15T10:00:00Z',
    updated_at: '2024-01-15T10:00:00Z',
  },
  {
    id: '5',
    user_id: 'user-1',
    title: 'Call mom',
    description: null,
    completed: false,
    due_date: null,
    category_id: '2', // Personal
    created_at: '2024-01-15T11:00:00Z',
    updated_at: '2024-01-15T11:00:00Z',
  },
];

// Helper to get category by ID
export const getCategoryById = (id: string | null): Category | undefined => {
  if (!id) return undefined;
  return MOCK_CATEGORIES.find(cat => cat.id === id);
};
