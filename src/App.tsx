import * as React from 'react';
import Main from './components/Main';
import Rules from './components/Rules/Rules';
import Game from './components/Game/Game';
import { getClassic } from './api/bot';

import { Routes, Route } from "react-router-dom";
import {
  Box
} from '@mui/material';


import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5e533c',
    },
    secondary: {
      main: '#f4b1c0',
    },
  },
});

export default function App() {
  console.log(
  getClassic("https://shift-winter-2023-backend.onrender.com/api/rsp/option").then(c => console.log(c))
  )
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
          flexWrap: "wrap"
        }}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<Main />} />
            <Route path="/about/classic" element={<Rules index={0} />} />
            <Route path="/about/five" element={<Rules index={1} />} />
            <Route path="/about/custom" element={<div>TODO</div>} />

            <Route path="/game/classic" element={<Game mode={"classic"} />} />
            <Route path="/game/spock" element={<Game mode={"spock"} />} />
            <Route path="/game/custom" element={<Game mode={"spock"} />} />
          </Routes>
        </Box>
      </Box>

    </ThemeProvider>
  );
}
