import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TaskStackParamList } from '../types';
import { COLORS, SPACING, FONT_SIZES, BORDER_RADIUS } from '../constants';
import { getCategoryById } from '../data/mockTasks';

// ============================================================
// TYPED SCREEN PROPS
// ============================================================
//
// NativeStackScreenProps<ParamList, ScreenName> gives you:
// - route: { params: { task: Task } } - typed params
// - navigation: typed navigation object with correct methods
//
// This is how every screen component should be typed.
// ============================================================

type Props = NativeStackScreenProps<TaskStackParamList, 'TaskDetail'>;

export function TaskDetailScreen({ route, navigation }: Props) {
  // Extract task from route params - fully typed!
  const { task } = route.params;
  const category = getCategoryById(task.category_id);

  // Format dates for display
  const createdDate = new Date(task.created_at).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const dueDate = task.due_date
    ? new Date(task.due_date).toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
      })
    : null;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Status badge */}
      <View style={styles.statusContainer}>
        <View
          style={[
            styles.statusBadge,
            task.completed ? styles.statusCompleted : styles.statusPending,
          ]}
        >
          <Text
            style={[
              styles.statusText,
              task.completed ? styles.statusTextCompleted : styles.statusTextPending,
            ]}
          >
            {task.completed ? '✓ Completed' : '○ Pending'}
          </Text>
        </View>
      </View>

      {/* Title */}
      <Text style={styles.title}>{task.title}</Text>

      {/* Category */}
      {category && (
        <View style={styles.categoryContainer}>
          <View
            style={[styles.categoryDot, { backgroundColor: category.color }]}
          />
          <Text style={[styles.categoryText, { color: category.color }]}>
            {category.name}
          </Text>
        </View>
      )}

      {/* Description */}
      {task.description && (
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Description</Text>
          <Text style={styles.description}>{task.description}</Text>
        </View>
      )}

      {/* Due date */}
      {dueDate && (
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Due Date</Text>
          <Text style={styles.dueDate}>{dueDate}</Text>
        </View>
      )}

      {/* Metadata */}
      <View style={styles.section}>
        <Text style={styles.sectionLabel}>Created</Text>
        <Text style={styles.metadata}>{createdDate}</Text>
      </View>

      {/* Action buttons - placeholder for future functionality */}
      <View style={styles.actions}>
        <Pressable
          style={({ pressed }) => [
            styles.actionButton,
            styles.editButton,
            pressed && styles.buttonPressed,
          ]}
          onPress={() => {
            // TODO: Navigate to edit screen in future module
            console.log('Edit task:', task.id);
          }}
        >
          <Text style={styles.editButtonText}>Edit Task</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.actionButton,
            styles.deleteButton,
            pressed && styles.buttonPressed,
          ]}
          onPress={() => {
            // TODO: Delete task with confirmation in future module
            console.log('Delete task:', task.id);
            navigation.goBack();
          }}
        >
          <Text style={styles.deleteButtonText}>Delete</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    padding: SPACING.lg,
  },
  statusContainer: {
    marginBottom: SPACING.md,
  },
  statusBadge: {
    alignSelf: 'flex-start',
    paddingVertical: SPACING.xs,
    paddingHorizontal: SPACING.md,
    borderRadius: BORDER_RADIUS.full,
  },
  statusCompleted: {
    backgroundColor: COLORS.success + '20',
  },
  statusPending: {
    backgroundColor: COLORS.primary + '20',
  },
  statusText: {
    fontSize: FONT_SIZES.sm,
    fontWeight: '600',
  },
  statusTextCompleted: {
    color: COLORS.success,
  },
  statusTextPending: {
    color: COLORS.primary,
  },
  title: {
    fontSize: FONT_SIZES.xxl,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: SPACING.sm,
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.lg,
  },
  categoryDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: SPACING.sm,
  },
  categoryText: {
    fontSize: FONT_SIZES.md,
    fontWeight: '500',
  },
  section: {
    backgroundColor: COLORS.surface,
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.lg,
    marginBottom: SPACING.md,
  },
  sectionLabel: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.textSecondary,
    marginBottom: SPACING.xs,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  description: {
    fontSize: FONT_SIZES.md,
    color: COLORS.text,
    lineHeight: 24,
  },
  dueDate: {
    fontSize: FONT_SIZES.lg,
    color: COLORS.text,
    fontWeight: '500',
  },
  metadata: {
    fontSize: FONT_SIZES.md,
    color: COLORS.text,
  },
  actions: {
    flexDirection: 'row',
    gap: SPACING.md,
    marginTop: SPACING.lg,
  },
  actionButton: {
    flex: 1,
    paddingVertical: SPACING.md,
    borderRadius: BORDER_RADIUS.lg,
    alignItems: 'center',
  },
  buttonPressed: {
    opacity: 0.7,
  },
  editButton: {
    backgroundColor: COLORS.primary,
  },
  editButtonText: {
    color: '#FFFFFF',
    fontSize: FONT_SIZES.md,
    fontWeight: '600',
  },
  deleteButton: {
    backgroundColor: COLORS.error + '15',
    borderWidth: 1,
    borderColor: COLORS.error,
  },
  deleteButtonText: {
    color: COLORS.error,
    fontSize: FONT_SIZES.md,
    fontWeight: '600',
  },
});
