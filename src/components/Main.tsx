import * as React from 'react';
import {
  Box, Button
} from '@mui/material';

import Card from './Card/Card';


export default function Main() {
  return (
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
        <Card title={"Classic"} />
        <Card title={"RSSPL"} />
        <Card title={"Custom"} />
      </Box>

    </Box>
  )
}
