import * as React from 'react';

import { Link } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import {
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';

const NavigationBarForSmallerScreens = (props) => {
    const { pages, cvQuery, setValue } = props;
    const { loading, error, data } = cvQuery;
    
    const [anchorElNav, setAnchorElNav] = React.useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
  return (
    <Toolbar sx={{ display: { xs: 'flex', sm: 'none' } }}>
      <IconButton
        size="large"
        onClick={handleOpenNavMenu}
        >
        <MenuIcon sx={{ color: "#fff" }}/>
      </IconButton>
      <Typography
        variant="h6"
        noWrap
        component={Link}
        to="/"
        onClick={() => setValue(0)}
        sx={{
          display: 'inline-block',
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-50%)",
          color: '#fff',
          textDecoration: 'none',
        }}
      >
        Yeqing Kong
      </Typography>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
            display: { xs: 'block', md: 'none' },
        }}
        >
        {pages.map((page, index) => (
          <MenuItem
            key={page}
            component={Link}
            to={page === "home" ? "" : `/${page}`}
            onClick={handleCloseNavMenu}
            sx={{ textTransform: "capitalize" }}>
              {page}
          </MenuItem>
        ))}
        {!(loading || error) && <MenuItem
          component="a"
          href={data.biographyCollection.items[0].cv.url}
          target="_blank"
          onClick={handleCloseNavMenu}
          sx={{ textTransform: "uppercase" }}>
            CV
          </MenuItem>}
      </Menu>
    </Toolbar>
  )
}

export default NavigationBarForSmallerScreens;
