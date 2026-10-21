import React from 'react';
import type { FieldOrder } from '../types/order';
import { StatusBadge } from './StatusBadge';

interface OrdersTableProps {
  orders: FieldOrder[];
  onSelect: (order: FieldOrder) => void;
}

const priorityLabels: Record<string, string> = {
  baja: 'Baja',
  media: 'Media',
  alta: 'Alta',
  urgente: 'Urgente'
};

export const OrdersTable: React.FC<OrdersTableProps> = ({ orders, onSelect }) => {
  return (
    <table className="orders-table">
      <thead>
        <tr>
          <th scope="col">Código</th>
          <th scope="col">Título de la Orden</th>
          <th scope="col">Ubicación</th>
          <th scope="col">Responsable</th>
          <th scope="col">Prioridad</th>
          <th scope="col">Estado</th>
          <th scope="col">Fecha</th>
          <th scope="col">Acción</th>
        </tr>
      </thead>
      <tbody>
        {orders.length === 0 ? (
          <tr>
            <td colSpan={8} className="empty-message">
              No se encontraron órdenes de trabajo con los criterios ingresados.
            </td>
          </tr>
        ) : (
          orders.map((order) => (
            <tr key={order.id}>
              <td className="cell-code">{order.code}</td>
              <td className="cell-title">{order.title}</td>
              <td className="cell-location">{order.location}</td>
              <td className="cell-agent">{order.assignedAgent}</td>
              <td className="cell-priority">
                <span className={`priority-tag priority-${order.priority}`}>
                  {priorityLabels[order.priority] || order.priority}
                </span>
              </td>
              <td className="cell-status">
                <StatusBadge status={order.status} />
              </td>
              <td className="cell-date">{order.date}</td>
              <td className="cell-action">
                <button
                  type="button"
                  className="btn-action-detail"
                  onClick={() => onSelect(order)}
                  aria-label={`Ver detalle de la orden ${order.code}`}
                >
                  Ver detalle
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};
