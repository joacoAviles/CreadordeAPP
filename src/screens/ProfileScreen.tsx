import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Card, Text } from 'react-native-paper';
import { useApp } from '../context/AppContext';
import { t } from '../config/i18n';

export default function ProfileScreen() {
  const { user, language } = useApp();

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content style={styles.content}>
          <Avatar.Text size={72} label="JA" />
          <Text variant="headlineSmall" style={styles.name}>
            {user?.name}
          </Text>
          <Text variant="bodyLarge">
            {t(language, 'email')}: {user?.email}
          </Text>
          <Text variant="bodyMedium" style={styles.about}>
            {t(language, 'aboutProfile')}: usuario demo para maqueta replicable.
          </Text>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    borderRadius: 20,
  },
  content: {
    alignItems: 'center',
    gap: 14,
    paddingVertical: 20,
  },
  name: {
    marginTop: 8,
  },
  about: {
    textAlign: 'center',
    opacity: 0.8,
  },
});
