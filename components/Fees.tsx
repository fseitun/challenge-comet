import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';

import { Order } from '../types';
import { stringToMoney } from './stringToMoney';

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
  } else if (type === 'DUE' && setTotal !== undefined) {
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
  } else if (type === 'OUTSTANDING' && setTotal !== undefined) {
    const ordersToDisplay = orders?.filter(order => order.status.toUpperCase() === type);

    return (
      <>
        <div>{type}</div>
        {ordersToDisplay?.map(orders => (
          <div key={orders.id}>
            <div>{orders.name}</div>
            <div>{dateStringWithoutTimezoneToString(orders.due)}</div>
            <div>{stringToMoney(orders.price)}</div>
            <Checkbox onChange={e => feeAdder(e.target.checked, orders, setCheckedIds, setTotal)} />
            {orders.payin?.created && <div>{dateStringWithTimezoneToString(orders.payin.created)}</div>}
          </div>
        ))}
      </>
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
