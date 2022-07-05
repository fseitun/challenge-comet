import { useState, useEffect } from 'react';

import { Student } from '../types';

export function useStudents(studentId: string): Student | null {
  const [student, setStudent] = useState<Student | null>(null);

  const myHeaders = new Headers();

  const myRequest = new Request('flowers.jpg', {
    method: 'GET',
    headers: myHeaders,
  });

  useEffect(() => {
    fetch(`https://ec2-3-239-221-74.compute-1.amazonaws.com:8000/api/v1/students/${studentId}`, {
      method: 'GET',
      headers: {
        hash: 'OcJn4jYChW',
      },
    })
      .then(response => response.json())
      .then(data => setStudent(data));
  }, [studentId]);

  return student;
}

// useEffect(() => {
//   fetch(`/api/students/${studentId}`)
//     .then(response => response.json())
//     .then(data => setStudent(data));
// }, [studentId]);
