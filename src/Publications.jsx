import * as React from 'react';

import { useQuery } from '@apollo/client';
import {
  Container,
  Grid,
  Typography,
} from '@mui/material';

import CustomizedSelect from './CustomizedSelect';
import PublicationCard from './PublicationCard';
import SelectStatusBar from './SelectStatusBar';
import { contentfulPublicationsQuery } from './utils/contentfulQueries';
import { getYear } from './utils/helpers';

const statusOrder = {
  "Published": 1,
  "Forthcoming": 2,
  "Under Revision": 3,
  "Under Development": 4
};

const typeOrder = {
  "Journal Article": 1,
  "Conference Proceeding": 2,
  "Special Issue": 3,
  "Book Review": 4,
}

const Publications = () => {
  const [status, selectStatus] = React.useState([]);
  const [types, selectTypes] = React.useState([]);
  const [years, selectYears] = React.useState([]);

  const { loading, error, data } = useQuery(contentfulPublicationsQuery);
  if (loading) return <></>;
  if (error) return <></>;

  const publications = [...data.publicationsCollection.items].sort((a, b) => statusOrder[a.status] - statusOrder[b.status]);

  const filteredPublications = publications.filter(publication => (
    !status.length || status.includes(publication.status)) &&
    (!types.length || types.includes(publication.type)) &&
    (!years.length || years.includes(getYear(publication.time))));

  const allStatus = [...new Set(publications.map(publication => publication.status))].sort((a, b) => statusOrder[a] - statusOrder[b]);
  const allTypes = [...new Set(publications.map(publication => publication.type))].sort((a, b) => typeOrder[a] - typeOrder[b]);
  const allYears = [...new Set(publications.map(publication => getYear(publication.time)))].sort().reverse();

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

  const clearAllFiltersCallback = () => {
    selectStatus([]);
    selectTypes([]);
    selectYears([]);
  };

  return (
    <Container sx={{ pt: 5, px: 5 }}>
      <Typography variant="h5" sx={{ mb: 3 }}>Publications</Typography>
      <Grid container spacing={2}>
        <CustomizedSelect id="status" label="Status" multiple={true} allValues={allStatus} value={status} onChange={getOnChangeCallback(selectStatus)} />
        <CustomizedSelect id="type" label="Type" multiple={true} allValues={allTypes} value={types} onChange={getOnChangeCallback(selectTypes)} />
        <CustomizedSelect id="year" label="Year" multiple={true} allValues={allYears} value={years} onChange={getOnChangeCallback(selectYears)} />
      </Grid>
      <SelectStatusBar clearAllCallback={clearAllFiltersCallback} count={filteredPublications.length} />
      {filteredPublications.map((publication, index) => 
        <PublicationCard key={index} publication={publication} />
      )}
    </Container>
  )
}

export default Publications;
