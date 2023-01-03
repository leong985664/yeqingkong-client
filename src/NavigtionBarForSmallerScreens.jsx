import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';
import { Link } from 'react-router-dom';

const NavigationBarForSmallerScreens = (props) => {
    const { pages, setValue } = props;

    const [anchorElNav, setAnchorElNav] = React.useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
  return (
    <>
      <Box sx={{ position: "relative", flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
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
              sx={{ textTransform: page === "cv" ? "uppercase" : "capitalize" }}>
                {page}
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </>
  )
}

export default NavigationBarForSmallerScreens;
