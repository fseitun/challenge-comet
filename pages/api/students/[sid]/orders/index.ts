import type { NextApiRequest, NextApiResponse } from 'next';

import { Order } from '../../../../../types';

export default function handler(req: NextApiRequest, res: NextApiResponse<Order[]>) {
  if (req.method === 'GET' && req.query.sid === '3b35fb50-3d5e-41b3-96d6-c5566141fab0') {
    res.status(200).json([
      {
        id: 'dc438d87-18fc-4f65-8927-d860d1496795',
        concept: 'MONTHLY',
        name: 'Colegiatura Enero 22',
        price: '5000.00',
        price_currency: 'MXN',
        due: '2022-01-05',
        status: 'PAID',
        interest: '1000.00',
        payin: {
          id: '487244ce-9a64-4bf8-8feb-e9599f1a7ee3',
          created: '2022-02-09T19:21:57.752070Z',
        },
      },
      {
        id: 'ac1d2527-a0ec-4d98-a981-7c97c50580cf',
        concept: 'MONTHLY',
        name: 'Colegiatura Febrero 22',
        price: '5000.00',
        price_currency: 'MXN',
        due: '2022-02-05',
        status: 'DUE',
        interest: '500.00',
        payin: null,
      },
      {
        id: 'c2866664-020a-4df3-a078-f08337c3cb3a',
        concept: 'MONTHLY',
        name: 'Colegiatura Marzo 22',
        price: '5000.00',
        price_currency: 'MXN',
        due: '2022-03-05',
        status: 'OUTSTANDING',
        interest: 'None',
        payin: null,
      },
      {
        id: 'c25f618b-b6ad-4941-972c-0be4e1c659ab',
        concept: 'MONTHLY',
        name: 'Colegiatura Abril 22',
        price: '5000.00',
        price_currency: 'MXN',
        due: '2022-04-05',
        status: 'OUTSTANDING',
        interest: 'None',
        payin: null,
      },
      {
        id: '25d4dd53-c45a-4e0a-afb7-fcff15b3a612',
        concept: 'MONTHLY',
        name: 'Colegiatura Mayo 22',
        price: '5000.00',
        price_currency: 'MXN',
        due: '2022-05-05',
        status: 'OUTSTANDING',
        interest: 'None',
        payin: null,
      },
      {
        id: 'bd394e6e-b322-49c8-9b3f-29931a978880',
        concept: 'MONTHLY',
        name: 'Colegiatura Junio 22',
        price: '5000.00',
        price_currency: 'MXN',
        due: '2022-06-05',
        status: 'OUTSTANDING',
        interest: 'None',
        payin: null,
      },
      {
        id: '46d73bcf-e25d-4531-847d-8ccd5b1870cb',
        concept: 'MONTHLY',
        name: 'Colegiatura Julio 22',
        price: '5000.00',
        price_currency: 'MXN',
        due: '2022-07-05',
        status: 'OUTSTANDING',
        interest: 'None',
        payin: null,
      },
    ]);
  }
}
