import { useQuery } from '@apollo/client';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { INLINES } from '@contentful/rich-text-types';
import ArticleIcon from '@mui/icons-material/Article';
import { Button, Container, Link, Typography } from "@mui/material";
import * as React from "react"
import { contentfulBiographyQuery } from './utils/contentfulQueries';

const Biography = () => {
  const { loading, error, data } = useQuery(contentfulBiographyQuery);
  if (loading) return <></>;
  if (error) return <></>;
  const { contentRaw, content, cv } = data.biographyCollection.items[0];

  const options = {
    renderNode: {
      [INLINES.HYPERLINK]: ({ data }, children) => (
        <Link
          href={data.uri}
          target="_blank"
          sx={{ textDecoration: "none" }}
        >
          {children}
        </Link>
      )
    },
  };

  return (
    <Container sx={{ pt: 5, px: 5 }}>
      <Typography gutterBottom variant="h5">Biography</Typography>
      <Typography gutterBottom variant="body" component="div">
        {documentToReactComponents(content.json, options)}
      </Typography>
      <Button target="_blank" href={cv.url} color="secondary" variant="outlined" startIcon={<ArticleIcon />} sx={{ mt: 1 }}>
        View CV
      </Button>
    </Container>
  )
}

export default Biography;
