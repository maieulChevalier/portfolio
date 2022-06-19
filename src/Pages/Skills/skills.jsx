import { useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useTheme, IconButton, Zoom } from "@mui/material";

import ResponsiveAppBar from "../../components/ResponsiveAppBar";
import WebDevelopmentSkills from "./WebDevelopmentSkills";
import ManagementSkills from "./ManagementSkills";
import CommunicationSkills from "./CommunicationSkills";
import LegalSkills from "./LegalSkills";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      Copyright © {new Date().getFullYear()} Maïeul Chevalier
    </Typography>
  );
}

export default function Skills() {
  const theme = useTheme();

  const [linkCopiedMessage, setLinkCopiedMessage] = useState(false);
  if (linkCopiedMessage) {
    setTimeout(function () {
      setLinkCopiedMessage(false);
    }, 2000);
  }

  return (
    <>
      <Zoom
        sx={{
          position: "fixed",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          zIndex: 999,
        }}
        in={linkCopiedMessage}
      >
        <Container>
          <Typography
            variant="body1"
            sx={{
              p: 2,
              backgroundColor:
                theme.palette.mode === "dark" ? "#F8FAFB" : "#BABABA",
              color: theme.palette.mode === "dark" ? "black" : "white",
              borderRadius: 5,
              fontWeight: 600,
            }}
          >
            email copié sur le presse-papier
          </Typography>
        </Container>
      </Zoom>
      <ResponsiveAppBar position="absolute" />
      <main>
        <Box
          sx={{
            pt: 8,
            bgcolor: "background.default",
            color: "text.primary",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box>
            <Container
              maxWidth={window.innerWidth < 600 ? "xs" : null}
              sx={{
                mt: 6,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h6" fontWeight={700} sx={{}}>
                Développement web
              </Typography>
            </Container>
            <WebDevelopmentSkills />
            <Container
              maxWidth={window.innerWidth < 600 ? "xs" : null}
              sx={{ mt: 6 }}
            >
              <Typography variant="h6" fontWeight={700}>
                Gestion
              </Typography>
            </Container>
            <ManagementSkills />
            <Container
              maxWidth={window.innerWidth < 600 ? "xs" : null}
              sx={{ mt: 6 }}
            >
              <Typography variant="h6" fontWeight={700}>
                Communication
              </Typography>
            </Container>
            <CommunicationSkills />
            <Container
              maxWidth={window.innerWidth < 600 ? "xs" : null}
              sx={{ mt: 6 }}
            >
              <Typography variant="h6" fontWeight={700}>
                Légal
              </Typography>
            </Container>
            <LegalSkills />
          </Box>
        </Box>
      </main>
      {/* Footer */}
      <Box
        sx={{ p: 6, bgcolor: "background.default", color: "text.primary" }}
        component="footer"
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <IconButton
            onClick={() =>
              window.open(
                "https://github.com/maieulChevalier",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            <GitHubIcon sx={{ p: "2px", color: theme.palette.text.primary }} />
          </IconButton>
          <IconButton
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/maieul-c-087655138/",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            <LinkedInIcon color="primary" />
          </IconButton>
          <IconButton
            onClick={() => {
              navigator.clipboard.writeText(`maieul.chevalier@gmail.com`);
              setLinkCopiedMessage(true);
            }}
          >
            <MailOutlineIcon
              sx={{ color: theme.palette.text.primary }}
              fontSize="small"
            />
          </IconButton>
        </Box>
        <Typography variant="subtitle1" align="center" component="p">
          made with ❤️ with React
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </>
  );
}
