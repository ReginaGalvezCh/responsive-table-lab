import React from 'react';
import type { FieldOrder } from '../types/order';
import { StatusBadge } from './StatusBadge';

interface OrderDetailsProps {
  order: FieldOrder | null;
  onClose: () => void;
}

const priorityLabels: Record<string, string> = {
  low: 'Low',
  medium: 'Medium',
  high: 'High',
  urgent: 'Urgent'
};

export const OrderDetails: React.FC<OrderDetailsProps> = ({ order, onClose }) => {
  if (!order) return null;

  return (
    <aside className="order-details-panel" aria-labelledby="details-panel-title">
      <div className="details-header">
        <div>
          <span className="details-subtitle">Work Order Details</span>
          <h2 id="details-panel-title" className="details-title">{order.code}</h2>
        </div>
        <button
          type="button"
          className="btn-close-details"
          onClick={onClose}
          aria-label="Close details panel"
        >
          ✕
        </button>
      </div>

      <div className="details-body">
        <section className="details-section">
          <h3>General Information</h3>
          <div className="details-field">
            <label>Title:</label>
            <p className="field-value-highlight">{order.title}</p>
          </div>
          <div className="details-field">
            <label>Full description:</label>
            <p className="field-value-description">{order.description}</p>
          </div>
        </section>

        <section className="details-section">
          <h3>Status and Priority</h3>
          <div className="details-grid">
            <div className="details-field">
              <label>Current status:</label>
              <div>
                <StatusBadge status={order.status} />
              </div>
            </div>
            <div className="details-field">
              <label>Priority:</label>
              <div>
                <span className={`priority-tag priority-${order.priority}`}>
                  {priorityLabels[order.priority] || order.priority}
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="details-section">
          <h3>Assignment and Location</h3>
          <div className="details-grid">
            <div className="details-field">
              <label>Field assignee:</label>
              <p>{order.assignedAgent}</p>
            </div>
            <div className="details-field">
              <label>Scheduled date:</label>
              <p>{order.date}</p>
            </div>
          </div>
          <div className="details-field">
            <label>Technical location:</label>
            <p>{order.location}</p>
          </div>
        </section>

        <section className="details-section">
          <h3>System Identifiers</h3>
          <div className="details-grid">
            <div className="details-field">
              <label>Record ID:</label>
              <p className="field-value-code">{order.id}</p>
            </div>
            <div className="details-field">
              <label>Internal code:</label>
              <p className="field-value-code">{order.code}</p>
            </div>
          </div>
        </section>
      </div>

      <div className="details-footer">
        <button
          type="button"
          className="btn-secondary"
          onClick={onClose}
        >
          Close Details
        </button>
      </div>
    </aside>
  );
};
