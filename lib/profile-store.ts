export type UserProfile = {
  fullName: string;
  role: string;
  phone: string;
  company: string;
  timezone: string;
  language: string;
};

const profiles = new Map<string, UserProfile>();

const defaultProfile: UserProfile = {
  fullName: '',
  role: 'Administrador',
  phone: '',
  company: '',
  timezone: 'UTC',
  language: 'es'
};

export function getProfile(userId: string): UserProfile {
  if (!profiles.has(userId)) {
    profiles.set(userId, defaultProfile);
  }
  return profiles.get(userId)!;
}

export function updateProfile(userId: string, payload: Partial<UserProfile>): UserProfile {
  const current = getProfile(userId);
  const updated = {
    ...current,
    ...payload
  };
  profiles.set(userId, updated);
  return updated;
}
