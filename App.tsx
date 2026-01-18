import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { AppNavigator } from './src/navigation';

// ============================================================
// APP ROOT WITH NAVIGATION
// ============================================================
//
// NavigationContainer is the root component for React Navigation.
// It manages the navigation state and links your app to the navigator.
//
// Think of it like BrowserRouter in React Router - it must wrap
// everything that needs access to navigation.
//
// The hierarchy is now:
// App
// └── NavigationContainer
//     └── AppNavigator (Tab Navigator)
//         ├── TaskStackNavigator
//         │   ├── TaskListScreen
//         │   └── TaskDetailScreen
//         └── SettingsScreen
// ============================================================

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
      <StatusBar style="dark" />
    </NavigationContainer>
  );
}
