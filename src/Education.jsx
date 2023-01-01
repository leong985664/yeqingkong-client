import { useQuery } from '@apollo/client';
import * as React from "react"
import { Avatar, Container, Divider, Typography } from "@mui/material";
import { getTimeSpanString } from "./utils/helpers";
import { contentfulEducationQuery } from './utils/contentfulQueries';

const Education = () => {
  const { loading, error, data } = useQuery(contentfulEducationQuery);
  if (loading) return <></>;
  if (error) return <></>;
  const education = data.educationCollection.items;

  const renderEducationItem = (item, index) => {
    return (
      <div style={{ display: "flex" }}>
        <div style={{ padding: 20 }}>
          <Avatar
            alt={item.organization}
            src={item.logo.url}
            sx={{ width: 64, height: 64 }}
          />
        </div>
        <div style={{ padding: 5, margin: "auto 0" }}>
          <Typography variant="subtitle1">{item.degree}</Typography>
          <Typography variant="subtitle1">{item.organization}</Typography>
        </div>
        <div style={{ padding: 5, margin: "auto 0 auto auto", display: "grid" }}>
          <Typography variant="subtitle1" sx={{ ml: "auto" }}>{item.locationString}</Typography>
          <Typography variant="subtitle1" sx={{ ml: "auto" }}>{getTimeSpanString(item.startTime, item.endTime, true)}</Typography>
        </div>
      </div>
    )
  }

  return (
    <Container sx={{ pt: 5, px: 5 }}>
      <Typography variant="h6" sx={{ mb: 3 }}>Education</Typography>
      {education.map((item, index) => {
        return (
          <>
            {!!index && <Divider />}
            {renderEducationItem(item, index)}
          </>
        )
      })}
    </Container>
  )
}

export default Education;
