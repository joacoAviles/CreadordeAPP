# Maqueta genérica de app (Fullstack + Google Login)

Plantilla base creada con **Next.js + NextAuth** que incluye:

- Home pública.
- Login con Google.
- Dashboard privado con menú lateral.
- Sección de perfil (editable).
- Sección de configuración.
- Endpoint backend protegido (`/api/profile`).

## 1) Requisitos

- Node.js 20+
- Credenciales OAuth de Google

## 2) Configuración rápida

1. Instala dependencias:
   ```bash
   npm install
   ```
2. Crea variables de entorno:
   ```bash
   cp .env.example .env.local
   ```
3. Completa `GOOGLE_CLIENT_ID` y `GOOGLE_CLIENT_SECRET` en `.env.local`.
4. Ejecuta en desarrollo:
   ```bash
   npm run dev
   ```

## 3) Flujo de la app

- `/` → Home con acceso a login/dashboard.
- `/login` → Iniciar sesión con Google.
- `/dashboard` → Home interna con estructura general.
- `/dashboard/perfil` → Configuración del perfil.
- `/dashboard/configuracion` → Ajustes globales.

## 4) Backend incluido

Se incluye el endpoint `GET/PUT /api/profile` protegido por sesión.
Actualmente usa almacenamiento en memoria (`lib/profile-store.ts`) para maqueta.
