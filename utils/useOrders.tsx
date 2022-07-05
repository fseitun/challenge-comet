import { useState, useEffect } from 'react';

import { Order } from '../types';

export function useOrders(studentId: string): Order[] | null {
  const [orders, setOrders] = useState<Order[] | null>(null);

  useEffect(() => {
    fetch(`https://ec2-3-239-221-74.compute-1.amazonaws.com:8000/api/v1/students/${studentId}/orders`, {
      method: 'GET',
      headers: {
        hash: 'OcJn4jYChW',
      },
    })
      .then(response => response.json())
      .then(data => setOrders(data));
  }, [studentId]);

  return orders;
}

// useEffect(() => {
//   fetch(`/api/students/${studentId}/orders`)
//     .then(response => response.json())
//     .then(data => setOrders(data));
// }, [studentId]);
