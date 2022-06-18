import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useTheme, Button, IconButton } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";

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

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function Skills() {
  const theme = useTheme();

  console.log(window.innerWidth < 600);
  return (
    <>
      <ResponsiveAppBar position="absolute" />
      <main>
        {/* Hero unit */}
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
          {/* <Tabs
            value={value}
            onChange={handleChange}
            aria-label="secondary tabs example"
          >
            <Tab value="one" label="Développement Web" />
            <Tab value="two" label="Communication" />
            <Tab value="three" label="Droit" />
            <Tab value="four" label="Gestion" />
          </Tabs> */}
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
              <Button variant="outlined" startIcon={<FilterListIcon />}>
                Filtrer
              </Button>
            </Container>
            <WebDevelopmentSkills />
            <Container
              maxWidth={window.innerWidth < 600 ? "xs" : null}
              sx={{
                mt: 6,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h6" fontWeight={700} sx={{}}>
                Gestion
              </Typography>
            </Container>
            <ManagementSkills />
            <Container
              maxWidth={window.innerWidth < 600 ? "xs" : null}
              sx={{
                mt: 6,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h6" fontWeight={700} sx={{}}>
                Communication
              </Typography>
            </Container>
            <CommunicationSkills />
            <Container
              maxWidth={window.innerWidth < 600 ? "xs" : null}
              sx={{
                mt: 6,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h6" fontWeight={700} sx={{}}>
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
          <IconButton>
            <GitHubIcon style={{ color: theme.palette.text.primary }} />
          </IconButton>
          <IconButton>
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
