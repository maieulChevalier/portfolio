import React from "react";

import SkillCard from "./SkillCard";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import javascript from "../../images/javascript.png";
import typescript from "../../images/typescript.svg";
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
import docker from "../../images/docker.svg";
import kubernetes from "../../images/kubernetes.png";
import DDOS from "../../images/DDOS.png";
import XSS from "../../images/XSS.png";
import vscode from "../../images/vscode.png";
import unitTest from "../../images/unitTest.svg";
import integrationTest from "../../images/integrationTest.svg";

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
            key={"javascript"}
            title={"Javascript"}
            picture={javascript}
            level={3.5}
          />
          <SkillCard
            key={"typescript"}
            title={"Typescript"}
            picture={typescript}
            level={3}
          />
          <SkillCard
            key={"html5"}
            title={"Html5"}
            picture={HTML5}
            level={4.5}
          />
          <SkillCard key={"css3"} title={"CSS3"} picture={CSS3} level={3.5} />
          <SkillCard
            key={"react"}
            title={"React"}
            picture={react}
            level={4.5}
          />
          <SkillCard key={"vue"} title={"Vue.js"} picture={vue} level={3} />
          <SkillCard
            key={"mui"}
            title={"Material design"}
            picture={UIUX}
            level={4}
          />
          <SkillCard
            key={"graphql"}
            title={"GraphQL"}
            picture={graphql}
            level={4.5}
          />
          <SkillCard
            key={"nodejs"}
            title={"nodeJS"}
            picture={nodejs}
            level={4}
          />
          <SkillCard
            key={"python"}
            title={"Python"}
            picture={python}
            level={2.5}
          />
          <SkillCard key={"php"} title={"PHP"} picture={php} level={2.5} />
          <SkillCard key={"rest"} title={"REST"} picture={rest} level={3} />
          <SkillCard
            key={"neo4j"}
            title={"neo4j"}
            picture={neo4j}
            level={4.5}
          />
          <SkillCard
            key={"mongodb"}
            title={"mongoDB"}
            picture={mongoDB}
            level={3}
          />
          <SkillCard key={"redis"} title={"redis"} picture={redis} level={4} />
          <SkillCard
            key={"postgresql"}
            title={"postgreSQL"}
            picture={postgresql}
            level={3}
          />
          <SkillCard
            key={"firebase"}
            title={"Firebase"}
            picture={firebase}
            level={4}
          />
          <SkillCard key={"ci/cd"} title={"CI/CD"} picture={CICD} level={3.5} />
          <SkillCard
            key={"google cloud"}
            title={"Google Cloud"}
            picture={googleCloud}
            level={3.5}
          />
          <SkillCard key={"aws"} title={"AWS"} picture={aws} level={3.5} />
          <SkillCard
            key={"serverless"}
            title={"Serverless"}
            picture={serverless}
            level={3.5}
          />
          <SkillCard
            key={"auto-scaling"}
            title={"Auto-scaling"}
            picture={elasticBeanstalk}
            level={3.5}
          />
          <SkillCard
            key={"oject storage"}
            title={"Stockage objet"}
            picture={gcs}
            level={3.5}
          />
          <SkillCard
            key={"cdns"}
            title={"CDNs"}
            picture={cloudflare}
            level={3.5}
          />
          <SkillCard
            key={"docker"}
            title={"Docker"}
            picture={docker}
            level={3.5}
          />
          <SkillCard
            key={"kubernetes"}
            title={"Kubernetes"}
            picture={kubernetes}
            level={2}
          />
          <SkillCard
            key={"DDOS prevetion"}
            title={"Prévention DDOS"}
            picture={DDOS}
            level={3.5}
          />
          <SkillCard
            key={"XSS prevention"}
            title={"Prévention XSS"}
            picture={XSS}
            level={3.5}
          />
          <SkillCard
            key={"unit tests"}
            title={"Unit tests"}
            picture={unitTest}
            level={3}
          />
          <SkillCard
            key={"integration tests"}
            title={"Integration tests"}
            picture={integrationTest}
            level={3}
          />
          <SkillCard key={"git"} title={"Git"} picture={git} level={4} />
          <SkillCard
            key={"visual studio code"}
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
