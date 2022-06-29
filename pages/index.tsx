import type { NextPage } from 'next';
import Head from 'next/head';

import styles from '../styles/Home.module.css';
import { useStudents } from '../utils/useStudents';
import { useOrders } from '../utils/useOrders';
import { Student, Order } from '../types';

const Home: NextPage = () => {
  const student: Student | null = useStudents('1');
  const orders: Order[] | null = useOrders('1');

  return (
    <div className={styles.container}>
      <Head>
        <title>Cometa School App</title>
        <meta name="Cometa School App" content="Cometa School App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {student?.first_name}
        {orders?.[0].name}
      </main>
    </div>
  );
};

export default Home;
