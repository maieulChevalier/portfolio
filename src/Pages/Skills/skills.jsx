import { useState } from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useTheme, Zoom, Tabs, Tab, Button } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";

import ResponsiveAppBar from "../../components/ResponsiveAppBar";
import SkillCard from "./SkillCard";
import WebDevelopmentSkills from "./WebDevelopmentSkills";
import ManagementSkills from "./ManagementSkills";

import englishFlag from "../../images/englishFlag.png";
import frenchFlag from "../../images/frenchFlag.png";
import chineseFlag from "../../images/chineseFlag.png";
import germanFlag from "../../images/germanFlag.png";
import esperantoFlag from "../../images/esperantoFlag.png";
import spanishFlag from "../../images/spanishFlag.png";
import googleAds from "../../images/googleAds.png";
import megaphone from "../../images/megaphone.png";
import facebook from "../../images/facebook.png";
import valueProposition from "../../images/valueProposition.png";
import shakeHands from "../../images/shakeHands.png";
import teacher from "../../images/teacher.png";
import PPT from "../../images/PPT.png";
import figma from "../../images/figma.png";
import registered from "../../images/registered.png";
import signPaper from "../../images/signPaper.png";
import labourLaw from "../../images/labourLaw.png";
import contractsLaw from "../../images/contractsLaw.webp";

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
            <Container
              sx={{ mt: 4 }}
              maxWidth={window.innerWidth < 600 ? "xs" : null}
            >
              {/* End hero unit */}
              <Grid container spacing={{ xs: 2 }}>
                <SkillCard
                  key={1}
                  title={"Anglais"}
                  picture={englishFlag}
                  level={5}
                />
                <SkillCard
                  key={1}
                  title={"Français"}
                  picture={frenchFlag}
                  level={5}
                />
                <SkillCard
                  key={1}
                  title={"Chinois"}
                  picture={chineseFlag}
                  level={5}
                />
                <SkillCard
                  key={1}
                  title={"Allemand"}
                  picture={germanFlag}
                  level={2.5}
                />
                <SkillCard
                  key={1}
                  title={"Esperanto"}
                  picture={esperantoFlag}
                  level={2}
                />
                <SkillCard
                  key={1}
                  title={"Espagnol"}
                  picture={spanishFlag}
                  level={1.5}
                />
                <SkillCard
                  key={1}
                  title={"Google ads"}
                  picture={googleAds}
                  level={3.5}
                />
                <SkillCard
                  key={1}
                  title={"Facebook ads"}
                  picture={megaphone}
                  level={3.5}
                />
                <SkillCard
                  key={1}
                  title={"Réseaux Sociaux"}
                  picture={facebook}
                  level={4.5}
                />
                <SkillCard
                  key={1}
                  title={"Proposition de valeur"}
                  picture={valueProposition}
                  level={4.5}
                />
                <SkillCard
                  key={4.5}
                  title={"Négociation"}
                  picture={shakeHands}
                  level={4}
                />
                <SkillCard
                  key={5}
                  title={"Pédagogie"}
                  picture={teacher}
                  level={5}
                />
                <SkillCard key={5} title={"PPT"} picture={PPT} level={5} />
                <SkillCard
                  key={1}
                  title={"Figma"}
                  picture={figma}
                  level={3.5}
                />
              </Grid>
            </Container>
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
            <Container
              sx={{ mt: 4 }}
              maxWidth={window.innerWidth < 600 ? "xs" : null}
            >
              {/* End hero unit */}
              <Grid container spacing={{ xs: 2 }}>
                <SkillCard
                  key={1}
                  title={"Droit des marques"}
                  picture={registered}
                  level={4.5}
                />
                <SkillCard
                  key={1}
                  title={"Droit des sociétés"}
                  picture={signPaper}
                  level={4}
                />
                <SkillCard
                  key={1}
                  title={"Droit du travail"}
                  picture={labourLaw}
                  level={3}
                />
                <SkillCard
                  key={1}
                  title={"Droit des contrats"}
                  picture={contractsLaw}
                  level={3}
                />
              </Grid>
            </Container>
          </Box>
        </Box>
      </main>
      {/* Footer */}
      <Box
        sx={{ p: 6, bgcolor: "background.default", color: "text.primary" }}
        component="footer"
      >
        <Typography variant="h6" align="center" gutterBottom>
          réseaux sociaux
        </Typography>
        <Typography variant="subtitle1" align="center" component="p">
          made with ❤️ with React
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </>
  );
}
