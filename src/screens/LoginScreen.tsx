import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';
import { branding } from '../config/branding';
import { useApp } from '../context/AppContext';
import { t } from '../config/i18n';

export default function LoginScreen() {
  const { login, language } = useApp();

  return (
    <ImageBackground source={{ uri: branding.heroImage }} style={styles.bg}>
      <View style={styles.overlay}>
        <Card style={styles.card}>
          <Card.Content>
            <Text variant="headlineMedium" style={styles.title}>
              {t(language, 'loginTitle')}
            </Text>
            <Text variant="bodyMedium" style={styles.subtitle}>
              {t(language, 'loginSubtitle')}
            </Text>
            <Button mode="contained" onPress={login} style={styles.button}>
              {t(language, 'loginButton')}
            </Button>
          </Card.Content>
        </Card>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1 },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(15,23,42,0.45)',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    borderRadius: 20,
    paddingVertical: 10,
  },
  title: {
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    marginTop: 8,
  },
});
