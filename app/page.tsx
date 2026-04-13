import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export default async function HomePage() {
  const session = await getServerSession(authOptions);

  return (
    <main style={{ padding: '2rem', maxWidth: 960, margin: '0 auto' }}>
      <section className="card" style={{ marginTop: '2rem' }}>
        <h1 style={{ marginTop: 0 }}>Maqueta de App Genérica (Fullstack)</h1>
        <p>
          Incluye landing, autenticación con Google, dashboard con menú lateral,
          configuración de perfil y endpoints backend protegidos.
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
          {!session ? (
            <Link className="button button-primary" href="/login">
              Ir a Login
            </Link>
          ) : (
            <Link className="button button-primary" href="/dashboard">
              Ir al Dashboard
            </Link>
          )}
          <a
            className="button button-outline"
            href="https://next-auth.js.org/providers/google"
            target="_blank"
            rel="noreferrer"
          >
            Configurar Google OAuth
          </a>
        </div>
      </section>
    </main>
  );
}
