export type OrderStatus = 'pendiente' | 'en_proceso' | 'completado' | 'cancelado';

export type OrderPriority = 'baja' | 'media' | 'alta' | 'urgente';

export interface FieldOrder {
  id: string;
  code: string;
  title: string;
  description: string;
  assignedAgent: string;
  status: OrderStatus;
  date: string;
  location: string;
  priority: OrderPriority;
}