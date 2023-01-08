import { useQuery } from '@apollo/client';
import { Container, Typography } from "@mui/material";
import * as React from "react"
import CustomizedSelect from './CustomizedSelect';
import PublicationCard from './PublicationCard';
import { contentfulPublicationsQuery } from './utils/contentfulQueries';
import { getYear } from './utils/helpers';

const Publications = () => {
  const [status, selectStatus] = React.useState([]);
  const [types, selectTypes] = React.useState([]);
  const [years, selectYears] = React.useState([]);

  const { loading, error, data } = useQuery(contentfulPublicationsQuery);
  if (loading) return <></>;
  if (error) return <></>;

  const publications = [...data.publicationsCollection.items];

  publications.sort((a, b) => {
    if (a.status === "Published") {
      if (b.status === "Published") return 0
      else return -1;
    } else if (a.status === "Forthcoming") {
      if (b.status === "Published") return 1
      else if (b.status === "Forthcoming") return 0
      else return -1;
    } else if (a.status === "Under Revision") {
      if (b.status === "Under Revision") return -1
      else if (b.status === "Under Revision") return 0;
      else return 1;
    } else if (a.status === "Under Development") {
      if (b.status === "Under Development") return 0
      else return 1;
    } else {
      return 0;
    }
  });

  const filteredPublications = publications.filter(publication => (
    !status.length || status.includes(publication.status)) &&
    (!types.length || types.includes(publication.type)) &&
    (!years.length || years.includes(getYear(publication.time))));

  const allStatus = [...new Set(filteredPublications.map(publication => publication.status))];
  const allTypes = [...new Set(filteredPublications.map(publication => publication.type))];
  const allYears = [...new Set(filteredPublications.map(publication => getYear(publication.time)))];

  const getOnChangeCallback = (callback) => {
    const onChangeCallback = (event) => {
      const {
        target: { value },
      } = event;
      callback(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    }
    return onChangeCallback;
  };

  return (
    <Container sx={{ pt: 5, px: 5 }}>
      <Typography variant="h5" sx={{ mb: 3 }}>Publications</Typography>
      <div>
        <CustomizedSelect id="status" label="Status" multiple={true} allValues={allStatus} value={status} onChange={getOnChangeCallback(selectStatus)} />
        <CustomizedSelect id="type" label="Type" multiple={true} allValues={allTypes} value={types} onChange={getOnChangeCallback(selectTypes)} />
        <CustomizedSelect id="year" label="Year" multiple={true} allValues={allYears} value={years} onChange={getOnChangeCallback(selectYears)} />
      </div>
      {filteredPublications.map((publication, index) => 
        <PublicationCard key={index} publication={publication} />
      )}
    </Container>
  )
}

export default Publications;
