import * as React from 'react';

import PropTypes from 'prop-types';

import { useQuery } from '@apollo/client';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {
  AppBar,
  Box,
  Fab,
  Fade,
  useScrollTrigger,
} from '@mui/material';

import NavigationBarForBiggerScreens from './NavigationBarForBiggerScreens';
import NavigationBarForSmallerScreens from './NavigtionBarForSmallerScreens';
import { contentfulCVQuery } from './utils/contentfulQueries';

const pages = ['home', 'research', 'teaching'];

function ElevationScroll(props) {
  const { children } = props;
  
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 10 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired
};

function ScrollTop(props) {
  const { children } = props;
  
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', zIndex: 1, bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
};

const NavigationBar = () => {
  const [value, setValue] = React.useState(0);

  const cvQuery = useQuery(contentfulCVQuery);

  return (
    <>
      <ElevationScroll>
        <AppBar sx={{ bgcolor: "rgba(0,0,0,0.9)", py: 1 }}>
          <NavigationBarForBiggerScreens pages={pages} cvQuery={cvQuery} value={value} setValue={setValue} />
          <NavigationBarForSmallerScreens pages={pages} cvQuery={cvQuery} value={value} setValue={setValue} />
        </AppBar>
      </ElevationScroll>
      <div id="back-to-top-anchor" style={{ height: "50px" }}></div>
      <ScrollTop>
        <Fab size="medium" color="primary">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
}

export default NavigationBar;
