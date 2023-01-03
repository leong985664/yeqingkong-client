import Box from '@mui/material/Box';
import * as React from 'react';
import NavigationBarForBiggerScreens from './NavigationBarForBiggerScreens';
import NavigationBarForSmallerScreens from './NavigtionBarForSmallerScreens';

const pages = ['home', 'research', 'teaching', "cv"];

function NavigationBar() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ bgcolor: "#000" }}>
      <NavigationBarForBiggerScreens pages={pages} value={value} setValue={setValue} />
      <NavigationBarForSmallerScreens pages={pages} value={value} setValue={setValue} />
    </Box>
  );
}

export default NavigationBar;
