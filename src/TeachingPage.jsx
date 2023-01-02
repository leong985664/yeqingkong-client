import { Container } from "@mui/material";
import * as React from "react"
import TeachingInterests from "./TeachingInterests";

const Teaching = () => {
  return (
    <Container disableGutters maxWidth="lg" sx={{ mt: 10 }}>
      <TeachingInterests />
    </Container>
  )
}

export default Teaching;
