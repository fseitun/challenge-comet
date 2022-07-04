import { Student } from '../types';
import { stringToMoney } from './stringToMoney';

interface Props {
  student: Student | null;
  totalToPay: number;
}

export function Status({ student, totalToPay }: Props) {
  const total = stringToMoney(String(totalToPay));

  return (
    <div>
      {student?.first_name}
      {student?.last_name}
      {student?.cohort}Total a Pagar{total}
    </div>
  );
}
