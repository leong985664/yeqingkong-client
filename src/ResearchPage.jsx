import * as React from 'react';

import { Container } from '@mui/material';

import Publications from './Publications';
import ResearchInterests from './ResearchInterests';

const ResearchPage = () => {
  return (
    <Container disableGutters maxWidth="lg">
      <ResearchInterests />
      <Publications />
    </Container>
  )
}

export default ResearchPage;
