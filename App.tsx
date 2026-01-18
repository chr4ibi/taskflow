import { TaskListScreen } from './src/screens';

// App.tsx is the root component - everything starts here
// In React Native, there's no index.html. This IS your app.
//
// Currently we're rendering TaskListScreen directly.
// In Module 3, we'll add React Navigation here to handle multiple screens.

export default function App() {
  return <TaskListScreen />;
}
