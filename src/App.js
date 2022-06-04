import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './Components/ResponsiveAppBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#FFFFFF', // red
    },
    secondary: {
      main: '#000000', // green
    },
  }
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = (event) => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : theme}>
      <ResponsiveAppBar toggleDarkMode={toggleDarkMode}/>
    </ThemeProvider>
  );
}

export default App;
