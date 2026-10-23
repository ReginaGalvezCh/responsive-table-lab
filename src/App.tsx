import React, { useState, useMemo } from 'react';
import './App.css';
import { orders as initialOrders } from './data/orders';
import type { FieldOrder, OrderStatus } from './types/order';
import { AppSidebar } from './components/AppSidebar';
import type { AppView } from './components/AppSidebar';
import { GeneralDashboard } from './components/GeneralDashboard';
import { OrdersTable } from './components/OrdersTable';
import { OrderDetails } from './components/OrderDetails';

export const App: React.FC = () => {
  const [activeView, setActiveView] = useState<AppView>('orders');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<string>('todos');
  const [selectedOrder, setSelectedOrder] = useState<FieldOrder | null>(null);

  const summaryStats = useMemo(() => {
    const total = initialOrders.length;
    const pendientes = initialOrders.filter((o) => o.status === 'pendiente').length;
    const enProceso = initialOrders.filter((o) => o.status === 'en_proceso').length;
    const completadas = initialOrders.filter((o) => o.status === 'completado').length;
    return { total, pendientes, enProceso, completadas };
  }, []);

  const filteredOrders = useMemo(() => {
    return initialOrders.filter((order) => {
      const matchesStatus =
        statusFilter === 'todos' || order.status === (statusFilter as OrderStatus);

      const term = searchTerm.toLowerCase().trim();
      const matchesSearch =
        term === '' ||
        order.code.toLowerCase().includes(term) ||
        order.title.toLowerCase().includes(term) ||
        order.location.toLowerCase().includes(term) ||
        order.assignedAgent.toLowerCase().includes(term);

      return matchesStatus && matchesSearch;
    });
  }, [searchTerm, statusFilter]);

  const handleNavigate = (view: AppView) => {
    setSelectedOrder(null);
    setActiveView(view);
  };

  const handleSelectOrder = (order: FieldOrder) => {
    setSelectedOrder(order);
  };

  const handleCloseDetails = () => {
    setSelectedOrder(null);
  };

  return (
    <div className={`app-container ${activeView === 'dashboard' ? 'app-container-dashboard' : ''}`}>
      <AppSidebar activeView={activeView} onNavigate={handleNavigate} />

      {activeView === 'dashboard' ? (
        <GeneralDashboard orders={initialOrders} onSelect={handleSelectOrder} />
      ) : (
        <main className="app-main">
          <header className="page-header">
            <div>
              <h1 className="page-title">Órdenes de Trabajo</h1>
              <p className="page-subtitle">
                Gestión y monitoreo operativo en tiempo real de cuadrillas de campo
              </p>
            </div>
          </header>

          <section className="summary-cards" aria-label="Resumen operativo">
            <div className="summary-card card-total">
              <span className="card-label">Total Órdenes</span>
              <span className="card-value">{summaryStats.total}</span>
            </div>
            <div className="summary-card card-pending">
              <span className="card-label">Pendientes</span>
              <span className="card-value">{summaryStats.pendientes}</span>
            </div>
            <div className="summary-card card-in-progress">
              <span className="card-label">En Proceso</span>
              <span className="card-value">{summaryStats.enProceso}</span>
            </div>
            <div className="summary-card card-completed">
              <span className="card-label">Completadas</span>
              <span className="card-value">{summaryStats.completadas}</span>
            </div>
          </section>

          <section className="toolbar-section">
            <div className="search-box">
              <label htmlFor="search-input" className="sr-only">
                Buscar por código, título, ubicación o responsable
              </label>
              <input
                id="search-input"
                type="text"
                className="search-input"
                placeholder="Buscar por código, título, ubicación o responsable..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="filter-box">
              <label htmlFor="status-filter-select" className="filter-label">
                Estado:
              </label>
              <select
                id="status-filter-select"
                className="status-select"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="todos">Todos los estados</option>
                <option value="pendiente">Pendiente</option>
                <option value="en_proceso">En Proceso</option>
                <option value="completado">Completado</option>
                <option value="cancelado">Cancelado</option>
              </select>
            </div>
          </section>

          <section className="table-card">
            <OrdersTable orders={filteredOrders} onSelect={handleSelectOrder} />
          </section>
        </main>
      )}

      <OrderDetails order={selectedOrder} onClose={handleCloseDetails} />
    </div>
  );
};

export default App;
