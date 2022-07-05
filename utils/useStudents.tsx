import { useState, useEffect } from 'react';
import axios from 'axios';
import https from 'https';

import { Student } from '../types';

const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

export function useStudents(studentId: string): Student | null {
  const [student, setStudent] = useState<Student | null>(null);

  useEffect(() => {
    fetch(`/api/students/${studentId}`)
      .then(response => response.json())
      .then(data => setStudent(data));
  }, [studentId]);

  return student;
}

/**
 * headers: {
 hash: 'OcJn4jYChW',
},
*/

// useEffect(() => {
//   axios
//     .get(`http://ec2-3-239-221-74.compute-1.amazonaws.com:8000/api/v1/students/${studentId}`, {
//       httpsAgent,
//       headers: {
//         // 'Content-Type': 'application/json',
//         // Accept: 'application/json',
//         hash: 'OcJn4jYChW',
//         'Access-Control-Allow-Origin': '*',
//       },
//     })
//     .then(data => setStudent(data));
// }, [studentId]);
