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
import mongodb from "../images/mongodb.png";
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
                    topLeftColor: "#FFFCB8",
                    bottomRightColor: "#FFFFD2",
                  }}
                  level={3.5}
                />
                <SkillCard
                  key={1}
                  title={"Python"}
                  picture={python}
                  gradient={{
                    topLeftColor: "#FFFCB8",
                    bottomRightColor: "#FFFFD2",
                  }}
                  level={2.5}
                />
                <SkillCard
                  key={1}
                  title={"PHP"}
                  picture={php}
                  gradient={{
                    topLeftColor: "#FFFCB8",
                    bottomRightColor: "#FFFFD2",
                  }}
                  level={2.5}
                />
                <SkillCard
                  key={2}
                  title={"Html5"}
                  picture={HTML5}
                  gradient={{
                    topLeftColor: "#FFE7C9",
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
                    topLeftColor: "#2EA3A3",
                    bottomRightColor: "#1D6262",
                  }}
                  level={4}
                />
                <SkillCard
                  key={5}
                  title={"Vue.js"}
                  picture={vue}
                  gradient={{
                    topLeftColor: "#2EA3A3",
                    bottomRightColor: "#1D6262",
                  }}
                  level={3.5}
                />
                <SkillCard
                  key={6}
                  title={"UI/UX"}
                  picture={UIUX}
                  gradient={{
                    topLeftColor: "#2EA3A3",
                    bottomRightColor: "#1D6262",
                  }}
                  level={3.5}
                />
                <SkillCard
                  key={7}
                  title={"Git"}
                  picture={git}
                  gradient={{
                    topLeftColor: "#2EA3A3",
                    bottomRightColor: "#1D6262",
                  }}
                  level={3.5}
                />
                <SkillCard
                  key={8}
                  title={"GraphQL"}
                  picture={graphql}
                  gradient={{
                    topLeftColor: "#2EA3A3",
                    bottomRightColor: "#1D6262",
                  }}
                  level={3.5}
                />
                <SkillCard
                  key={9}
                  title={"nodeJS"}
                  picture={nodejs}
                  gradient={{
                    topLeftColor: "#2EA3A3",
                    bottomRightColor: "#1D6262",
                  }}
                  level={3.5}
                />
                <SkillCard
                  key={10}
                  title={"REST"}
                  picture={rest}
                  gradient={{
                    topLeftColor: "#2EA3A3",
                    bottomRightColor: "#1D6262",
                  }}
                  level={3.5}
                />
                <SkillCard
                  key={10}
                  title={"neo4j"}
                  picture={neo4j}
                  gradient={{
                    topLeftColor: "#2EA3A3",
                    bottomRightColor: "#1D6262",
                  }}
                  level={3.5}
                />
                <SkillCard
                  key={10}
                  title={"mongoDB"}
                  picture={mongodb}
                  gradient={{
                    topLeftColor: "#2EA3A3",
                    bottomRightColor: "#1D6262",
                  }}
                  level={3.5}
                />
                <SkillCard
                  key={10}
                  title={"redis"}
                  picture={redis}
                  gradient={{
                    topLeftColor: "#2EA3A3",
                    bottomRightColor: "#1D6262",
                  }}
                  level={3.5}
                />
                <SkillCard
                  key={10}
                  title={"postgreSQL"}
                  picture={postgresql}
                  gradient={{
                    topLeftColor: "#2EA3A3",
                    bottomRightColor: "#1D6262",
                  }}
                  level={3.5}
                />
                <SkillCard
                  key={10}
                  title={"Firebase"}
                  picture={firebase}
                  gradient={{
                    topLeftColor: "#2EA3A3",
                    bottomRightColor: "#1D6262",
                  }}
                  level={3.5}
                />
                <SkillCard
                  key={10}
                  title={"CI/CD"}
                  picture={CICD}
                  gradient={{
                    topLeftColor: "#2EA3A3",
                    bottomRightColor: "#1D6262",
                  }}
                  level={3.5}
                />
                <SkillCard
                  key={10}
                  title={"Google Cloud"}
                  picture={googleCloud}
                  gradient={{
                    topLeftColor: "#2EA3A3",
                    bottomRightColor: "#1D6262",
                  }}
                  level={3.5}
                />
                <SkillCard
                  key={10}
                  title={"AWS"}
                  picture={aws}
                  gradient={{
                    topLeftColor: "#2EA3A3",
                    bottomRightColor: "#1D6262",
                  }}
                  level={3.5}
                />
                <SkillCard
                  key={10}
                  title={"Serverless"}
                  picture={serverless}
                  gradient={{
                    topLeftColor: "#2EA3A3",
                    bottomRightColor: "#1D6262",
                  }}
                  level={3.5}
                />
                <SkillCard
                  key={10}
                  title={"Auto-scaling"}
                  picture={elasticBeanstalk}
                  gradient={{
                    topLeftColor: "#2EA3A3",
                    bottomRightColor: "#1D6262",
                  }}
                  level={3.5}
                />
                <SkillCard
                  key={10}
                  title={"Stockage cloud"}
                  picture={gcs}
                  gradient={{
                    topLeftColor: "#2EA3A3",
                    bottomRightColor: "#1D6262",
                  }}
                  level={3.5}
                />
                <SkillCard
                  key={10}
                  title={"CDNs"}
                  picture={cloudflare}
                  gradient={{
                    topLeftColor: "#2EA3A3",
                    bottomRightColor: "#1D6262",
                  }}
                  level={3.5}
                />
                <SkillCard
                  key={10}
                  title={"Rate-limiting"}
                  picture={speedLimit}
                  gradient={{
                    topLeftColor: "#2EA3A3",
                    bottomRightColor: "#1D6262",
                  }}
                  level={3.5}
                />
                <SkillCard
                  key={10}
                  title={"Kubernetes"}
                  picture={kubernetes}
                  gradient={{
                    topLeftColor: "#2EA3A3",
                    bottomRightColor: "#1D6262",
                  }}
                  level={3.5}
                />
                <SkillCard
                  key={10}
                  title={"Sécurité"}
                  picture={DDOS}
                  gradient={{
                    topLeftColor: "#2EA3A3",
                    bottomRightColor: "#1D6262",
                  }}
                  level={3.5}
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
