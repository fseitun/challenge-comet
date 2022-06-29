import { useState, useEffect } from 'react';

import { Order } from '../types';

export function useOrders(studentId: string): Order[] | null {
  const [orders, setOrders] = useState<Order[] | null>(null);

  useEffect(() => {
    fetch(`/api/students/${studentId}/orders`)
      .then(response => response.json())
      .then(data => setOrders(data));
  }, [studentId]);

  return orders;
}
