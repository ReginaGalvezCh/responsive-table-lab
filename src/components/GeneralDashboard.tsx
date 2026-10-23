import React from 'react';
import type { FieldOrder } from '../types/order';
import { StatusBadge } from './StatusBadge';
import './GeneralDashboard.css';

interface GeneralDashboardProps {
  orders: FieldOrder[];
  onSelect: (order: FieldOrder) => void;
}

export const GeneralDashboard: React.FC<GeneralDashboardProps> = ({ orders, onSelect }) => {
  const activeOrders = orders.filter((order) => order.status === 'in_progress');
  const pendingOrders = orders.filter((order) => order.status === 'pending');
  const completedOrders = orders.filter((order) => order.status === 'completed');
  const recentOrders = [...orders].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 5);

  return (
    <main className="app-main dashboard-main">
      <header className="page-header">
        <div>
          <h1 className="page-title">General Dashboard</h1>
          <p className="page-subtitle">Overview of work orders and recent activity</p>
        </div>
      </header>

      <section className="dashboard-metrics" aria-label="Operations metrics">
        <div className="dashboard-metric">
          <span className="dashboard-metric-label">Total orders</span>
          <strong className="dashboard-metric-value">{orders.length}</strong>
        </div>
        <div className="dashboard-metric">
          <span className="dashboard-metric-label">In progress</span>
          <strong className="dashboard-metric-value">{activeOrders.length}</strong>
        </div>
        <div className="dashboard-metric">
          <span className="dashboard-metric-label">Pending</span>
          <strong className="dashboard-metric-value">{pendingOrders.length}</strong>
        </div>
        <div className="dashboard-metric">
          <span className="dashboard-metric-label">Completed</span>
          <strong className="dashboard-metric-value">{completedOrders.length}</strong>
        </div>
      </section>

      <section className="dashboard-panel" aria-labelledby="recent-orders-title">
        <div className="dashboard-panel-heading">
          <h2 id="recent-orders-title">Recent orders</h2>
          <p>The five most recently scheduled orders</p>
        </div>
        <div className="dashboard-table-scroll" role="region" aria-label="Recent orders, horizontal scrolling" tabIndex={0}>
          <table className="dashboard-table">
            <thead>
              <tr>
                <th scope="col">Code</th>
                <th scope="col">Order</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id}>
                  <td className="cell-code">{order.code}</td>
                  <td className="dashboard-order-title">{order.title}</td>
                  <td><StatusBadge status={order.status} /></td>
                  <td>
                    <button type="button" className="btn-action-detail" onClick={() => onSelect(order)} aria-label={`View details for order ${order.code}`}>
                      View details
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
