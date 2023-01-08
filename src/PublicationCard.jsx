import PersonIcon from '@mui/icons-material/Person';
import { Avatar, Button, Card, CardActions, CardContent, Chip, Typography } from "@mui/material";
import * as React from "react"
import { getMonthYear } from './utils/helpers';

const PublicationCard = (props) => {
  const { publication } = props;

  return (
    <Card variant="outlined" sx={{ my: 2 }}>
      <CardContent>
        <Chip
          label={publication.type}
          variant="outlined"
          color="primary"
          size="small"
          sx={{ m: "auto 0 auto auto", borderRadius: "5px" }}
        />
        <div style={{ display: "flex" }}>
          <Typography variant="h6" component="div" sx={{ pr: 5 }}>
            {publication.title}
          </Typography>
          <Chip
            label={publication.status}
            color={publication.status.toLowerCase()}
            size="small"
            sx={{ m: "auto 0 auto auto", borderRadius: "5px", textTransform: "uppercase" }}
          />
        </div>
        <div style={{ display: "flex", verticalAlign: "center" }}>
          <Avatar sx={{ width: "1em", height: "1em", mr: 1, my: "auto", backgroundColor: "inherit", border: "solid 0.1px lightgrey" }}>
            <PersonIcon fontSize="small" color="disabled" />
          </Avatar>
          {publication.authorsCollection.items.map((author, index) => {
            return (
              <Typography key={index} variant="subtitle2" color="text.secondary" sx={{ my: "auto", py: 0.5 }}>
                {`${index ? "," : ""} ${author.lastName}. ${author.firstName.charAt(0)}`}
              </Typography>
            )
          })}
        </div>
        <Typography variant="subtitle1">
          {publication.journal}
        </Typography>
        <Typography variant="caption">
          {getMonthYear(publication.time)}
        </Typography>
      </CardContent>
      <CardActions>
        {publication.url && <Button target="_blank" href={publication.url} color="secondary" size="small">DOI</Button>}
        {publication.slides && <Button target="_blank" href={publication.slides.url} color="secondary" size="small">Slides</Button>}
        {publication.videoUrl && <Button target="_blank" href={publication.videoUrl} color="secondary" size="small">Presentation</Button>}
      </CardActions>
    </Card>
  )
}

export default PublicationCard;
