import React from 'react';
import {
  Box, Card, CardHeader, Typography, Button
} from '@mui/material';
import { RulesText } from './RulesContent';
import { Link } from 'react-router-dom';

export default function Rules({ mode }: { mode: string }) {
  const content = RulesText[mode];
  return (
    <Card sx={{ padding: 5 }}>
      <CardHeader title={
        <Typography variant='h5' component="div">
          {content.title}
        </Typography>

      } />
      <Box sx={{
        maxWidth: 600, display: "flex", justifyContent: "space-between"
      }}>
        <Typography component="div" sx={{ marginTop: 5 }}>
          {content.body}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: 'center' }}>
          <img
            src={content.img} alt="cool image"
            width='300' height='300'
          />
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-around", marginTop: 5 }}>
        <Button component={Link} to="/">Назад</Button>
        <Button component={Link} to={"/game/" + mode}>Играть</Button>
      </Box>
    </Card>
  )
}
