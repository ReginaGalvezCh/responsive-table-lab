export type OrderStatus = 'pending' | 'in_progress' | 'completed' | 'canceled';

export type OrderPriority = 'low' | 'medium' | 'high' | 'urgent';

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