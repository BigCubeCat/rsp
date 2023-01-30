import * as React from 'react';
import Main from './components/Main';
import Rules from './components/Rules/Rules';
import Game from './components/Game/Game';

import { Routes, Route } from "react-router-dom";
import {
  Box
} from '@mui/material';


import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#179299',
    },
    secondary: {
      main: '#40a02b',
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        minHeight: '100vh'
      }}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: "wrap",
        }}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<Main />} />
            <Route path="/about/classic" element={<Rules mode={"classic"} />} />
            <Route path="/about/spock" element={<Rules mode={"spock"} />} />
            <Route path="/about/custom" element={<Rules mode={"custom"} />} />

            <Route path="/game/classic" element={<Game mode={"classic"} />} />
            <Route path="/game/spock" element={<Game mode={"spock"} />} />
            <Route path="/game/custom" element={<Game mode={"spock"} />} />
          </Routes>
        </Box>
      </Box>

    </ThemeProvider>
  );
}
