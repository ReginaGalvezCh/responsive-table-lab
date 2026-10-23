import React from 'react';

export type AppView = 'orders' | 'dashboard';

interface AppSidebarProps {
  activeView: AppView;
  onNavigate: (view: AppView) => void;
}

export const AppSidebar: React.FC<AppSidebarProps> = ({ activeView, onNavigate }) => {
  return (
    <aside className="app-sidebar" aria-label="Navegación principal">
      <div className="sidebar-brand">
        <div className="brand-logo" aria-hidden="true">NX</div>
        <div className="brand-info">
          <span className="brand-name">NexoOps</span>
          <span className="brand-tagline">Operaciones de Campo</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        <ul>
          <li>
            <button type="button" className={`nav-item ${activeView === 'orders' ? 'active' : ''}`} aria-current={activeView === 'orders' ? 'page' : undefined} onClick={() => onNavigate('orders')}>
              <span className="nav-icon" aria-hidden="true">📋</span>
              <span className="nav-label">Órdenes de Trabajo</span>
            </button>
          </li>
          <li>
            <button type="button" className={`nav-item ${activeView === 'dashboard' ? 'active' : ''}`} aria-current={activeView === 'dashboard' ? 'page' : undefined} onClick={() => onNavigate('dashboard')}>
              <span className="nav-icon" aria-hidden="true">📊</span>
              <span className="nav-label">Panel General</span>
            </button>
          </li>
          <li>
            <button type="button" className="nav-item" disabled title="Disponible próximamente">
              <span className="nav-icon" aria-hidden="true">👥</span>
              <span className="nav-label">Personal de Campo</span>
            </button>
          </li>
          <li>
            <button type="button" className="nav-item" disabled title="Disponible próximamente">
              <span className="nav-icon" aria-hidden="true">⚙️</span>
              <span className="nav-label">Configuración</span>
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
