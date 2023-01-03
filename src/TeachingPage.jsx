import { Container } from "@mui/material";
import * as React from "react"
import Courses from "./Courses";
import TeachingInterests from "./TeachingInterests";

const TeachingPage = () => {
  return (
    <Container disableGutters maxWidth="lg">
      <TeachingInterests />
      <Courses />
    </Container>
  )
}

export default TeachingPage;
