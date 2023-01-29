import * as React from 'react';
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";

const ResearchInterestCard = (props) => {
  const { interest } = props;

  return (
    <Grid item xs={12} md={4}>
      <Card sx={{ height: "100%" }}>
        <CardMedia
          sx={{ height: 200 }}
          image={interest.picture.url}
          title={interest.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {interest.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {interest.description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default ResearchInterestCard;
