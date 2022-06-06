import { useState } from 'react';

import ProfilePictureCartoon from "../images/ProfilePictureCartoon.png";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const ResponsiveAppBar = (props) => {
  const { toggleDarkMode, isDarkMode } = props;


  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar 
      position="fixed"
      enableColorOnDark
      color="primary"
      style={{ background: 'transparent', boxShadow: 'none'}} 
    >
      <Container maxWidth="xl">
        <Toolbar>
            <Avatar 
            sx={{
              xs: 'none',
              md: 'flex',
              width: 30,
              height: 30,
              margin: 1,
              color: 'secondary' 
            }} 
            src={ProfilePictureCartoon}
            alt="Maïeul Chevalier" 
          />
          {/* <ProfilePictureCartoon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
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
              <MenuItem key="About me" onClick={handleCloseNavMenu}>
                <Typography textAlign="center"  variant="h6" color="inherit" sx={{fontWeight:700, mr:1}}>Tech stack</Typography>
              </MenuItem>
              <MenuItem key="Portfolio" onClick={handleCloseNavMenu}>
                <Typography textAlign="center"  variant="h6" color="inherit" sx={{fontWeight:700, mr:1}}>Portfolio</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                key="About me"
                color="secondary"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: 'block' }}
              >
                <Typography variant="h6" color="inherit" sx={{fontWeight:700, mr:1}}>Compétences</Typography>
              </Button>
              <Button
                key="About me"
                color="secondary"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: 'block' }}
              >
                <Typography  variant="h6" color="inherit" sx={{fontWeight:700, mr:1}}>Portfolio</Typography>
              </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Avatar
              sx={{
                width:30,
                height:30,
                bgcolor:'primary'
              }}
              onClick={
                () => {
                  toggleDarkMode()
                }
              }
            >
              {isDarkMode ? <Brightness7Icon color='secondary' />: <DarkModeIcon color='secondary' />}
              
            </Avatar>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;