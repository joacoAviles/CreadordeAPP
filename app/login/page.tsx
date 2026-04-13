'use client';

import { signIn, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function LoginPage() {
  const { status } = useSession();

  if (status === 'authenticated') {
    redirect('/dashboard');
  }

  return (
    <main style={{ display: 'grid', placeItems: 'center', padding: '2rem' }}>
      <section className="card" style={{ width: '100%', maxWidth: 430 }}>
        <h1 style={{ marginTop: 0 }}>Iniciar sesión</h1>
        <p style={{ color: 'var(--muted)' }}>
          Accede con tu cuenta de Google para entrar al panel principal.
        </p>
        <button
          type="button"
          className="button button-primary"
          style={{ width: '100%', marginTop: '0.5rem' }}
          onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
        >
          Continuar con Google
        </button>
      </section>
    </main>
  );
}
