import React from "react";

import SkillCard from "./SkillCard";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import agileMethod from "../images/agileMethod.png";
import startup from "../images/startup.png";
import gantt from "../images/gantt.png";
import kanban from "../images/kanban.png";
import clickup from "../images/clickup.png";
import accounting from "../images/accounting.png";
import chart from "../images/chart.png";
import excel from "../images/excel.png";
import googleAnalytics from "../images/googleAnalytics.png";

function ManagementSkills() {
  return (
    <Container sx={{ mt: 4 }} maxWidth={window.innerWidth < 600 ? "xs" : null}>
      {/* End hero unit */}
      <Grid container spacing={{ xs: 2 }}>
        <SkillCard
          key={1}
          title={"Méthodologie Agile"}
          picture={agileMethod}
          level={4}
        />
        <SkillCard
          key={1}
          title={"Méthodologie Lean"}
          picture={startup}
          level={4}
        />
        <SkillCard key={1} title={"Gantt"} picture={gantt} level={4} />
        <SkillCard key={5} title={"Kanban"} picture={kanban} level={5} />
        <SkillCard
          key={1}
          title={"ClickUp / Asana"}
          picture={clickup}
          level={4}
        />
        <SkillCard
          key={1}
          title={"Comptabilité"}
          picture={accounting}
          level={3.5}
        />
        <SkillCard
          key={1}
          title={"Innovation accounting"}
          picture={chart}
          level={4.5}
        />
        <SkillCard key={1} title={"Excel"} picture={excel} level={3.5} />
        <SkillCard
          key={1}
          title={"Google Analytics"}
          picture={googleAnalytics}
          level={4}
        />
      </Grid>
    </Container>
  );
}

export default ManagementSkills;
