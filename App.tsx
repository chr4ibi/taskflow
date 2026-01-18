import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { COLORS, SPACING, FONT_SIZES } from './src/constants';

// App.tsx is the root component - everything starts here
// In React Native, there's no index.html. This IS your app.

export default function App() {
  return (
    // SafeAreaView prevents content from being hidden by notches, status bars, etc.
    // On iPhone, this adds padding for the notch. On Android, it handles the status bar.
    // ALWAYS wrap your root component in SafeAreaView for proper display.
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header section */}
        <View style={styles.header}>
          <Text style={styles.title}>TaskFlow</Text>
          <Text style={styles.subtitle}>Your tasks, organized</Text>
        </View>

        {/* Welcome card - demonstrates View as a container */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Welcome!</Text>
          <Text style={styles.cardText}>
            This is your task management app. We'll build features step by step.
          </Text>
        </View>

        {/* Stats preview - demonstrates flexDirection: 'row' */}
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>0</Text>
            <Text style={styles.statLabel}>Tasks</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>0</Text>
            <Text style={styles.statLabel}>Completed</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>0</Text>
            <Text style={styles.statLabel}>Pending</Text>
          </View>
        </View>

        {/* Module indicator */}
        <View style={styles.moduleIndicator}>
          <Text style={styles.moduleText}>Module 1: Setup Complete</Text>
        </View>
      </View>

      {/* StatusBar controls the system status bar appearance */}
      {/* 'dark' = dark text for light backgrounds */}
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

// StyleSheet.create() is like CSS but as JavaScript objects
// Key differences from CSS:
// 1. camelCase instead of kebab-case (backgroundColor, not background-color)
// 2. No units - numbers are density-independent pixels (dp)
// 3. Flexbox is the ONLY layout system (no grid, no floats)
// 4. flexDirection defaults to 'column' (not 'row' like web)

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,                           // Take up all available space
    backgroundColor: COLORS.background,
  },
  container: {
    flex: 1,
    paddingHorizontal: SPACING.lg,     // Horizontal padding only
    paddingTop: SPACING.lg,
  },
  header: {
    marginBottom: SPACING.xl,
  },
  title: {
    fontSize: FONT_SIZES.xxl,
    fontWeight: 'bold',                // React Native uses string values for fontWeight
    color: COLORS.text,
  },
  subtitle: {
    fontSize: FONT_SIZES.md,
    color: COLORS.textSecondary,
    marginTop: SPACING.xs,
  },
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: 12,
    padding: SPACING.lg,
    marginBottom: SPACING.lg,
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Shadow for Android (elevation)
    elevation: 3,
  },
  cardTitle: {
    fontSize: FONT_SIZES.lg,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: SPACING.sm,
  },
  cardText: {
    fontSize: FONT_SIZES.md,
    color: COLORS.textSecondary,
    lineHeight: 22,                    // Line height is a number, not a string
  },
  statsContainer: {
    flexDirection: 'row',              // Override default column direction
    justifyContent: 'space-between',   // Spread items evenly
    marginBottom: SPACING.xl,
  },
  statBox: {
    flex: 1,                           // Each box takes equal space
    backgroundColor: COLORS.surface,
    borderRadius: 12,
    padding: SPACING.md,
    marginHorizontal: SPACING.xs,
    alignItems: 'center',              // Center children horizontally
    // Shadows
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  statNumber: {
    fontSize: FONT_SIZES.xl,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  statLabel: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.textSecondary,
    marginTop: SPACING.xs,
  },
  moduleIndicator: {
    backgroundColor: COLORS.primary,
    borderRadius: 20,
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.lg,
    alignSelf: 'center',               // Center this specific element
    marginTop: 'auto',                 // Push to bottom
    marginBottom: SPACING.lg,
  },
  moduleText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: FONT_SIZES.sm,
  },
});
