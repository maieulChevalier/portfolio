import { useState } from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useTheme, Zoom, Tabs, Tab, Button } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";

import ResponsiveAppBar from "./ResponsiveAppBar";
import SkillCard from "./SkillCard";

import ProfilePictureCartoon from "../images/ProfilePictureCartoon.png";
import javascript from "../images/javascript.png";
import HTML5 from "../images/HTML5.png";
import CSS3 from "../images/CSS3.png";
import react from "../images/react.png";
import python from "../images/python.png";
import php from "../images/php.png";
import vue from "../images/vue.png";
import UIUX from "../images/UIUX.png";
import git from "../images/git.png";
import graphql from "../images/graphql.png";
import nodejs from "../images/nodejs.png";
import rest from "../images/rest.png";
import neo4j from "../images/neo4j.png";
import mongoDB from "../images/mongoDB.png";
import redis from "../images/redis.png";
import postgresql from "../images/postgresql.png";
import firebase from "../images/firebase.png";
import CICD from "../images/CICD.png";
import googleCloud from "../images/googleCloud.png";
import aws from "../images/aws.png";
import serverless from "../images/serverless.png";
import elasticBeanstalk from "../images/elasticBeanstalk.png";
import gcs from "../images/gcs.png";
import cloudflare from "../images/cloudflare.png";
import speedLimit from "../images/speedLimit.png";
import kubernetes from "../images/kubernetes.png";
import DDOS from "../images/DDOS.png";
import vscode from "../images/vscode.png";
import agileMethod from "../images/agileMethod.png";
import startup from "../images/startup.png";
import gantt from "../images/gantt.png";
import kanban from "../images/kanban.png";
import clickup from "../images/clickup.png";
import accounting from "../images/accounting.png";
import chart from "../images/chart.png";
import excel from "../images/excel.png";
import googleAnalytics from "../images/googleAnalytics.png";
import englishFlag from "../images/englishFlag.png";
import frenchFlag from "../images/frenchFlag.png";
import chineseFlag from "../images/chineseFlag.png";
import germanFlag from "../images/germanFlag.png";
import esperantoFlag from "../images/esperantoFlag.png";
import spanishFlag from "../images/spanishFlag.png";
import googleAds from "../images/googleAds.png";
import megaphone from "../images/megaphone.png";
import facebook from "../images/facebook.png";
import valueProposition from "../images/valueProposition.png";
import shakeHands from "../images/shakeHands.png";
import teacher from "../images/teacher.png";
import PPT from "../images/PPT.png";
import figma from "../images/figma.png";
import registered from "../images/registered.png";
import signPaper from "../images/signPaper.png";
import labourLaw from "../images/labourLaw.png";
import contractsLaw from "../images/contractsLaw.png";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      Copyright © {new Date().getFullYear()} Maïeul Chevalier
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function Album() {
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

            <Container
              sx={{ mt: 4 }}
              maxWidth={window.innerWidth < 600 ? "xs" : null}
            >
              {/* End hero unit */}
              <Grid container spacing={{ xs: 2 }}>
                <SkillCard
                  key={1}
                  title={"Javascript"}
                  picture={javascript}
                  gradient={{
                    topLeftColor: "#FDFFB3",
                    bottomRightColor: "#F7F9CB",
                  }}
                  level={3.5}
                />
                <SkillCard
                  key={1}
                  title={"Python"}
                  picture={python}
                  gradient={{
                    topLeftColor: "#FDFF7E",
                    bottomRightColor: "#9CC9FF",
                  }}
                  level={2.5}
                />
                <SkillCard
                  key={1}
                  title={"PHP"}
                  picture={php}
                  gradient={{
                    topLeftColor: "#DFE8FE",
                    bottomRightColor: "#C8D5F7",
                  }}
                  level={2.5}
                />
                <SkillCard
                  key={2}
                  title={"Html5"}
                  picture={HTML5}
                  gradient={{
                    topLeftColor: "#FFEBDE",
                    bottomRightColor: "#FFD3C9",
                  }}
                  level={4}
                />
                <SkillCard
                  key={3}
                  title={"CSS3"}
                  picture={CSS3}
                  gradient={{
                    topLeftColor: "#9BFFF8",
                    bottomRightColor: "#CEE9FF",
                  }}
                  level={3.5}
                />
                <SkillCard
                  key={4}
                  title={"React"}
                  picture={react}
                  gradient={{
                    topLeftColor: "#DFFCFF",
                    bottomRightColor: "#CAF4F5",
                  }}
                  level={4.5}
                />
                <SkillCard
                  key={5}
                  title={"Vue.js"}
                  picture={vue}
                  gradient={{
                    topLeftColor: "#D8FFE9",
                    bottomRightColor: "#BFF3D6",
                  }}
                  level={3}
                />
                <SkillCard
                  key={6}
                  title={"Material design"}
                  picture={UIUX}
                  gradient={{
                    topLeftColor: "#F3BFBF",
                    bottomRightColor: "#FFFF90",
                  }}
                  level={4}
                />
                <SkillCard
                  key={7}
                  title={"Git"}
                  picture={git}
                  gradient={{
                    topLeftColor: "#1D6262",
                    bottomRightColor: "#0B1B44",
                  }}
                  level={4}
                />
                <SkillCard
                  key={8}
                  title={"GraphQL"}
                  picture={graphql}
                  gradient={{
                    topLeftColor: "#FFFFFF",
                    bottomRightColor: "#F9C6F9",
                  }}
                  level={4.5}
                />
                <SkillCard
                  key={9}
                  title={"nodeJS"}
                  picture={nodejs}
                  gradient={{
                    topLeftColor: "#DEFFDB",
                    bottomRightColor: "#BFF3C0",
                  }}
                  level={4}
                />
                <SkillCard
                  key={10}
                  title={"REST"}
                  picture={rest}
                  gradient={{
                    topLeftColor: "#CBEFFF",
                    bottomRightColor: "#BDD6F7",
                  }}
                  level={3}
                />
                <SkillCard
                  key={10}
                  title={"neo4j"}
                  picture={neo4j}
                  gradient={{
                    topLeftColor: "#FFFFFF",
                    bottomRightColor: "#E3E3E3",
                  }}
                  level={4.5}
                />
                <SkillCard
                  key={10}
                  title={"mongoDB"}
                  picture={mongoDB}
                  gradient={{
                    topLeftColor: "#DCCCC0",
                    bottomRightColor: "#D3AF7D",
                  }}
                  level={3}
                />
                <SkillCard
                  key={10}
                  title={"redis"}
                  picture={redis}
                  gradient={{
                    topLeftColor: "#FFC9C9",
                    bottomRightColor: "#F4B6B6",
                  }}
                  level={4}
                />
                <SkillCard
                  key={10}
                  title={"postgreSQL"}
                  picture={postgresql}
                  gradient={{
                    topLeftColor: "#DFE8FE",
                    bottomRightColor: "#C8D5F7",
                  }}
                  level={3}
                />
                <SkillCard
                  key={10}
                  title={"Firebase"}
                  picture={firebase}
                  gradient={{
                    topLeftColor: "#FFFECE",
                    bottomRightColor: "#F6D7AA",
                  }}
                  level={4}
                />
                <SkillCard
                  key={10}
                  title={"CI/CD"}
                  picture={CICD}
                  gradient={{
                    topLeftColor: "#DBFEFF",
                    bottomRightColor: "#CBF8F9",
                  }}
                  level={3.5}
                />
                <SkillCard
                  key={10}
                  title={"Google Cloud"}
                  picture={googleCloud}
                  gradient={{
                    topLeftColor: "#E1F9FF",
                    bottomRightColor: "#FFFFFF",
                  }}
                  level={3.5}
                />
                <SkillCard
                  key={10}
                  title={"AWS"}
                  picture={aws}
                  gradient={{
                    topLeftColor: "#FFFECE",
                    bottomRightColor: "#F6D7AA",
                  }}
                  level={3.5}
                />
                <SkillCard
                  key={10}
                  title={"Serverless"}
                  picture={serverless}
                  gradient={{
                    topLeftColor: "#FFC9C9",
                    bottomRightColor: "#F4B6B6",
                  }}
                  level={3.5}
                />
                <SkillCard
                  key={10}
                  title={"Auto-scaling"}
                  picture={elasticBeanstalk}
                  gradient={{
                    topLeftColor: "#FFFECE",
                    bottomRightColor: "#F6D7AA",
                  }}
                  level={3.5}
                />
                <SkillCard
                  key={10}
                  title={"Stockage cloud"}
                  picture={gcs}
                  gradient={{
                    topLeftColor: "#CBEFFF",
                    bottomRightColor: "#BDD6F7",
                  }}
                  level={3.5}
                />
                <SkillCard
                  key={10}
                  title={"CDNs"}
                  picture={cloudflare}
                  gradient={{
                    topLeftColor: "#FFFECE",
                    bottomRightColor: "#F6D7AA",
                  }}
                  level={3.5}
                />
                <SkillCard
                  key={10}
                  title={"Rate-limiting"}
                  picture={speedLimit}
                  gradient={{
                    topLeftColor: "#FFC9C9",
                    bottomRightColor: "#F4B6B6",
                  }}
                  level={4}
                />
                <SkillCard
                  key={10}
                  title={"Kubernetes"}
                  picture={kubernetes}
                  gradient={{
                    topLeftColor: "#CBEFFF",
                    bottomRightColor: "#BDD6F7",
                  }}
                  level={2}
                />
                <SkillCard
                  key={10}
                  title={"Sécurité (DDOS / XSS)"}
                  picture={DDOS}
                  gradient={{
                    topLeftColor: "#EFFFF9",
                    bottomRightColor: "#C1F7E7",
                  }}
                  level={3.5}
                />
                <SkillCard
                  key={10}
                  title={"Visual Studio Code"}
                  picture={vscode}
                  gradient={{
                    topLeftColor: "#CBEFFF",
                    bottomRightColor: "#BDD6F7",
                  }}
                  level={4}
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
                Gestion
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
                  title={"Méthodologie Agile"}
                  picture={agileMethod}
                  gradient={{
                    topLeftColor: "#DBFEFF",
                    bottomRightColor: "#CBF8F9",
                  }}
                  level={4}
                />
                <SkillCard
                  key={1}
                  title={"Lean startup"}
                  picture={startup}
                  gradient={{
                    topLeftColor: "#FFCACA",
                    bottomRightColor: "#CAD6FF",
                  }}
                  level={4}
                />
                <SkillCard
                  key={1}
                  title={"Gantt"}
                  picture={gantt}
                  gradient={{
                    topLeftColor: "#FFFECE",
                    bottomRightColor: "#F6D7AA",
                  }}
                  level={4}
                />
                <SkillCard
                  key={5}
                  title={"Kanban"}
                  picture={kanban}
                  gradient={{
                    topLeftColor: "#FFFECE",
                    bottomRightColor: "#F6D7AA",
                  }}
                  level={5}
                />
                <SkillCard
                  key={1}
                  title={"ClickUp / Asana"}
                  picture={clickup}
                  gradient={{
                    topLeftColor: "#DFFAFF",
                    bottomRightColor: "#FFDFFF",
                  }}
                  level={4}
                />
                <SkillCard
                  key={1}
                  title={"Comptabilité"}
                  picture={accounting}
                  gradient={{
                    topLeftColor: "#FFFECE",
                    bottomRightColor: "#F6D7AA",
                  }}
                  level={3.5}
                />
                <SkillCard
                  key={1}
                  title={"Innovation accounting"}
                  picture={chart}
                  gradient={{
                    topLeftColor: "#FFFECE",
                    bottomRightColor: "#F6D7AA",
                  }}
                  level={4.5}
                />
                <SkillCard
                  key={1}
                  title={"Excel"}
                  picture={excel}
                  gradient={{
                    topLeftColor: "#F5FFF5",
                    bottomRightColor: "#D8FFD8",
                  }}
                  level={3.5}
                />
                <SkillCard
                  key={1}
                  title={"Google Analytics"}
                  picture={googleAnalytics}
                  gradient={{
                    topLeftColor: "#FFFECE",
                    bottomRightColor: "#F6D7AA",
                  }}
                  level={4}
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
                  gradient={{
                    topLeftColor: "#E5F0FF",
                    bottomRightColor: "#FFE1E1",
                  }}
                  level={5}
                />
                <SkillCard
                  key={1}
                  title={"Français"}
                  picture={frenchFlag}
                  gradient={{
                    topLeftColor: "#FFFFFF",
                    bottomRightColor: "#E1EDFF",
                  }}
                  level={5}
                />
                <SkillCard
                  key={1}
                  title={"Chinois"}
                  picture={chineseFlag}
                  gradient={{
                    topLeftColor: "#FFFFFF",
                    bottomRightColor: "#FFE1E1",
                  }}
                  level={5}
                />
                <SkillCard
                  key={1}
                  title={"Allemand"}
                  picture={germanFlag}
                  gradient={{
                    topLeftColor: "#FFFECE",
                    bottomRightColor: "#F6D7AA",
                  }}
                  level={2.5}
                />
                <SkillCard
                  key={1}
                  title={"Esperanto"}
                  picture={esperantoFlag}
                  gradient={{
                    topLeftColor: "#F5FFF5",
                    bottomRightColor: "#D8FFD8",
                  }}
                  level={2}
                />
                <SkillCard
                  key={1}
                  title={"Espagnol"}
                  picture={spanishFlag}
                  gradient={{
                    topLeftColor: "#FFFECE",
                    bottomRightColor: "#F6D7AA",
                  }}
                  level={1.5}
                />
                <SkillCard
                  key={1}
                  title={"Google ads"}
                  picture={googleAds}
                  gradient={{
                    topLeftColor: "#FDFFB3",
                    bottomRightColor: "#F7F9CB",
                  }}
                  level={3.5}
                />
                <SkillCard
                  key={1}
                  title={"Facebook ads"}
                  picture={megaphone}
                  gradient={{
                    topLeftColor: "#FDFFB3",
                    bottomRightColor: "#F7F9CB",
                  }}
                  level={3.5}
                />
                <SkillCard
                  key={1}
                  title={"Réseaux Sociaux"}
                  picture={facebook}
                  gradient={{
                    topLeftColor: "#FDFFB3",
                    bottomRightColor: "#F7F9CB",
                  }}
                  level={4.5}
                />
                <SkillCard
                  key={1}
                  title={"Proposition de valeur"}
                  picture={valueProposition}
                  gradient={{
                    topLeftColor: "#FDFFB3",
                    bottomRightColor: "#F7F9CB",
                  }}
                  level={4.5}
                />
                <SkillCard
                  key={4.5}
                  title={"Négociation"}
                  picture={shakeHands}
                  gradient={{
                    topLeftColor: "#FDFFB3",
                    bottomRightColor: "#F7F9CB",
                  }}
                  level={4}
                />
                <SkillCard
                  key={5}
                  title={"Pédagogie"}
                  picture={teacher}
                  gradient={{
                    topLeftColor: "#FDFFB3",
                    bottomRightColor: "#F7F9CB",
                  }}
                  level={5}
                />
                <SkillCard
                  key={5}
                  title={"PPT"}
                  picture={PPT}
                  gradient={{
                    topLeftColor: "#FDFFB3",
                    bottomRightColor: "#F7F9CB",
                  }}
                  level={5}
                />
                <SkillCard
                  key={1}
                  title={"Figma"}
                  picture={figma}
                  gradient={{
                    topLeftColor: "#FDFFB3",
                    bottomRightColor: "#F7F9CB",
                  }}
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
                  gradient={{
                    topLeftColor: "#FDFFB3",
                    bottomRightColor: "#F7F9CB",
                  }}
                  level={4.5}
                />
                <SkillCard
                  key={1}
                  title={"Droit des sociétés"}
                  picture={signPaper}
                  gradient={{
                    topLeftColor: "#FDFFB3",
                    bottomRightColor: "#F7F9CB",
                  }}
                  level={4}
                />
                <SkillCard
                  key={1}
                  title={"Droit du travail"}
                  picture={labourLaw}
                  gradient={{
                    topLeftColor: "#FDFFB3",
                    bottomRightColor: "#F7F9CB",
                  }}
                  level={3}
                />
                <SkillCard
                  key={1}
                  title={"Droit des contrats"}
                  picture={contractsLaw}
                  gradient={{
                    topLeftColor: "#FDFFB3",
                    bottomRightColor: "#F7F9CB",
                  }}
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
