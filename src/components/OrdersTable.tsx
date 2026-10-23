import React from 'react';
import type { FieldOrder } from '../types/order';
import { StatusBadge } from './StatusBadge';

interface OrdersTableProps {
  orders: FieldOrder[];
  onSelect: (order: FieldOrder) => void;
}

const priorityLabels: Record<string, string> = {
  low: 'Low',
  medium: 'Medium',
  high: 'High',
  urgent: 'Urgent'
};

export const OrdersTable: React.FC<OrdersTableProps> = ({ orders, onSelect }) => {
  return (
    <table className="orders-table">
      <thead>
        <tr>
          <th scope="col">Code</th>
          <th scope="col">Order Title</th>
          <th scope="col">Location</th>
          <th scope="col">Assignee</th>
          <th scope="col">Priority</th>
          <th scope="col">Status</th>
          <th scope="col">Date</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {orders.length === 0 ? (
          <tr>
            <td colSpan={8} className="empty-message">
              No work orders match the current search and filter.
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
                  aria-label={`View details for order ${order.code}`}
                >
                  View details
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};
