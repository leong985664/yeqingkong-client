import * as React from 'react';

import { Container } from '@mui/material';

import Courses from './Courses';
import TeachingInterests from './TeachingInterests';
import Testimonial from './Testimonial';

const TeachingPage = () => {
  return (
    <Container disableGutters maxWidth="lg">
      <TeachingInterests />
      <Courses />
      <Testimonial />
    </Container>
  )
}

export default TeachingPage;
