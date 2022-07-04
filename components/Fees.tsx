import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Order } from '../types';
import { stringToMoney } from './stringToMoney';
import Stack from '@mui/material/Stack';

interface CheckedIds {
  [key: string]: boolean;
}

interface Props {
  type: 'PAID' | 'DUE' | 'OUTSTANDING';
  orders: Order[] | null;
  setTotal?: React.Dispatch<React.SetStateAction<number>>;
}

export function Fees({ type, orders, setTotal }: Props) {
  const [checkedIds, setCheckedIds] = useState<CheckedIds>({});

  if (type === 'PAID') {
    const ordersToDisplay = orders?.filter(order => order.status.toUpperCase() === type);

    return (
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Stack>
            <Typography style={{ fontWeight: 800 }} variant="h6">
              Cuotas pagadas
            </Typography>
            <Typography style={{ fontWeight: 300, fontSize: '13px' }} variant="subtitle2">
              Dale click para expandir
            </Typography>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          {ordersToDisplay?.map(orders => (
            <div key={orders.id}>
              <Typography style={{ fontWeight: 400 }} variant="subtitle1">
                {orders.name}
              </Typography>
              {orders.payin?.created && (
                <Typography style={{ fontWeight: 400, fontSize: '12px' }} variant="subtitle1">
                  Cancelada el {dateStringWithTimezoneToString(orders.payin.created)}
                </Typography>
              )}
            </div>
          ))}
        </AccordionDetails>
      </Accordion>
    );
  } else if (type === 'DUE' && setTotal !== undefined) {
    const ordersToDisplay = orders?.filter(order => order.status.toUpperCase() === type);

    return (
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Stack>
            <Typography style={{ fontWeight: 800 }} variant="h6">
              Cuotas pendientes
            </Typography>
            <Typography style={{ fontWeight: 300, fontSize: '13px' }} variant="subtitle2">
              Dale click para expandir
            </Typography>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          {ordersToDisplay?.map(orders => (
            <div key={orders.id}>
              <Stack direction="row" justifyContent="space-between">
                <Stack>
                  <Typography style={{ fontWeight: 400 }} variant="subtitle1">
                    {orders.name}
                  </Typography>
                  {orders.due && (
                    <Typography style={{ fontWeight: 400, fontSize: '12px' }} variant="subtitle1">
                      Vence el {dateStringWithTimezoneToString(orders.due)}
                    </Typography>
                  )}
                </Stack>
                <Stack style={{ float: 'right' }}>
                  <Typography style={{ fontWeight: 400, fontSize: '16px' }} variant="subtitle1">
                    {stringToMoney(orders.price)}
                  </Typography>
                  <Typography style={{ fontWeight: 400, fontSize: '12px' }} variant="subtitle1">
                    Interés: {stringToMoney(orders.interest)}
                  </Typography>
                </Stack>
                <Checkbox style={{ width: 'min-content' }} onChange={e => feeAdder(e.target.checked, orders, setCheckedIds, setTotal)} />
              </Stack>
            </div>
          ))}
        </AccordionDetails>
      </Accordion>
    );
  } else if (type === 'OUTSTANDING' && setTotal !== undefined) {
    const ordersToDisplay = orders?.filter(order => order.status.toUpperCase() === type);

    return (
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Stack>
            <Typography style={{ fontWeight: 800 }} variant="h6">
              Cuotas futuras
            </Typography>
            <Typography style={{ fontWeight: 300, fontSize: '13px' }} variant="subtitle2">
              Dale click para expandir
            </Typography>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          {ordersToDisplay?.map(orders => (
            <div key={orders.id}>
              <Stack direction="row" justifyContent="space-between">
                <Stack>
                  <Typography style={{ fontWeight: 400 }} variant="subtitle1">
                    {orders.name}
                  </Typography>
                  {orders.due && (
                    <Typography style={{ fontWeight: 400, fontSize: '12px' }} variant="subtitle1">
                      Vence el {dateStringWithTimezoneToString(orders.due)}
                    </Typography>
                  )}
                </Stack>
                <Stack style={{ float: 'right' }}>
                  {/* TODO check discount and correct if it exists on API */}
                  <Typography style={{ fontWeight: 400, fontSize: '16px' }} variant="subtitle1">
                    {stringToMoney(orders.price)}
                  </Typography>
                  {/* <Typography style={{ fontWeight: 400, fontSize: '12px' }} variant="subtitle1">
                    Ahorras: {stringToMoney(orders.discount)}
                  </Typography> */}
                </Stack>
                <Checkbox style={{ width: 'min-content' }} onChange={e => feeAdder(e.target.checked, orders, setCheckedIds, setTotal)} />
              </Stack>
            </div>
          ))}
        </AccordionDetails>
      </Accordion>
    );
  } else {
    return null;
  }
}

function dateStringWithTimezoneToString(date: string) {
  const dateObject = new Date(date);
  return `${dateObject.getDate()} de ${dateObject
    .toLocaleString('es-AR', {
      month: 'short',
    })
    .replace(/^./, str => str.toUpperCase())}.`;
}

function dateStringWithoutTimezoneToString(date: string) {
  const dateWithTimeZone = `${date}T12:00:00.000000Z`;
  return dateStringWithTimezoneToString(dateWithTimeZone);
}

function feeAdder(
  checked: boolean,
  orders: Order,
  setCheckedIds: React.Dispatch<React.SetStateAction<CheckedIds>>,
  setTotal: React.Dispatch<React.SetStateAction<number>>
) {
  const price = Number(orders.price);
  const interest = isNaN(Number(orders.interest)) ? 0 : Number(orders.interest);
  // const discount = Number(orders.discount) === 'number' ? Number(orders.discount) : 0; //TODO check API for discount!!!
  const addIfCheckedOrSubtractIfUnchecked = checked ? 1 : -1;

  setTotal(previousTotal => previousTotal + addIfCheckedOrSubtractIfUnchecked * (price + interest));
  setCheckedIds(previousCheckedIds => ({ ...previousCheckedIds, [orders.id]: !previousCheckedIds[orders.id] }));
}
