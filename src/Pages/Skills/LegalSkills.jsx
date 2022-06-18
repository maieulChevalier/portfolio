import React from "react";

import SkillCard from "./SkillCard";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import registered from "../../images/registered.png";
import signPaper from "../../images/signPaper.png";
import labourLaw from "../../images/labourLaw.png";
import contractLaw from "../../images/contractLaw.webp";

function LegalSkills() {
  return (
    <Container sx={{ mt: 4 }} maxWidth={window.innerWidth < 600 ? "xs" : null}>
      {/* End hero unit */}
      <Grid container spacing={{ xs: 2 }}>
        <SkillCard
          key={"trademark law"}
          title={"Droit des marques"}
          picture={registered}
          level={4.5}
        />
        <SkillCard
          key={"corporate law"}
          title={"Droit des sociétés"}
          picture={signPaper}
          level={4}
        />
        <SkillCard
          key={"labour law"}
          title={"Droit du travail"}
          picture={labourLaw}
          level={3}
        />
        <SkillCard
          key={"contract law"}
          title={"Droit des contrats"}
          picture={contractLaw}
          level={3}
        />
      </Grid>
    </Container>
  );
}

export default LegalSkills;
