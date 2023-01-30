import * as React from 'react';

import {
  Container,
  Grid,
} from '@mui/material';

import Awards from './Awards';
import Biography from './Biography';
import Contacts from './Contacts';
import Education from './Education';
import Footer from './Footer';
import NameCard from './NameCard';
import Specialties from './Specialties';

const HomePage = () => {
  return (
    <>
      <Container disableGutters maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} sx={{ margin: "auto" }}>
            <NameCard />
            <Contacts iconSize="large" />
          </Grid>
          <Grid item xs={12} md={8}>
            <Biography />
            <Specialties />
          </Grid>
        </Grid>
        <Education />
        <Awards />
      </Container>
      <Footer />
    </>
  )
}

export default HomePage;
