import * as React from 'react';

import { Container } from '@mui/material';

import Footer from './Footer';
import Publications from './Publications';
import ResearchInterests from './ResearchInterests';

const ResearchPage = () => {
  return (
    <>
      <Container disableGutters maxWidth="lg">
        <ResearchInterests />
        <Publications />
      </Container>
      <Footer />
    </>
  )
}

export default ResearchPage;
