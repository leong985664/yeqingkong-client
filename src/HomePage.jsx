import { Container, Grid } from "@mui/material";
import * as React from "react"
import Awards from "./Awards";
import Contacts from "./Contacts";
import Biography from "./Biography";
import Education from "./Education";
import NameCard from "./NameCard";
import Specialties from "./Specialties";

const HomePage = () => {
  return (
    <Container disableGutters maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <NameCard />
          <Contacts />
        </Grid>
        <Grid item xs={12} md={8}>
          <Biography />
          <Specialties />
        </Grid>
      </Grid>
      <Education />
      <Awards />
    </Container>
  )
}

export default HomePage;
