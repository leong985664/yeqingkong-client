import * as React from 'react';

import { useQuery } from '@apollo/client';
import {
  Container,
  Grid,
} from '@mui/material';

import ResearchInterestCard from './ResearchInterestCard';
import SectionHeader from './SectionHeader';
import { contentfulResearchInterestsQuery } from './utils/contentfulQueries';

const ResearchInterests = () => {
  const { loading, error, data } = useQuery(contentfulResearchInterestsQuery);
  if (loading) return <></>;
  if (error) return <></>;
  const interests = data.researchInterestCollection.items;

  return (
    <Container sx={{ pt: 5, px: 5 }}>
      <SectionHeader title="Research Interests" divider />
      <Grid container spacing={2}>
        {interests.map((interest, index) => <ResearchInterestCard key={index} interest={interest} />)}
      </Grid>
    </Container>
  )
}

export default ResearchInterests;
