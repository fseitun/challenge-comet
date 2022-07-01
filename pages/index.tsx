import type { NextPage } from 'next';
import Head from 'next/head';

import { Fees } from '../components/Fees';
import { useStudents } from '../utils/useStudents';
import { useOrders } from '../utils/useOrders';
import { Student, Order } from '../types';
import styles from '../styles/Home.module.css';

const studentId = '3b35fb50-3d5e-41b3-96d6-c5566141fab0';

const Home: NextPage = () => {
  const selecterdStudent: Student | null = useStudents(studentId);
  const studentOrders: Order[] | null = useOrders(studentId);

  return (
    <div className={styles.container}>
      <Head>
        <title>Cometa School App</title>
        <meta name="Cometa School App" content="Cometa School App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* <Status student={selecterdStudent} /> */}
        <Fees type={'PAID'} orders={studentOrders} />
        ------------------------------------------
        <Fees type={'DUE'} orders={studentOrders} />
        ------------------------------------------
        <Fees type={'OUTSTANDING'} orders={studentOrders} />
      </main>
    </div>
  );
};

export default Home;
