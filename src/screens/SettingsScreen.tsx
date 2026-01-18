import { View, Text, StyleSheet, Switch, Pressable } from 'react-native';
import { useState } from 'react';
import { COLORS, SPACING, FONT_SIZES, BORDER_RADIUS } from '../constants';

// ============================================================
// SETTINGS SCREEN
// ============================================================
//
// This is a placeholder for now. In future modules we'll add:
// - Dark mode toggle (Module 9)
// - Account settings (Module 5 - Auth)
// - Notification preferences (Module 8)
// - About/version info
// ============================================================

export function SettingsScreen() {
  // Local state for demo toggles
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  return (
    <View style={styles.container}>
      {/* Settings sections */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferences</Text>

        {/* Toggle row component */}
        <View style={styles.row}>
          <View style={styles.rowContent}>
            <Text style={styles.rowLabel}>Notifications</Text>
            <Text style={styles.rowDescription}>
              Get reminders for upcoming tasks
            </Text>
          </View>
          <Switch
            value={notificationsEnabled}
            onValueChange={setNotificationsEnabled}
            trackColor={{ false: COLORS.border, true: COLORS.primary + '50' }}
            thumbColor={notificationsEnabled ? COLORS.primary : '#f4f3f4'}
          />
        </View>

        <View style={styles.row}>
          <View style={styles.rowContent}>
            <Text style={styles.rowLabel}>Dark Mode</Text>
            <Text style={styles.rowDescription}>
              Coming in Module 9
            </Text>
          </View>
          <Switch
            value={darkModeEnabled}
            onValueChange={setDarkModeEnabled}
            trackColor={{ false: COLORS.border, true: COLORS.primary + '50' }}
            thumbColor={darkModeEnabled ? COLORS.primary : '#f4f3f4'}
            disabled // Not implemented yet
          />
        </View>
      </View>

      {/* Account section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>

        <Pressable
          style={({ pressed }) => [styles.row, pressed && styles.rowPressed]}
          onPress={() => console.log('Profile pressed')}
        >
          <View style={styles.rowContent}>
            <Text style={styles.rowLabel}>Profile</Text>
            <Text style={styles.rowDescription}>
              Coming in Module 5 (Auth)
            </Text>
          </View>
          <Text style={styles.chevron}>›</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [styles.row, styles.rowLast, pressed && styles.rowPressed]}
          onPress={() => console.log('Sign out pressed')}
        >
          <View style={styles.rowContent}>
            <Text style={[styles.rowLabel, { color: COLORS.error }]}>
              Sign Out
            </Text>
          </View>
        </Pressable>
      </View>

      {/* App info */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>TaskFlow v1.0.0</Text>
        <Text style={styles.footerText}>Module 3: Navigation</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingTop: SPACING.lg,
  },
  section: {
    backgroundColor: COLORS.surface,
    marginHorizontal: SPACING.lg,
    marginBottom: SPACING.lg,
    borderRadius: BORDER_RADIUS.lg,
    overflow: 'hidden',
  },
  sectionTitle: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.lg,
    paddingBottom: SPACING.sm,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.lg,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  rowLast: {
    borderBottomWidth: 0,
  },
  rowPressed: {
    backgroundColor: COLORS.background,
  },
  rowContent: {
    flex: 1,
  },
  rowLabel: {
    fontSize: FONT_SIZES.md,
    color: COLORS.text,
    fontWeight: '500',
  },
  rowDescription: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.textSecondary,
    marginTop: 2,
  },
  chevron: {
    fontSize: FONT_SIZES.xl,
    color: COLORS.textSecondary,
  },
  footer: {
    alignItems: 'center',
    marginTop: 'auto',
    paddingBottom: SPACING.xl,
  },
  footerText: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.textSecondary,
  },
});
