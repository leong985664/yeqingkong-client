import { useQuery } from '@apollo/client';
import * as React from "react"
import { Chip, Container, Typography } from "@mui/material";
import { contentfulSpecialtiesQuery } from './utils/contentfulQueries';

const Specialties = () => {
  const { loading, error, data } = useQuery(contentfulSpecialtiesQuery);
  if (loading) return <></>;
  if (error) return <></>;
  const { specialties } = data.specialtiesCollection.items[0];

  return (
    <Container sx={{ pt: 5, px: 5 }}>
      <Typography gutterBottom variant="h5">Specialties</Typography>
      {specialties.map((specialty, index) => {
        return <Chip key={index} color="primary" variant="outlined" size="large" label={specialty} sx={{ margin: 0.5 }}/>
      })}
    </Container>
  )
}

export default Specialties;
