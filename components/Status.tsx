import Typography from '@mui/material/Typography';
import { Student } from '../types';
import { stringToMoney } from './stringToMoney';

interface Props {
  student: Student | null;
  totalToPay: number;
}

export function Status({ student, totalToPay }: Props) {
  const total = stringToMoney(String(totalToPay));
  const totalWithDashedCero = total === '$0' ? '$ --' : total;

  return (
    <>
      <Typography variant="subtitle1" gutterBottom>
        {student?.first_name} {student?.last_name} {student?.cohort}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Total a Pagar: {totalWithDashedCero}
      </Typography>
    </>
  );
}
