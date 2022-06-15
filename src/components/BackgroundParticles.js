import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useTheme } from "@mui/material";

const BackgroundParticles = (props) => {
  const theme = useTheme();

  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 60,
        // interactivity: {
        //   events: {
        //     onClick: {
        //       enable: true,
        //       mode: "push",
        //     },
        //     onHover: {
        //       enable: true,
        //       mode: "repulse",
        //     },
        //     resize: true,
        //   },
        //   modes: {
        //     push: {
        //       quantity: 4,
        //     },
        //     repulse: {
        //       distance: 200,
        //       duration: 0.4,
        //     },
        //   },
        // },
        particles: {
          color: {
            value: theme.palette.text.primary,
          },
          opacity: {
            value: 0.25,
          },
          links: {
            color: theme.palette.text.primary,
            distance: 150,
            enable: true,
            opacity: 0.25,
            width: 1,
          },
          // collisions: {
          //   enable: true,
          // },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            speed: 2,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
            animation: {
              enable: true,
              speed: 10,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default BackgroundParticles;
