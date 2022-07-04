import { useEffect, useState } from 'react';
import { Container } from '@mui/material';

export default function Custom404() {
  const [environmentUrl, setEnvironmentUrl] = useState('');

  useEffect(() => {
    setEnvironmentUrl(`${window.location.href}dc438d87-18fc-4f65-8927-d860d1496795`);
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
