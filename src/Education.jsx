import * as React from 'react';

import { useQuery } from '@apollo/client';
import {
  Container,
  Divider,
} from '@mui/material';

import EducationItem from './EducationItem';
import SectionHeader from './SectionHeader';
import { contentfulEducationQuery } from './utils/contentfulQueries';

const Education = () => {
  const { loading, error, data } = useQuery(contentfulEducationQuery);
  if (loading) return <></>;
  if (error) return <></>;
  const education = data.educationCollection.items;

  return (
    <Container sx={{ pt: 5, px: 5 }}>
      <SectionHeader title="Education" divider />
      {education.map((item, index) => {
        return (
          <div key={index}>
            {!!index && <Divider />}
            <EducationItem item={item} />
          </div>
        )
      })}
    </Container>
  )
}

export default Education;
