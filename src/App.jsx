import React from 'react';
import Button from '@mui/material/Button';
import { makeStyles, ThemeProvider } from '@mui/styles';
import theme from './temaConfig';
import NavBar from './components/NavBar';


function App() {
  return (
    <ThemeProvider theme={theme}>      
    <NavBar />
     <Button variant="contained">
       Esto es botón
    </Button>
    </ThemeProvider>
  );
}

export default App;
