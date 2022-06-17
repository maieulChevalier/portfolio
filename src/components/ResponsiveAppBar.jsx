import { useState, useContext } from "react";

import { ColorModeContext } from "../App";
import ProfilePictureCartoon from "../images/ProfilePictureCartoon.png";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useNavigate } from "react-router-dom";
import { isDarkModeVar } from "../cache";
import { useReactiveVar } from "@apollo/client";
import { useTheme } from "@emotion/react";
import Brightness4Icon from "@mui/icons-material/Brightness4";

const ResponsiveAppBar = (props) => {
  const { position = "fixed" } = props;
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const isDarkMode = useReactiveVar(isDarkModeVar);

  const navigate = useNavigate();

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
      position={position}
      style={{
        boxShadow: "none",
        background: "transparent",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar>
          <Avatar
            sx={{
              xs: "none",
              md: "flex",
              width: 30,
              height: 30,
              margin: 1,
            }}
            style={{
              cursor: "pointer",
            }}
            onClick={() => {
              navigate("/");
            }}
            src={ProfilePictureCartoon}
            alt="Maïeul Chevalier"
          />
          {/* <ProfilePictureCartoon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem key="skills" onClick={handleCloseNavMenu}>
                <Typography
                  textAlign="center"
                  variant="h6"
                  sx={{ fontWeight: 700, mr: 1 }}
                >
                  Compétences
                </Typography>
              </MenuItem>
              <MenuItem key="Portfolio" onClick={handleCloseNavMenu}>
                <Typography textAlign="center" sx={{ fontWeight: 700, mr: 1 }}>
                  Portfolio
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              key="skills"
              onClick={() => {
                navigate("/skills");
              }}
              sx={{ my: 2, display: "block", color: "text.primary" }}
            >
              <Typography
                sx={{
                  fontWeight: 700,
                  mr: 1,
                }}
              >
                Compétences
              </Typography>
            </Button>
            <Button
              key="portfolio"
              onClick={() => {
                navigate("/portfolio");
              }}
              sx={{ my: 2, display: "block", color: "text.primary" }}
            >
              <Typography sx={{ fontWeight: 700, mr: 1 }}>Portfolio</Typography>
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode}>
              {theme.palette.mode === "dark" ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
