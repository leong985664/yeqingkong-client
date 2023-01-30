import * as React from 'react';

import { useQuery } from '@apollo/client';
import {
  Chip,
  Container,
} from '@mui/material';

import SectionHeader from './SectionHeader';
import { contentfulTeachingInterestsQuery } from './utils/contentfulQueries';

const TeachingInterests = () => {
  const { loading, error, data } = useQuery(contentfulTeachingInterestsQuery);
  if (loading) return <></>;
  if (error) return <></>;
  const { interests } = data.teachingInterestsCollection.items[0];

  return (
    <Container sx={{ pt: 5, px: 5 }}>
      <SectionHeader title="Teaching Interests" divider />
      {interests.map((interest, index) => {
        return <Chip key={index} color="primary" variant="outlined" size="large" label={interest} sx={{ margin: 0.5 }}/>
      })}
    </Container>
  )
}

export default TeachingInterests;
