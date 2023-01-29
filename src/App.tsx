import * as React from 'react';
import Main from './components/Main';
import Rules from './components/Rules/Rules';

import { Routes, Route } from "react-router-dom";
import {
  Box
} from '@mui/material';


import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#151515',
    },
    secondary: {
      main: '#FF7D00',
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
          flexWrap: "wrap"
        }}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<div>text</div>} />
            <Route path="/about/classic" element={<Rules index={0} />} />
            <Route path="/about/five" element={<Rules index={1} />} />
            <Route path="/about/custom" element={<div>text</div>} />
          </Routes>
        </Box>

      </Box>

    </ThemeProvider>
  );
}
