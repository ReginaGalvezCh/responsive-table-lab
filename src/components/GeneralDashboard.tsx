import React from 'react';
import type { FieldOrder } from '../types/order';
import { StatusBadge } from './StatusBadge';
import './GeneralDashboard.css';

interface GeneralDashboardProps {
  orders: FieldOrder[];
  onSelect: (order: FieldOrder) => void;
}

export const GeneralDashboard: React.FC<GeneralDashboardProps> = ({ orders, onSelect }) => {
  const activeOrders = orders.filter((order) => order.status === 'en_proceso');
  const pendingOrders = orders.filter((order) => order.status === 'pendiente');
  const completedOrders = orders.filter((order) => order.status === 'completado');
  const recentOrders = [...orders].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 5);

  return (
    <main className="app-main dashboard-main">
      <header className="page-header">
        <div>
          <h1 className="page-title">Panel General</h1>
          <p className="page-subtitle">Resumen de las órdenes de trabajo y la actividad reciente</p>
        </div>
      </header>

      <section className="dashboard-metrics" aria-label="Indicadores operativos">
        <div className="dashboard-metric">
          <span className="dashboard-metric-label">Total de órdenes</span>
          <strong className="dashboard-metric-value">{orders.length}</strong>
        </div>
        <div className="dashboard-metric">
          <span className="dashboard-metric-label">En proceso</span>
          <strong className="dashboard-metric-value">{activeOrders.length}</strong>
        </div>
        <div className="dashboard-metric">
          <span className="dashboard-metric-label">Pendientes</span>
          <strong className="dashboard-metric-value">{pendingOrders.length}</strong>
        </div>
        <div className="dashboard-metric">
          <span className="dashboard-metric-label">Completadas</span>
          <strong className="dashboard-metric-value">{completedOrders.length}</strong>
        </div>
      </section>

      <section className="dashboard-panel" aria-labelledby="recent-orders-title">
        <div className="dashboard-panel-heading">
          <h2 id="recent-orders-title">Órdenes recientes</h2>
          <p>Las cinco órdenes con fecha más reciente</p>
        </div>
        <div className="dashboard-table-scroll" role="region" aria-label="Órdenes recientes, desplazamiento horizontal" tabIndex={0}>
          <table className="dashboard-table">
            <thead>
              <tr>
                <th scope="col">Código</th>
                <th scope="col">Orden</th>
                <th scope="col">Estado</th>
                <th scope="col">Acción</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id}>
                  <td className="cell-code">{order.code}</td>
                  <td className="dashboard-order-title">{order.title}</td>
                  <td><StatusBadge status={order.status} /></td>
                  <td>
                    <button type="button" className="btn-action-detail" onClick={() => onSelect(order)} aria-label={`Ver detalle de la orden ${order.code}`}>
                      Ver detalle
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};
