import { MD3LightTheme, MD3DarkTheme } from 'react-native-paper';
import { branding } from './branding';

export type ThemeMode = 'light' | 'dark';

export function getPaperTheme(mode: ThemeMode) {
  const base = mode === 'dark' ? MD3DarkTheme : MD3LightTheme;

  return {
    ...base,
    colors: {
      ...base.colors,
      primary: branding.colors.primary,
      secondary: branding.colors.accent,
      background:
        mode === 'dark'
          ? branding.colors.backgroundDark
          : branding.colors.backgroundLight,
      surface:
        mode === 'dark'
          ? branding.colors.surfaceDark
          : branding.colors.surfaceLight,
      onSurface:
        mode === 'dark' ? branding.colors.textDark : branding.colors.textLight,
    },
  };
}
