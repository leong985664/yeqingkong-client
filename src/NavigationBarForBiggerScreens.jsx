import * as React from 'react';

import { Link } from 'react-router-dom';

import {
  Container,
  styled,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from '@mui/material';

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 40,
    width: "100%",
    backgroundColor: "#635ee7",
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />
)(
  ({ theme }) => ({
    textTransform: "Uppercase",
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: "rgba(255, 255, 255, 0.7)",
    "&.Mui-selected": {
      color: "#fff",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "rgba(100, 95, 228, 0.32)",
    },
  }),
);

const NavigationBarForBiggerScreens = (props) => {
  const { pages, cvQuery, value, setValue } = props;
  const { loading, error, data } = cvQuery;

  const handleChange = (event, newValue) => {
    if (newValue < pages.length) {
      setValue(newValue);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ display: { xs: 'none', sm: 'flex' } }}>
      <div style={{ margin: "auto 0" }}>
        <Typography
          variant="h5"
          noWrap
          component={Link}
          to="/"
          onClick={() => setValue(0)}
          sx={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Yeqing Kong
        </Typography>
      </div>
      <Toolbar>
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="styled tabs example"
          sx={{ py: 1, px: 3 }}
        >
          {pages.map((page) => (
            <StyledTab key={page} component={Link} to={`/${(page === "home") ? "" : page}`} label={page} />
          ))}
          {!(loading || error) && <StyledTab href={data.biographyCollection.items[0].cv.url} target="_blank" label="CV" />}
        </StyledTabs>
      </Toolbar>
    </Container>
  )
}

export default NavigationBarForBiggerScreens;