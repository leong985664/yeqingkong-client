import { useQuery } from '@apollo/client';
import * as React from "react"
import { Helmet } from "react-helmet";
import { Avatar, Container, Typography } from "@mui/material";
import { contentfulBasicInfoQuery } from './utils/contentfulQueries';

const NameCard = () => {
  const { loading, error, data } = useQuery(contentfulBasicInfoQuery);
  if (loading) return <></>;
  if (error) return <></>;
  const { name, jobTitle, avatar } = data.basicInfoCollection.items[0];

  return (
    <>
      <Helmet>
        <title>{name}</title>
        <meta name="description" content={jobTitle} />
      </Helmet>
      <Container sx={{ pt: 5, px: 5 }}>
        <div>
          <Avatar
            alt="Yeqing Kong"
            src={avatar.url}
            sx={{ width: 200, height: 200, margin: "auto" }}
          />
        </div>
        <Typography variant="h5" align="center" sx={{ mt: 3 }}>{name}</Typography>
        <Typography variant="subtitle1" align="center" sx={{ mt: 3 }}>{jobTitle}</Typography>
      </Container>
    </>
  )
}

export default NameCard;
