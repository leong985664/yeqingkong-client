import * as React from 'react';

import { useQuery } from '@apollo/client';
import {
  Chip,
  Container,
} from '@mui/material';

import SectionHeader from './SectionHeader';
import { contentfulSpecialtiesQuery } from './utils/contentfulQueries';

const Specialties = () => {
  const { loading, error, data } = useQuery(contentfulSpecialtiesQuery);
  if (loading) return <></>;
  if (error) return <></>;
  const { specialties } = data.specialtiesCollection.items[0];

  return (
    <Container sx={{ pt: 5, px: 5 }}>
      <SectionHeader title="Specialties" />
      {specialties.map((specialty, index) => {
        return <Chip key={index} color="primary" variant="outlined" size="large" label={specialty} sx={{ margin: 0.5 }}/>
      })}
    </Container>
  )
}

export default Specialties;
