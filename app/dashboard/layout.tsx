import { ReactNode } from 'react';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '@/lib/auth';
import { Sidebar } from '@/components/sidebar';

export default async function DashboardLayout({ children }: { children: ReactNode }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/login');
  }

  return (
    <main style={{ maxWidth: 1200, margin: '0 auto', padding: '1.5rem' }}>
      <header className="card" style={{ marginBottom: '1rem' }}>
        <h1 style={{ margin: 0 }}>Panel principal</h1>
        <p style={{ marginBottom: 0, color: 'var(--muted)' }}>
          Bienvenido/a {session.user?.name || session.user?.email}
        </p>
      </header>
      <section style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
        <Sidebar />
        <div style={{ flex: 1 }}>{children}</div>
      </section>
    </main>
  );
}
