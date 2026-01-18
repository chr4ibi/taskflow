// Theme constants for consistent styling across the app
// Having these centralized makes it easy to change colors, spacing, etc.

export const COLORS = {
  // Primary brand colors
  primary: '#6366F1',      // Indigo - main action color
  primaryLight: '#818CF8',
  primaryDark: '#4F46E5',

  // Semantic colors
  success: '#10B981',      // Green - completed tasks
  warning: '#F59E0B',      // Amber - due soon
  error: '#EF4444',        // Red - overdue/errors

  // Neutrals
  background: '#F9FAFB',   // Light gray background
  surface: '#FFFFFF',      // Card/modal backgrounds
  text: '#111827',         // Primary text
  textSecondary: '#6B7280', // Secondary/muted text
  border: '#E5E7EB',       // Borders and dividers

  // Dark mode (we'll use these later)
  dark: {
    background: '#111827',
    surface: '#1F2937',
    text: '#F9FAFB',
    textSecondary: '#9CA3AF',
    border: '#374151',
  },
};

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const FONT_SIZES = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 24,
  xxl: 32,
};

export const BORDER_RADIUS = {
  sm: 4,
  md: 8,
  lg: 12,
  full: 9999,
};
