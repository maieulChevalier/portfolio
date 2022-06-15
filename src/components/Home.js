import { useEffect, useRef } from "react";

import BackgroundParticles from "./BackgroundParticles";

import Typed from "typed.js";

import { Typography, Avatar, Box } from "@mui/material";

import ProfilePictureCartoon from "../images/ProfilePictureCartoon.png";

import ResponsiveAppBar from "./ResponsiveAppBar";

const Home = () => {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);
  // Create reference to store the Typed instance itself
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["PROBLEM SOLVER", "FAST LEARNER", "ALTRUISTE"],
      typeSpeed: 80,
      backSpeed: 80,
      smartBackspace: true,
      loop: true,
      showCursor: true,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);

  // Create reference to store the DOM element containing the animation
  const nameEl = useRef(null);
  // Create reference to store the Typed instance itself
  const nameTyped = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Maïeul Chevalier"],
      typeSpeed: 70,
      smartBackspace: true,
      showCursor: true,
    };

    // elRef refers to the <span> rendered below
    nameTyped.current = new Typed(nameEl.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      nameTyped.current.destroy();
    };
  }, []);

  return (
    <>
      <ResponsiveAppBar />
      <Box
        sx={{
          zIndex: 1,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.default",
          color: "text.primary",
        }}
      >
        <Avatar
          sx={{
            width: 80,
            height: 80,
            margin: 1,
          }}
          src={ProfilePictureCartoon}
          alt="Maïeul Chevalier"
        />
        {/* <ProfilePictureCartoon/>
        </Avatar> */}
        {/* <Typography variant="h4">
          <div className="type-wrap">
            <span style={{ whiteSpace: 'pre' }} ref={el} />
          </div>
        </Typography> */}
        <Typography sx={{ fontSize: 26, fontWeight: 900 }}>
          <span
            style={{ whiteSpace: "pre", textAlign: "center" }}
            ref={nameEl}
          />
        </Typography>
        <Typography sx={{ fontSize: 22, fontWeight: 700 }}>
          <span style={{ whiteSpace: "pre", textAlign: "center" }} ref={el} />
        </Typography>
      </Box>
      {/* <BackgroundParticles /> */}
    </>
  );
};

export default Home;
