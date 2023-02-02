import React from 'react';
import {
  Box, Card, CardHeader, Typography, Button
} from '@mui/material';
import { Link } from 'react-router-dom';

import RulesTable from './RulesTable';
import RulesContent from './RulesContent';

import { RULES_TEXT } from './rules_content';

export default function Rules({ mode }: {
  mode: "classic" | "spock" | "custom"
}) {
  const content = RULES_TEXT[mode];
  return (
    <Card sx={{ padding: 5 }}>
      <CardHeader title={
        <Typography variant='h5' component="div">
          {content.title}
        </Typography>

      } />
      {(mode === "custom") ? 
        <RulesTable /> : <RulesContent content={content} />
      }
      <Box sx={{ display: "flex", justifyContent: "space-around", marginTop: 5 }}>
        <Button component={Link} to="/">Назад</Button>
        <Button component={Link} to={"/game/" + mode}>Играть</Button>
      </Box>
    </Card>
  )
}
