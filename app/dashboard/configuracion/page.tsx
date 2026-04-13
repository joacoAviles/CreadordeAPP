export default function ConfiguracionPage() {
  return (
    <section className="card">
      <h2 style={{ marginTop: 0 }}>Configuración general</h2>
      <p>Espacio para parámetros globales de la app (branding, notificaciones, integraciones, etc.).</p>
      <div style={{ display: 'grid', gap: '0.5rem' }}>
        <label>
          <input type="checkbox" defaultChecked /> Notificaciones por correo
        </label>
        <label>
          <input type="checkbox" /> Modo mantenimiento
        </label>
        <label>
          <input type="checkbox" defaultChecked /> Registro de auditoría activo
        </label>
      </div>
    </section>
  );
}
