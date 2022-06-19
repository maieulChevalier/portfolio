import { useState, useContext } from "react";

import { ColorModeContext } from "../App";
import ProfilePictureCartoon from "../images/ProfilePictureCartoon.png";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import GitHubIcon from "@mui/icons-material/GitHub";

const ResponsiveAppBar = (props) => {
  const { position = "fixed" } = props;
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  const navigate = useNavigate();

  const [isDrawerOpen, toggleDrawer] = useState(false);

  const list = () => (
    <Box
      sx={{ px: 2 }}
      role="presentation"
      onClick={() => toggleDrawer(false)}
      onKeyDown={() => toggleDrawer(false)}
    >
      <List>
        <ListItem key="about" disablePadding>
          <ListItemButton
            onClick={() => {
              navigate(`/about`);
            }}
          >
            <ListItemText primary="À propos" />
          </ListItemButton>
        </ListItem>
        <ListItem key="skills" disablePadding>
          <ListItemButton
            onClick={() => {
              navigate(`/skills`);
            }}
          >
            <ListItemText primary="Compétences" />
          </ListItemButton>
        </ListItem>
        <ListItem key="portfolio" disablePadding>
          <ListItemButton
            onClick={() => {
              navigate(`/portfolio`);
            }}
          >
            <ListItemText primary="Portfolio" />
          </ListItemButton>
        </ListItem>
        <ListItem key="Contact" disablePadding>
          <ListItemButton
            onClick={() => {
              navigate(`/skills`);
            }}
          >
            <ListItemText primary="Compétences" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

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
              onClick={() => toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor={"left"}
              open={isDrawerOpen}
              onClose={() => toggleDrawer(false)}
            >
              {list()}
            </Drawer>
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
            <IconButton
              onClick={() =>
                window.open(
                  "https://github.com/maieulChevalier",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              <GitHubIcon
                sx={{ p: "2px" }}
                style={{ color: theme.palette.text.primary }}
              />
            </IconButton>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode}>
              {theme.palette.mode === "dark" ? (
                <Brightness7Icon
                  sx={{ p: "1px", color: theme.palette.text.primary }}
                />
              ) : (
                <Brightness4Icon
                  sx={{ p: "1px", color: theme.palette.text.primary }}
                />
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
