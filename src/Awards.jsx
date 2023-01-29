import { useQuery } from '@apollo/client';
import * as React from "react"
import { Avatar, Card, CardContent, Container, Typography } from "@mui/material";
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator  } from '@mui/lab';
import { contentfulAwardsQuery } from "./utils/contentfulQueries";
import { getYearSpanString } from "./utils/helpers";

const Awards = () => {
  const { loading, error, data } = useQuery(contentfulAwardsQuery);
  if (loading) return <></>;
  if (error) return <></>;
  const awards = data.honorsAwardsCollection.items;

  const renderAwardItem = (award, index) => {
    return (
      <TimelineItem key={index}>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
        {getYearSpanString(award.startTime, award.endTime)}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
            <TimelineDot color="inherit">
              <Avatar sx={{ backgroundColor: "transparent" }}>
                <img alt={award.logo.title} src={award.logo.url} style={{ width: "100%", heigth: "auto" }} />
              </Avatar>
            </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
        <Card elevation={5}>
          <CardContent>
            <Typography variant="subtitle1">{award.name}</Typography>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>{`$${award.amount}`}</Typography>
          </CardContent>
        </Card>
        </TimelineContent>
      </TimelineItem>
    )
  }

  return (
    <Container sx={{ pt: 5, px: 5 }}>
      <Typography gutterBottom variant="h5">Honors & Awards</Typography>
      <Timeline position="alternate">
        {awards.map((award, index) => {
          return renderAwardItem(award, index);
        })}
      </Timeline>
    </Container>
  )
}

export default Awards;