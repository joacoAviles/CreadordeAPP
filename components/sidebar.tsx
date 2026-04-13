'use client';

import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { usePathname } from 'next/navigation';

const menu = [
  { href: '/dashboard', label: 'Inicio' },
  { href: '/dashboard/perfil', label: 'Perfil' },
  { href: '/dashboard/configuracion', label: 'Configuración' }
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="card"
      style={{ minWidth: 230, height: 'fit-content', position: 'sticky', top: 24 }}
    >
      <h3 style={{ marginTop: 0 }}>Menú</h3>
      <nav style={{ display: 'grid', gap: '0.5rem' }}>
        {menu.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="button"
              style={{
                display: 'block',
                background: active ? 'var(--surface-2)' : 'transparent',
                borderColor: 'var(--border)'
              }}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
      <button
        type="button"
        className="button button-outline"
        style={{ width: '100%', marginTop: '1rem' }}
        onClick={() => signOut({ callbackUrl: '/' })}
      >
        Cerrar sesión
      </button>
    </aside>
  );
}
