import * as React from 'react';

import { useQuery } from '@apollo/client';
import { Timeline } from '@mui/lab';
import { Container } from '@mui/material';

import AwardCard from './AwardCard';
import SectionHeader from './SectionHeader';
import { contentfulAwardsQuery } from './utils/contentfulQueries';

const Awards = () => {
  const { loading, error, data } = useQuery(contentfulAwardsQuery);
  if (loading) return <></>;
  if (error) return <></>;
  const awards = data.honorsAwardsCollection.items;

  return (
    <Container sx={{ pt: 5, px: 5 }}>
      <SectionHeader title="Honors & Awards" divider />
      <Timeline position="alternate">
        {awards.map((award, index) => (
          <AwardCard key={index} award={award} />
        ))}
      </Timeline>
    </Container>
  )
}

export default Awards;
