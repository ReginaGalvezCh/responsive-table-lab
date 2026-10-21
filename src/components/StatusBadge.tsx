import React from 'react';
import type { OrderStatus } from '../types/order';

interface StatusBadgeProps {
  status: OrderStatus;
}

const statusLabels: Record<OrderStatus, string> = {
  pendiente: 'Pendiente',
  en_proceso: 'En Proceso',
  completado: 'Completado',
  cancelado: 'Cancelado'
};

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const label = statusLabels[status] || status;

  return (
    <span className={`status-badge status-${status}`}>
      {label}
    </span>
  );
};
