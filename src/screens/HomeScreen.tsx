import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';
import { branding } from '../config/branding';
import { useApp } from '../context/AppContext';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  const { user } = useApp();

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Image source={{ uri: branding.heroImage }} style={styles.image} />
        <Card.Content>
          <Text variant="headlineSmall" style={styles.title}>
            {branding.welcomeTitle}
          </Text>
          <Text variant="bodyMedium" style={styles.subtitle}>
            {branding.welcomeSubtitle}
          </Text>
          <Text variant="bodyMedium" style={styles.user}>
            {user?.name} · {user?.email}
          </Text>
        </Card.Content>
      </Card>

      <Button mode="contained" onPress={() => navigation.navigate('Profile')} style={styles.button}>
        Ir al perfil
      </Button>

      <Button mode="outlined" onPress={() => navigation.navigate('Settings')} style={styles.button}>
        Ir a configuración
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
  card: {
    borderRadius: 20,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 220,
  },
  title: {
    marginTop: 14,
    marginBottom: 6,
  },
  subtitle: {
    marginBottom: 10,
  },
  user: {
    opacity: 0.8,
  },
  button: {
    marginTop: 4,
  },
});
