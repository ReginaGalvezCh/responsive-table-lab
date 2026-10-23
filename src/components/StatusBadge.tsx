import React from 'react';
import type { OrderStatus } from '../types/order';

interface StatusBadgeProps {
  status: OrderStatus;
}

const statusLabels: Record<OrderStatus, string> = {
  pending: 'Pending',
  in_progress: 'In Progress',
  completed: 'Completed',
  canceled: 'Canceled'
};

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const label = statusLabels[status] || status;

  return (
    <span className={`status-badge status-${status}`}>
      {label}
    </span>
  );
};
