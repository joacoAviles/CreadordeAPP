'use client';

import { FormEvent, useEffect, useState } from 'react';

type Profile = {
  fullName: string;
  role: string;
  phone: string;
  company: string;
  timezone: string;
  language: string;
};

const initialProfile: Profile = {
  fullName: '',
  role: 'Administrador',
  phone: '',
  company: '',
  timezone: 'UTC',
  language: 'es'
};

export function ProfileForm() {
  const [profile, setProfile] = useState<Profile>(initialProfile);
  const [status, setStatus] = useState<string>('');

  useEffect(() => {
    const load = async () => {
      const response = await fetch('/api/profile');
      if (response.ok) {
        const data = await response.json();
        setProfile(data);
      }
    };

    load();
  }, []);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('Guardando...');

    const response = await fetch('/api/profile', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(profile)
    });

    if (response.ok) {
      setStatus('Perfil actualizado correctamente.');
    } else {
      setStatus('Error al actualizar el perfil.');
    }
  };

  return (
    <form className="card" onSubmit={onSubmit}>
      <h2 style={{ marginTop: 0 }}>Configuración del perfil</h2>
      <div style={{ display: 'grid', gap: '0.8rem' }}>
        {[
          { key: 'fullName', label: 'Nombre completo' },
          { key: 'role', label: 'Rol' },
          { key: 'phone', label: 'Teléfono' },
          { key: 'company', label: 'Empresa' },
          { key: 'timezone', label: 'Zona horaria' },
          { key: 'language', label: 'Idioma' }
        ].map((field) => (
          <label key={field.key} style={{ display: 'grid', gap: '0.2rem' }}>
            <span style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>{field.label}</span>
            <input
              value={profile[field.key as keyof Profile]}
              onChange={(e) =>
                setProfile((prev) => ({
                  ...prev,
                  [field.key]: e.target.value
                }))
              }
              style={{
                padding: '0.55rem',
                borderRadius: 8,
                border: '1px solid var(--border)',
                background: 'white'
              }}
            />
          </label>
        ))}
      </div>
      <button type="submit" className="button button-primary" style={{ marginTop: '1rem' }}>
        Guardar cambios
      </button>
      <p style={{ marginBottom: 0, color: 'var(--muted)' }}>{status}</p>
    </form>
  );
}
