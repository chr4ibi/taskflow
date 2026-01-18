import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Task, Category } from '../types';
import { COLORS, SPACING, FONT_SIZES, BORDER_RADIUS } from '../constants';

// Props interface - TypeScript ensures we pass the right data
interface TaskItemProps {
  task: Task;
  category?: Category;
  onPress: (task: Task) => void;
  onToggleComplete: (task: Task) => void;
}

// ============================================================
// COMPONENT EXPLANATION
// ============================================================
//
// Pressable vs TouchableOpacity:
// - TouchableOpacity: Old way, reduces opacity on press
// - Pressable: New (recommended), more flexible, supports hover on web
//
// Pressable gives you a function that receives { pressed } state,
// letting you customize the pressed appearance however you want.
// ============================================================

export function TaskItem({ task, category, onPress, onToggleComplete }: TaskItemProps) {
  return (
    // Pressable wraps the entire card to make it tappable
    // The style prop can be a function that receives pressed state
    <Pressable
      onPress={() => onPress(task)}
      style={({ pressed }) => [
        styles.container,
        pressed && styles.pressed, // Apply pressed style when touching
      ]}
    >
      {/* Checkbox area - separate Pressable for toggle action */}
      <Pressable
        onPress={() => onToggleComplete(task)}
        style={styles.checkboxContainer}
        // hitSlop increases the touchable area without changing visual size
        // Great for small touch targets - makes it easier to tap
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        <View
          style={[
            styles.checkbox,
            task.completed && styles.checkboxChecked,
          ]}
        >
          {/* Show checkmark when completed */}
          {task.completed && <Text style={styles.checkmark}>✓</Text>}
        </View>
      </Pressable>

      {/* Task content */}
      <View style={styles.content}>
        {/* Title - crossed out if completed */}
        <Text
          style={[
            styles.title,
            task.completed && styles.titleCompleted,
          ]}
          numberOfLines={1} // Truncate long titles with "..."
        >
          {task.title}
        </Text>

        {/* Description - only show if exists */}
        {task.description && (
          <Text
            style={styles.description}
            numberOfLines={2}
          >
            {task.description}
          </Text>
        )}

        {/* Bottom row: category badge and due date */}
        <View style={styles.meta}>
          {/* Category badge */}
          {category && (
            <View
              style={[
                styles.categoryBadge,
                { backgroundColor: category.color + '20' }, // 20 = 12% opacity in hex
              ]}
            >
              <View
                style={[
                  styles.categoryDot,
                  { backgroundColor: category.color },
                ]}
              />
              <Text
                style={[
                  styles.categoryText,
                  { color: category.color },
                ]}
              >
                {category.name}
              </Text>
            </View>
          )}

          {/* Due date */}
          {task.due_date && (
            <Text style={styles.dueDate}>
              {formatDueDate(task.due_date)}
            </Text>
          )}
        </View>
      </View>
    </Pressable>
  );
}

// Helper function to format the due date
function formatDueDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffDays = Math.ceil((date.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

  if (diffDays < 0) return 'Overdue';
  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return 'Tomorrow';
  if (diffDays < 7) return `In ${diffDays} days`;

  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

// ============================================================
// STYLES
// ============================================================
// Notice how we can combine static styles with dynamic ones:
// style={[styles.checkbox, task.completed && styles.checkboxChecked]}
//
// The array syntax merges styles. Falsy values are ignored.
// ============================================================

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',        // Horizontal layout: checkbox | content
    backgroundColor: COLORS.surface,
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.md,
    marginBottom: SPACING.sm,
    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    // Android shadow
    elevation: 1,
  },
  pressed: {
    opacity: 0.7,                // Dim when pressed for feedback
    transform: [{ scale: 0.98 }], // Slight shrink effect
  },
  checkboxContainer: {
    justifyContent: 'flex-start', // Align to top
    paddingTop: 2,
    paddingRight: SPACING.md,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: BORDER_RADIUS.sm,
    borderWidth: 2,
    borderColor: COLORS.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxChecked: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  checkmark: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,                     // Take remaining space
  },
  title: {
    fontSize: FONT_SIZES.md,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: SPACING.xs,
  },
  titleCompleted: {
    textDecorationLine: 'line-through',
    color: COLORS.textSecondary,
  },
  description: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.textSecondary,
    marginBottom: SPACING.sm,
    lineHeight: 20,
  },
  meta: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',            // Wrap to next line if needed
    gap: SPACING.sm,             // Gap between items (RN 0.71+)
  },
  categoryBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: SPACING.xs,
    paddingHorizontal: SPACING.sm,
    borderRadius: BORDER_RADIUS.full,
  },
  categoryDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: SPACING.xs,
  },
  categoryText: {
    fontSize: FONT_SIZES.xs,
    fontWeight: '500',
  },
  dueDate: {
    fontSize: FONT_SIZES.xs,
    color: COLORS.textSecondary,
  },
});
