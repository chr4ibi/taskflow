import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Alert,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { TaskItem } from '../components/TaskItem';
import { MOCK_TASKS, MOCK_CATEGORIES, getCategoryById } from '../data/mockTasks';
import { Task } from '../types';
import { COLORS, SPACING, FONT_SIZES } from '../constants';

// ============================================================
// FLATLIST EXPLAINED
// ============================================================
//
// FlatList is THE way to render lists in React Native.
//
// Required props:
// - data: Array of items to render
// - renderItem: Function that returns a component for each item
// - keyExtractor: Function that returns a unique key for each item
//
// Why keyExtractor?
// React needs unique keys to track which items changed/moved.
// On web you use key={} prop. Here it's a separate function.
//
// Common optional props:
// - ListHeaderComponent: Rendered at top (above all items)
// - ListEmptyComponent: Shown when data is empty
// - ItemSeparatorComponent: Rendered between items
// - onRefresh + refreshing: Pull-to-refresh
// - contentContainerStyle: Style for the scroll content
// ============================================================

export function TaskListScreen() {
  // Local state for tasks - we'll toggle completion here
  // Later this will come from Supabase with real-time updates
  const [tasks, setTasks] = useState<Task[]>(MOCK_TASKS);

  // Handler for tapping a task (will navigate to detail screen in Module 3)
  const handleTaskPress = (task: Task) => {
    // Alert is React Native's built-in dialog - works on both platforms
    Alert.alert(
      task.title,
      task.description || 'No description',
      [{ text: 'OK' }]
    );
  };

  // Handler for toggling task completion
  const handleToggleComplete = (task: Task) => {
    setTasks(currentTasks =>
      currentTasks.map(t =>
        t.id === task.id
          ? { ...t, completed: !t.completed }
          : t
      )
    );
  };

  // Calculate stats
  const completedCount = tasks.filter(t => t.completed).length;
  const pendingCount = tasks.filter(t => !t.completed).length;

  // Header component - rendered once at the top of the list
  const ListHeader = () => (
    <View style={styles.header}>
      <Text style={styles.greeting}>Good morning!</Text>
      <Text style={styles.title}>Your Tasks</Text>

      {/* Stats row */}
      <View style={styles.statsRow}>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>{tasks.length}</Text>
          <Text style={styles.statLabel}>Total</Text>
        </View>
        <View style={styles.stat}>
          <Text style={[styles.statNumber, { color: COLORS.success }]}>
            {completedCount}
          </Text>
          <Text style={styles.statLabel}>Done</Text>
        </View>
        <View style={styles.stat}>
          <Text style={[styles.statNumber, { color: COLORS.primary }]}>
            {pendingCount}
          </Text>
          <Text style={styles.statLabel}>Pending</Text>
        </View>
      </View>
    </View>
  );

  // Empty state - shown when no tasks
  const ListEmpty = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>No tasks yet!</Text>
      <Text style={styles.emptySubtext}>
        Tap the + button to create your first task
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        // === Required Props ===
        data={tasks}
        keyExtractor={(item) => item.id}  // Must return a string
        renderItem={({ item }) => (
          // renderItem receives an object with { item, index, separators }
          // Most of the time you only need item
          <TaskItem
            task={item}
            category={getCategoryById(item.category_id)}
            onPress={handleTaskPress}
            onToggleComplete={handleToggleComplete}
          />
        )}

        // === Optional Props ===
        ListHeaderComponent={ListHeader}
        ListEmptyComponent={ListEmpty}

        // Style the scrollable content area
        // Note: padding goes here, not on FlatList itself
        contentContainerStyle={styles.listContent}

        // Show scrollbar (default is true on iOS, varies on Android)
        showsVerticalScrollIndicator={false}

        // Performance optimization: tell FlatList items are all same height
        // This helps it calculate scroll position faster
        // getItemLayout={(data, index) => ({
        //   length: 100, // item height
        //   offset: 100 * index,
        //   index,
        // })}
      />

      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  listContent: {
    padding: SPACING.lg,
    // Important: when list is empty, this makes ListEmptyComponent
    // take up the full screen instead of collapsing
    flexGrow: 1,
  },
  header: {
    marginBottom: SPACING.lg,
  },
  greeting: {
    fontSize: FONT_SIZES.md,
    color: COLORS.textSecondary,
  },
  title: {
    fontSize: FONT_SIZES.xxl,
    fontWeight: 'bold',
    color: COLORS.text,
    marginTop: SPACING.xs,
  },
  statsRow: {
    flexDirection: 'row',
    marginTop: SPACING.lg,
    gap: SPACING.lg,
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: FONT_SIZES.xl,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  statLabel: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.textSecondary,
    marginTop: SPACING.xs,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 100,  // Offset from true center for better visual
  },
  emptyText: {
    fontSize: FONT_SIZES.lg,
    fontWeight: '600',
    color: COLORS.text,
  },
  emptySubtext: {
    fontSize: FONT_SIZES.md,
    color: COLORS.textSecondary,
    marginTop: SPACING.sm,
    textAlign: 'center',
  },
});
