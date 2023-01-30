import * as React from 'react';

import { Container } from '@mui/material';

import Courses from './Courses';
import Footer from './Footer';
import TeachingInterests from './TeachingInterests';
import Testimonial from './Testimonial';

const TeachingPage = () => {
  return (
    <>
      <Container disableGutters maxWidth="lg">
        <TeachingInterests />
        <Courses />
        <Testimonial />
      </Container>
      <Footer />
    </>
  )
}

export default TeachingPage;
