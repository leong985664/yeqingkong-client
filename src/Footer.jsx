import * as React from 'react';

import {
  Container,
  Divider,
  Typography,
} from '@mui/material';

import Contacts from './Contacts';

const Footer = () => {
  return (
    <>
      <Divider sx={{ mt: 10 }} />
      <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between', py: 2.5 }}>
        <Typography variant="body1" component='div' sx={{ my: "auto" }}>Copyright © Yeqing Kong 2023. All rights reserved.</Typography>
        <div style={{ m: "auto" }}>
          <Contacts color="grey" />
        </div>
      </Container>
    </>
  );
}

export default Footer;
