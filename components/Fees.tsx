import { Student, Order } from '../types';

interface Props {
  type: 'PAID' | 'DUE' | 'OUTSTANDING';
  orders: Order[] | null;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
}

export function Fees({ type, orders, setTotal }: Props) {
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
