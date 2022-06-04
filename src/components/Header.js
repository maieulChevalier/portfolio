import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { Typography, Avatar, Grid, Box } from "@mui/material";
import avatar from "../images/avatar.png";
import { textAlign } from "@mui/system";


const Header = () => {

  // Create reference to store the DOM element containing the animation
  const el = useRef(null);
  // Create reference to store the Typed instance itself
  const typed = useRef(null);

  useEffect(() => {
    const options = {
    	strings: [
        'Polyglote',
        'Développeur web fullstack',
        'Chef de projet IT',
        'Consulting et formations',
      ],
      typeSpeed: 35,
      backSpeed: 35,
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
    }
  }, [])

  return (
    <Box
      sx={{
        zIndex: 999,
        mt:8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar 
        sx={{
          width: 80,
          height: 80,
          margin: 1,
        }} 
        src={avatar} 
        alt="Maïeul Chevalier" 
      />
      {/* <Typography variant="h4">
        <div className="type-wrap">
          <span style={{ whiteSpace: 'pre' }} ref={el} />
        </div>
      </Typography> */}
      <Typography variant="h5">
        <div className="type-wrap">
          <span style={{ whiteSpace: 'pre', textAlign: 'center' }} ref={el} />
        </div>
      </Typography>
    </Box>
  );
};

export default Header;
