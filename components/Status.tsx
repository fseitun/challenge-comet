import { Stack } from '@mui/material';
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
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="subtitle1">
          {student?.first_name} {student?.last_name}
        </Typography>
        <Typography variant="subtitle1">{student?.cohort}</Typography>
      </Stack>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="subtitle1">Total a Pagar:</Typography>
        <Typography variant="h6"> {totalWithDashedCero}</Typography>
      </Stack>
    </>
  );
}
