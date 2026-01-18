import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, StyleSheet } from 'react-native';
import { TaskStackNavigator } from './TaskStackNavigator';
import { SettingsScreen } from '../screens';
import { RootTabParamList } from '../types';
import { COLORS, SPACING, FONT_SIZES } from '../constants';

// ============================================================
// TAB NAVIGATOR
// ============================================================
//
// createBottomTabNavigator creates tabs at the bottom of the screen.
// Each tab can contain either:
// - A single screen component
// - A nested navigator (like our TaskStackNavigator)
//
// When you tap a tab, it shows that tab's content.
// Tabs maintain their state when you switch between them.
// ============================================================

const Tab = createBottomTabNavigator<RootTabParamList>();

// Simple icon components (we'll use proper icons in Module 9)
// For now, using emoji/text as placeholders
function TabIcon({ name, focused }: { name: 'tasks' | 'settings'; focused: boolean }) {
  const icons = {
    tasks: '☑',
    settings: '⚙',
  };

  return (
    <View style={styles.iconContainer}>
      <Text style={[styles.icon, focused && styles.iconFocused]}>
        {icons[name]}
      </Text>
    </View>
  );
}

export function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        // Tab bar styling
        tabBarStyle: {
          backgroundColor: COLORS.surface,
          borderTopColor: COLORS.border,
          borderTopWidth: 1,
          paddingTop: SPACING.xs,
          height: 85,  // Taller for comfortable tapping
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.textSecondary,
        tabBarLabelStyle: {
          fontSize: FONT_SIZES.xs,
          fontWeight: '500',
          marginTop: SPACING.xs,
        },

        // Hide the header from the tab navigator
        // (each stack/screen manages its own header)
        headerShown: false,
      }}
    >
      {/* Tasks Tab - contains the TaskStackNavigator */}
      <Tab.Screen
        name="TasksTab"
        component={TaskStackNavigator}
        options={{
          tabBarLabel: 'Tasks',
          tabBarIcon: ({ focused }) => <TabIcon name="tasks" focused={focused} />,
        }}
      />

      {/* Settings Tab - single screen */}
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ focused }) => <TabIcon name="settings" focused={focused} />,
          // Show header for Settings since it doesn't have its own
          headerShown: true,
          headerStyle: {
            backgroundColor: COLORS.background,
          },
          headerTitleStyle: {
            fontWeight: '600',
            color: COLORS.text,
          },
          headerShadowVisible: false,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 24,
    color: COLORS.textSecondary,
  },
  iconFocused: {
    color: COLORS.primary,
  },
});
