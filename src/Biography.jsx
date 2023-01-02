import { useQuery } from '@apollo/client';
import ArticleIcon from '@mui/icons-material/Article';
import { Button, Container, Typography } from "@mui/material";
import * as React from "react"
import { contentfulBiographyQuery } from './utils/contentfulQueries';

const Biography = () => {
  const { loading, error, data } = useQuery(contentfulBiographyQuery);
  if (loading) return <></>;
  if (error) return <></>;
  const { contentRaw, cv } = data.biographyCollection.items[0];

  return (
    <Container sx={{ pt: 5, px: 5 }}>
      <Typography gutterBottom variant="h5">Biography</Typography>
      <Typography gutterBottom variant="body" component="div">
        {contentRaw}
      </Typography>
      <Button target="_blank" href={cv.url} color="secondary" variant="outlined" startIcon={<ArticleIcon />} sx={{ mt: 1 }}>
        View CV
      </Button>
    </Container>
  )
}

export default Biography;
