import React from "react";
import { useState } from "react";

import SkillCard from "./SkillCard";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useTheme, Zoom, Tabs, Tab, Button } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";

import javascript from "../../images/javascript.png";
import HTML5 from "../../images/HTML5.png";
import CSS3 from "../../images/CSS3.png";
import react from "../../images/react.png";
import python from "../../images/python.png";
import php from "../../images/php.png";
import vue from "../../images/vue.png";
import UIUX from "../../images/UIUX.png";
import git from "../../images/git.png";
import graphql from "../../images/graphql.png";
import nodejs from "../../images/nodejs.png";
import rest from "../../images/rest.png";
import neo4j from "../../images/neo4j.png";
import mongoDB from "../../images/mongoDB.png";
import redis from "../../images/redis.png";
import postgresql from "../../images/postgresql.png";
import firebase from "../../images/firebase.png";
import CICD from "../../images/CICD.png";
import googleCloud from "../../images/googleCloud.png";
import aws from "../../images/aws.png";
import serverless from "../../images/serverless.png";
import elasticBeanstalk from "../../images/elasticBeanstalk.png";
import gcs from "../../images/gcs.png";
import cloudflare from "../../images/cloudflare.png";
import speedLimit from "../../images/speedLimit.png";
import kubernetes from "../../images/kubernetes.png";
import DDOS from "../../images/DDOS.png";
import vscode from "../../images/vscode.png";

function WebDevelopmentSkills() {
  return (
    <>
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
            level={3.5}
          />
          <SkillCard key={1} title={"Python"} picture={python} level={2.5} />
          <SkillCard key={1} title={"PHP"} picture={php} level={2.5} />
          <SkillCard key={2} title={"Html5"} picture={HTML5} level={4} />
          <SkillCard key={3} title={"CSS3"} picture={CSS3} level={3.5} />
          <SkillCard key={4} title={"React"} picture={react} level={4.5} />
          <SkillCard key={5} title={"Vue.js"} picture={vue} level={3} />
          <SkillCard
            key={6}
            title={"Material design"}
            picture={UIUX}
            level={4}
          />
          <SkillCard key={7} title={"Git"} picture={git} level={4} />
          <SkillCard key={8} title={"GraphQL"} picture={graphql} level={4.5} />
          <SkillCard key={9} title={"nodeJS"} picture={nodejs} level={4} />
          <SkillCard key={10} title={"REST"} picture={rest} level={3} />
          <SkillCard key={10} title={"neo4j"} picture={neo4j} level={4.5} />
          <SkillCard key={10} title={"mongoDB"} picture={mongoDB} level={3} />
          <SkillCard key={10} title={"redis"} picture={redis} level={4} />
          <SkillCard
            key={10}
            title={"postgreSQL"}
            picture={postgresql}
            level={3}
          />
          <SkillCard key={10} title={"Firebase"} picture={firebase} level={4} />
          <SkillCard key={10} title={"CI/CD"} picture={CICD} level={3.5} />
          <SkillCard
            key={10}
            title={"Google Cloud"}
            picture={googleCloud}
            level={3.5}
          />
          <SkillCard key={10} title={"AWS"} picture={aws} level={3.5} />
          <SkillCard
            key={10}
            title={"Serverless"}
            picture={serverless}
            level={3.5}
          />
          <SkillCard
            key={10}
            title={"Auto-scaling"}
            picture={elasticBeanstalk}
            level={3.5}
          />
          <SkillCard
            key={10}
            title={"Stockage cloud"}
            picture={gcs}
            level={3.5}
          />
          <SkillCard key={10} title={"CDNs"} picture={cloudflare} level={3.5} />
          <SkillCard
            key={10}
            title={"Rate-limiting"}
            picture={speedLimit}
            level={4}
          />
          <SkillCard
            key={10}
            title={"Kubernetes"}
            picture={kubernetes}
            level={2}
          />
          <SkillCard
            key={10}
            title={"Sécurité (DDOS / XSS)"}
            picture={DDOS}
            level={3.5}
          />
          <SkillCard
            key={10}
            title={"Visual Studio Code"}
            picture={vscode}
            level={4}
          />
        </Grid>
      </Container>
    </>
  );
}

export default WebDevelopmentSkills;
