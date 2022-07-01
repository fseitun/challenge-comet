import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';

import { Student, Order } from '../types';

interface CheckedIds {
  [key: string]: boolean;
}

interface Props {
  type: 'PAID' | 'DUE' | 'OUTSTANDING';
  orders: Order[] | null;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
}

export function Fees({ type, orders, setTotal }: Props) {
  const [checkedIds, setCheckedIds] = useState<CheckedIds>({});

  console.log(checkedIds);

  if (type === 'PAID') {
    const ordersToDisplay = orders?.filter(order => order.status.toUpperCase() === type);

    return (
      <>
        <div>{type}</div>
        {ordersToDisplay?.map(orders => (
          <div key={orders.id}>
            <div>{orders.name}</div>
            {orders.payin?.created && <div>{dateStringWithTimezoneToString(orders.payin.created)}</div>}
          </div>
        ))}
      </>
    );
  } else if (type === 'DUE') {
    const ordersToDisplay = orders?.filter(order => order.status.toUpperCase() === type);

    return (
      <>
        <div>{type}</div>
        {ordersToDisplay?.map(orders => (
          <div key={orders.id}>
            <div>{orders.name}</div>
            <div>{stringToMoney(orders.interest)}</div>
            <div>{stringToMoney(orders.price)}</div>
            <Checkbox onChange={e => feeAdder(e.target.checked, orders, setCheckedIds, setTotal)} />
            {orders.payin?.created && <div>{dateStringWithTimezoneToString(orders.payin.created)}</div>}
          </div>
        ))}
      </>
    );
  } else if (type === 'OUTSTANDING') {
    const ordersToDisplay = orders?.filter(order => order.status.toUpperCase() === type);

    return (
      <>
        <div>{type}</div>
        {ordersToDisplay?.map(orders => (
          <div key={orders.id}>
            <div>{orders.name}</div>
            <div>{dateStringWithoutTimezoneToString(orders.due)}</div>
            <div>{stringToMoney(orders.price)}</div>
            {orders.payin?.created && <div>{dateStringWithTimezoneToString(orders.payin.created)}</div>}
          </div>
        ))}
      </>
    );
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

function stringToMoney(string: string) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  });

  return formatter.format(Number(string));
}

function feeAdder(
  checked: boolean,
  orders: Order,
  setCheckedIds: React.Dispatch<React.SetStateAction<CheckedIds>>,
  setTotal: React.Dispatch<React.SetStateAction<number>>
) {
  const addIfCheckedOrSubtractIfUnchecked = checked ? 1 : -1;
  setTotal(previousTotal => previousTotal + addIfCheckedOrSubtractIfUnchecked * (Number(orders.price) + Number(orders.interest)));
  setCheckedIds(previousCheckedIds => ({ ...previousCheckedIds, [orders.id]: !previousCheckedIds[orders.id] }));
}
