import { useState } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import { Fees } from '../components/Fees';
import { Status } from '../components/Status';
import { useStudents } from '../utils/useStudents';
import { useOrders } from '../utils/useOrders';
import { Student, Order } from '../types';

//3b35fb50-3d5e-41b3-96d6-c5566141fab0

const Home: NextPage = () => {
  const [total, setTotal] = useState(0);

  const router = useRouter();
  const { studentId } = router.query;

  const selecterdStudent: Student | null = useStudents(studentId as string);
  const studentOrders: Order[] | null = useOrders(studentId as string);

  console.log(studentOrders);

  return (
    <>
      <Head>
        <title>Cometa School App</title>
        <meta name="Cometa School App" content="Cometa School App" />
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Status student={selecterdStudent} totalToPay={total} />
          <Fees type={'PAID'} orders={studentOrders} />
          <Fees type={'DUE'} orders={studentOrders} setTotal={setTotal} />
          <Fees type={'OUTSTANDING'} orders={studentOrders} setTotal={setTotal} />
        </Box>
      </Container>
    </>
  );
};

export default Home;
