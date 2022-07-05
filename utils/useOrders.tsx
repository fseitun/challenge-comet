import { useState, useEffect } from 'react';
import axios from 'axios';
import https from 'https';

import { Order } from '../types';

const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

export function useOrders(studentId: string): Order[] | null {
  const [orders, setOrders] = useState<Order[] | null>(null);

  useEffect(() => {
    fetch(`/api/students/${studentId}/orders`)
      .then(response => response.json())
      .then(data => setOrders(data));
  }, [studentId]);

  return orders;
}

// useEffect(() => {
//   axios
//     .get(`http://ec2-3-239-221-74.compute-1.amazonaws.com:8000/api/v1/students/${studentId}/orders`, {
//       httpsAgent,
//       headers: {
//         // 'Content-Type': 'application/json',
//         // Accept: 'application/json',
//         hash: 'OcJn4jYChW',
//         'Access-Control-Allow-Origin': '*',
//       },
//     })
//     .then(data => setOrders(data));
// }, [studentId]);
