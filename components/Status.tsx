import { Student } from '../types';

interface Props {
  student: Student | null;
  totalToPay: number;
}

export function Status({ student, totalToPay }: Props) {
  console.log(student, totalToPay);
  return (
    <div>
      {student?.first_name}
      {student?.last_name}
      {student?.cohort}Total a Pagar{totalToPay}
    </div>
  );
}
