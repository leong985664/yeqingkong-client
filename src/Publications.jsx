import { useQuery } from '@apollo/client';
import PersonIcon from '@mui/icons-material/Person';
import { Avatar, Button, Card, CardActions, CardContent, Chip, Container, Typography } from "@mui/material";
import * as React from "react"
import { contentfulPublicationsQuery } from './utils/contentfulQueries';
import { getYearString } from './utils/helpers';

const Publications = () => {
  const { loading, error, data } = useQuery(contentfulPublicationsQuery);
  if (loading) return <></>;
  if (error) return <></>;
  const publications = data.publicationsCollection.items;

  const renderAuthors = (authors) => {
    return (
      <div style={{ display: "flex", verticalAlign: "center" }}>
        <Avatar sx={{ width: "1.2em", height: "1.2em", mr: 1, backgroundColor: "inherit", border: "solid 0.1px lightgrey" }}>
          <PersonIcon fontSize="small" color="disabled" />
        </Avatar>
        {authors.map((author, index) => {
          return (
            <Typography variant="subtitle2" color="text.secondary" sx={{ my: "auto" }}>
              {`${index ? "," : ""} ${author.lastName}. ${author.firstName.charAt(0)}`}
            </Typography>
          )
        })}
      </div>
    )
  }

  const renderPublicationCard = (publication, index) => {
    return (
      <Card variant="outlined" sx={{ my: 2 }}>
        <CardContent>
          <div style={{ display: "flex" }}>
            <Typography variant="h6" component="div">
              {publication.title}
            </Typography>
            <Chip
              label={publication.status}
              color={publication.status.toLowerCase()}
              size="small"
              sx={{ margin: "auto 0 auto auto", borderRadius: "5px", fontWeight: "600px", textTransform: "uppercase" }}
              />
          </div>
          {renderAuthors(publication.authorsCollection.items)}
          <Typography variant="subtitle2">
            {publication.journal}
          </Typography>
        </CardContent>
        <CardActions>
          {publications.slides && <Button target="_blank" href={publication.slides.url} color="secondary" size="small">Slides</Button>}
          {publications.videoUrl && <Button target="_blank" href={publication.videoUrl} color="secondary" size="small">Presentation</Button>}
        </CardActions>
      </Card>
    )
  }

  return (
    <Container sx={{ pt: 5, px: 5 }}>
      <Typography variant="h5" sx={{ mb: 3 }}>Publications</Typography>
      {publications.map((publication, index) => {
        return renderPublicationCard(publication, index)
      })}
    </Container>
  )
}

export default Publications;
