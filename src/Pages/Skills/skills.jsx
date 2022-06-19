import { useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useTheme, IconButton } from "@mui/material";

import ResponsiveAppBar from "../../components/ResponsiveAppBar";
import WebDevelopmentSkills from "./WebDevelopmentSkills";
import ManagementSkills from "./ManagementSkills";
import CommunicationSkills from "./CommunicationSkills";
import LegalSkills from "./LegalSkills";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      Copyright © {new Date().getFullYear()} Maïeul Chevalier
    </Typography>
  );
}

export default function Skills() {
  const theme = useTheme();

  return (
    <>
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
            <GitHubIcon style={{ color: theme.palette.text.primary }} />
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
