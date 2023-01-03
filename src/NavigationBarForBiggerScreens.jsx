import * as React from "react";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { Container } from "@mui/system";

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

const StyledTab = styled((props) => <Tab disableRipple component={Link} {...props} />
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
  const { pages, value, setValue } = props;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="lg" sx={{ display: { xs: 'none', md: 'flex' } }}>
      <Typography
        variant="h6"
        noWrap
        component={Link}
        to="/"
        onClick={() => setValue(0)}
        sx={{
          m: "auto 50px",
          display: 'flex',
          color: 'white',
          textDecoration: 'none',
        }}
      >
        Yeqing Kong
      </Typography>
      <div>
        <Box sx={{ p: 1 }} />
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="styled tabs example"
        >
          {pages.map((page) => (
            <StyledTab key={page} to={`/${(page === "home") ? "" : page}`} label={page} />
          ))}
        </StyledTabs>
        <Box sx={{ p: 1 }} />
      </div>
    </Container>
  )
}

export default NavigationBarForBiggerScreens;