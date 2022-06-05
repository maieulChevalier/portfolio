import { useState } from 'react';
import logo from './logo.svg';
import Home from './components/Home';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import ResponsiveAppBar from './components/ResponsiveAppBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#FFFFFF', 
      dark: '#fcffff'
    },
    secondary: {
      main: '#000000',
    },
  }
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#171923', // red
    },
    secondary: {
      main: '#FFFFFF', // green
    },
  },
});

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = (event) => {
    setIsDarkMode(!isDarkMode);
  };

  return (
      <BrowserRouter>
        <CssBaseline />
        <ThemeProvider theme={isDarkMode ? darkTheme : theme}>
          <ResponsiveAppBar toggleDarkMode={toggleDarkMode}/>
          <Routes>
            <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
            {/* <Route path="about" element={<About />} /> */}
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
  );
}

export default App;