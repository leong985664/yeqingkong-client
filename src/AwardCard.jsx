import * as React from 'react';

import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from '@mui/lab';
import {
  Avatar,
  Card,
  CardContent,
  Typography,
} from '@mui/material';

import { getYearSpanString } from './utils/helpers';

const AwardCard = (props) => {
  const { award } = props;
  
  return (
    <TimelineItem>
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
          <Typography variant="h6" sx={{ fontWeight: 700 }}>{`$${award.amount.toLocaleString('en-us')}`}</Typography>
        </CardContent>
      </Card>
      </TimelineContent>
    </TimelineItem>
  )
}

export default AwardCard;
