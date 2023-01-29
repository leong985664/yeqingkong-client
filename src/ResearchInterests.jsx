import { useQuery } from '@apollo/client';
import { Container, Grid, Typography } from "@mui/material";
import * as React from "react"
import ResearchInterestCard from "./ResearchInterestCard";
import { contentfulResearchInterestsQuery } from "./utils/contentfulQueries";

const ResearchInterests = () => {
  const { loading, error, data } = useQuery(contentfulResearchInterestsQuery);
  if (loading) return <></>;
  if (error) return <></>;
  const interests = data.researchInterestCollection.items;

  return (
    <Container sx={{ pt: 5, px: 5 }}>
      <Typography variant="h5" sx={{ mb: 3 }}>Research Interests</Typography>
      <Grid container spacing={2}>
        {interests.map((interest, index) => <ResearchInterestCard key={index} interest={interest} />)}
      </Grid>
    </Container>
  )
}

export default ResearchInterests;
