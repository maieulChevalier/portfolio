import React from "react";

import SkillCard from "./SkillCard";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

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

function CommunicationSkills() {
  return (
    <Container sx={{ mt: 4 }} maxWidth={window.innerWidth < 600 ? "xs" : null}>
      {/* End hero unit */}
      <Grid container spacing={{ xs: 2 }}>
        <SkillCard key={1} title={"Anglais"} picture={englishFlag} level={5} />
        <SkillCard key={1} title={"Français"} picture={frenchFlag} level={5} />
        <SkillCard key={1} title={"Chinois"} picture={chineseFlag} level={5} />
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
        <SkillCard key={5} title={"Pédagogie"} picture={teacher} level={5} />
        <SkillCard key={5} title={"PPT"} picture={PPT} level={5} />
        <SkillCard key={1} title={"Figma"} picture={figma} level={3} />
      </Grid>
    </Container>
  );
}

export default CommunicationSkills;
