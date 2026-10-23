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
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selectedOrder, setSelectedOrder] = useState<FieldOrder | null>(null);

  const summaryStats = useMemo(() => {
    const total = initialOrders.length;
    const pending = initialOrders.filter((o) => o.status === 'pending').length;
    const inProgress = initialOrders.filter((o) => o.status === 'in_progress').length;
    const completed = initialOrders.filter((o) => o.status === 'completed').length;
    return { total, pending, inProgress, completed };
  }, []);

  const filteredOrders = useMemo(() => {
    return initialOrders.filter((order) => {
      const matchesStatus =
        statusFilter === 'all' || order.status === (statusFilter as OrderStatus);

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
    <div className={`app-container ${activeView === 'dashboard' ? 'app-container-dashboard' : 'app-container-orders'}`}>
      <AppSidebar activeView={activeView} onNavigate={handleNavigate} />

      {activeView === 'dashboard' ? (
        <GeneralDashboard orders={initialOrders} onSelect={handleSelectOrder} />
      ) : (
        <main className="app-main">
          <header className="page-header">
            <div>
              <h1 className="page-title">Work Orders</h1>
              <p className="page-subtitle">
                Real-time management and monitoring of field crews
              </p>
            </div>
          </header>

          <section className="summary-cards" aria-label="Operations summary">
            <div className="summary-card card-total">
              <span className="card-label">Total Orders</span>
              <span className="card-value">{summaryStats.total}</span>
            </div>
            <div className="summary-card card-pending">
              <span className="card-label">Pending</span>
              <span className="card-value">{summaryStats.pending}</span>
            </div>
            <div className="summary-card card-in-progress">
              <span className="card-label">In Progress</span>
              <span className="card-value">{summaryStats.inProgress}</span>
            </div>
            <div className="summary-card card-completed">
              <span className="card-label">Completed</span>
              <span className="card-value">{summaryStats.completed}</span>
            </div>
          </section>

          <section className="toolbar-section">
            <div className="search-box">
              <label htmlFor="search-input" className="sr-only">
                Search by code, title, location, or assignee
              </label>
              <input
                id="search-input"
                type="text"
                className="search-input"
                placeholder="Search by code, title, location, or assignee..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="filter-box">
              <label htmlFor="status-filter-select" className="filter-label">
                Status:
              </label>
              <select
                id="status-filter-select"
                className="status-select"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">All statuses</option>
                <option value="pending">Pending</option>
                <option value="in_progress">In Progress</option>
                <option value="completed">Completed</option>
                <option value="canceled">Canceled</option>
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
