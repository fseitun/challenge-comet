import { useEffect, useState } from 'react';
import { Container } from '@mui/material';

export default function Custom404() {
  const [environmentUrl, setEnvironmentUrl] = useState('');

  useEffect(() => {
    setEnvironmentUrl(`${window.location.href}3b35fb50-3d5e-41b3-96d6-c5566141fab0`);
  }, []);

  return (
    <Container style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      Try
      <a rel="noopener noreferrer" href={environmentUrl}>
        &nbsp;the following&nbsp;
      </a>
      user id
    </Container>
  );
}
