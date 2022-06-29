import { useState, useEffect } from 'react';

import { Student } from '../types';

export function useStudents(studentId: string): Student | null {
  const [student, setStudent] = useState<Student | null>(null);

  useEffect(() => {
    fetch(`/api/students/${studentId}`)
      .then(response => response.json())
      .then(data => setStudent(data));
  }, [studentId]);

  return student;
}
