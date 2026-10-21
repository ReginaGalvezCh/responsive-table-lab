import React from 'react';
import type { FieldOrder } from '../types/order';
import { StatusBadge } from './StatusBadge';

interface OrderDetailsProps {
  order: FieldOrder | null;
  onClose: () => void;
}

const priorityLabels: Record<string, string> = {
  baja: 'Baja',
  media: 'Media',
  alta: 'Alta',
  urgente: 'Urgente'
};

export const OrderDetails: React.FC<OrderDetailsProps> = ({ order, onClose }) => {
  if (!order) return null;

  return (
    <aside className="order-details-panel" aria-labelledby="details-panel-title">
      <div className="details-header">
        <div>
          <span className="details-subtitle">Detalle de Orden de Trabajo</span>
          <h2 id="details-panel-title" className="details-title">{order.code}</h2>
        </div>
        <button
          type="button"
          className="btn-close-details"
          onClick={onClose}
          aria-label="Cerrar panel de detalle"
        >
          ✕
        </button>
      </div>

      <div className="details-body">
        <section className="details-section">
          <h3>Información General</h3>
          <div className="details-field">
            <label>Título:</label>
            <p className="field-value-highlight">{order.title}</p>
          </div>
          <div className="details-field">
            <label>Descripción completa:</label>
            <p className="field-value-description">{order.description}</p>
          </div>
        </section>

        <section className="details-section">
          <h3>Estado y Prioridad</h3>
          <div className="details-grid">
            <div className="details-field">
              <label>Estado actual:</label>
              <div>
                <StatusBadge status={order.status} />
              </div>
            </div>
            <div className="details-field">
              <label>Prioridad:</label>
              <div>
                <span className={`priority-tag priority-${order.priority}`}>
                  {priorityLabels[order.priority] || order.priority}
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="details-section">
          <h3>Asignación y Ubicación</h3>
          <div className="details-grid">
            <div className="details-field">
              <label>Responsable de campo:</label>
              <p>{order.assignedAgent}</p>
            </div>
            <div className="details-field">
              <label>Fecha programada:</label>
              <p>{order.date}</p>
            </div>
          </div>
          <div className="details-field">
            <label>Ubicación técnica:</label>
            <p>{order.location}</p>
          </div>
        </section>

        <section className="details-section">
          <h3>Identificadores del Sistema</h3>
          <div className="details-grid">
            <div className="details-field">
              <label>ID Registro:</label>
              <p className="field-value-code">{order.id}</p>
            </div>
            <div className="details-field">
              <label>Código Interno:</label>
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
          Cerrar Detalle
        </button>
      </div>
    </aside>
  );
};
