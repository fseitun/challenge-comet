import type { NextApiRequest, NextApiResponse } from 'next';

import { Student } from '../../../../types';

export default function handler(req: NextApiRequest, res: NextApiResponse<Student>) {
  res.status(200).json({
    id: '3b35fb50-3d5e-41b3-96d6-c5566141fab0',
    first_name: 'Mateo',
    last_name: 'Creamer',
    guardian: {
      id: 'b5ad0bde-f1bb-433a-8124-10379cc906f5',
      first_name: 'Valeria',
      last_name: 'Wu',
      email: 'adoval4@gmail.com',
      phone: '+51950862507',
      tax_id: '47865675',
    },
    cohort: 'Primer año',
    school: {
      id: '41ecfd5e-ffd2-44b3-8df5-70279624ad41',
      name: 'Innova Schools San Miguel',
      logo: null,
      country: 'PE',
      city: null,
      address: 'Jr. La paz 123',
      zip_code: null,
    },
    monthly_grant_type: null,
    monthly_grant_value: null,
    inscription_grant_value: null,
    inscription_grant_type: null,
  });
}
