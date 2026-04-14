import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, SegmentedButtons, Switch, Text } from 'react-native-paper';
import { useApp } from '../context/AppContext';
import { t } from '../config/i18n';

export default function SettingsScreen() {
  const { themeMode, toggleTheme, language, setLanguage, logout } = useApp();

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text variant="titleMedium">{t(language, 'theme')}</Text>
        <Switch value={themeMode === 'dark'} onValueChange={toggleTheme} />
      </View>

      <Text variant="bodyMedium" style={styles.label}>
        {themeMode === 'dark' ? t(language, 'darkMode') : t(language, 'lightMode')}
      </Text>

      <Text variant="titleMedium" style={styles.section}>
        {t(language, 'language')}
      </Text>

      <SegmentedButtons
        value={language}
        onValueChange={(value) => setLanguage(value as 'es' | 'en')}
        buttons={[
          { value: 'es', label: 'Español' },
          { value: 'en', label: 'English' },
        ]}
      />

      <Button mode="contained-tonal" onPress={logout} style={styles.logout}>
        {t(language, 'logout')}
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 14,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    opacity: 0.8,
  },
  section: {
    marginTop: 12,
  },
  logout: {
    marginTop: 24,
  },
});
