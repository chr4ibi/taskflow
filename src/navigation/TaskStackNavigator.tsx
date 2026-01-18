import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TaskListScreen, TaskDetailScreen } from '../screens';
import { TaskStackParamList } from '../types';
import { COLORS } from '../constants';

// ============================================================
// STACK NAVIGATOR
// ============================================================
//
// createNativeStackNavigator<ParamList>() creates a typed navigator.
// It returns { Navigator, Screen } components.
//
// Stack navigation = screens push on top of each other:
// - navigate('TaskDetail', { task }) pushes TaskDetail on top
// - goBack() pops the top screen off
// - Swipe from left edge (iOS) or back button pops automatically
// ============================================================

const Stack = createNativeStackNavigator<TaskStackParamList>();

export function TaskStackNavigator() {
  return (
    <Stack.Navigator
      // Default options for all screens in this stack
      screenOptions={{
        // Header styling
        headerStyle: {
          backgroundColor: COLORS.background,
        },
        headerTintColor: COLORS.primary,  // Back button and title color
        headerTitleStyle: {
          fontWeight: '600',
          color: COLORS.text,
        },
        headerShadowVisible: false,       // Remove header border/shadow

        // iOS-specific: large title that shrinks on scroll
        headerLargeTitle: false,

        // Animation
        animation: 'slide_from_right',    // iOS-style push animation
      }}
    >
      {/* TaskList is the initial/default screen */}
      <Stack.Screen
        name="TaskList"
        component={TaskListScreen}
        options={{
          title: 'Tasks',
          headerShown: false,  // We have our own header in the screen
        }}
      />

      {/* TaskDetail shows when user taps a task */}
      <Stack.Screen
        name="TaskDetail"
        component={TaskDetailScreen}
        options={({ route }) => ({
          // Dynamic title from the task
          title: route.params.task.title,
          // Truncate long titles
          headerTitleStyle: {
            fontWeight: '600',
            color: COLORS.text,
            maxWidth: 200,
          },
        })}
      />
    </Stack.Navigator>
  );
}
