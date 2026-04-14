import React, { createContext, useContext, useMemo, useState } from 'react';
import { Language } from '../config/i18n';
import { ThemeMode } from '../config/theme';

type User = {
  name: string;
  email: string;
};

type AppContextType = {
  isLoggedIn: boolean;
  user: User | null;
  themeMode: ThemeMode;
  language: Language;
  login: () => void;
  logout: () => void;
  toggleTheme: () => void;
  setLanguage: (lang: Language) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [themeMode, setThemeMode] = useState<ThemeMode>('light');
  const [language, setLanguage] = useState<Language>('es');
  const [user, setUser] = useState<User | null>(null);

  const value = useMemo(
    () => ({
      isLoggedIn,
      user,
      themeMode,
      language,
      login: () => {
        setUser({
          name: 'Joaquín Avilés',
          email: 'joaquin@aviles.cl',
        });
        setIsLoggedIn(true);
      },
      logout: () => {
        setUser(null);
        setIsLoggedIn(false);
      },
      toggleTheme: () => {
        setThemeMode((prev) => (prev === 'light' ? 'dark' : 'light'));
      },
      setLanguage,
    }),
    [isLoggedIn, user, themeMode, language]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used inside AppProvider');
  return ctx;
}
