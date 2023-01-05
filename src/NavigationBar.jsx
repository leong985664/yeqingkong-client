import { useQuery } from '@apollo/client';
import Box from '@mui/material/Box';
import * as React from 'react';
import NavigationBarForBiggerScreens from './NavigationBarForBiggerScreens';
import NavigationBarForSmallerScreens from './NavigtionBarForSmallerScreens';
import { contentfulCVQuery } from './utils/contentfulQueries';

const pages = ['home', 'research', 'teaching'];

function NavigationBar() {
  const [value, setValue] = React.useState(0);

  const cvQuery = useQuery(contentfulCVQuery);

  return (
    <Box sx={{ bgcolor: "#000" }}>
      <NavigationBarForBiggerScreens pages={pages} cvQuery={cvQuery} value={value} setValue={setValue} />
      <NavigationBarForSmallerScreens pages={pages} cvQuery={cvQuery} value={value} setValue={setValue} />
    </Box>
  );
}

export default NavigationBar;
