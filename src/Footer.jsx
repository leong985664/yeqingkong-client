import * as React from 'react';

import {
  Container,
  Divider,
  Grid,
  Typography,
} from '@mui/material';

import Contacts from './Contacts';

const Footer = () => {
  return (
    <>
      <Divider sx={{ mt: 10 }} />
      <Container maxWidth="lg" sx={{ py: 2.5 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} sx={{ display: "flex" }}>
            <Typography variant="body3" component="div" sx={{ m: "auto" }}>Copyright © Yeqing Kong 2023. All rights reserved.</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Contacts color="grey" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Footer;
