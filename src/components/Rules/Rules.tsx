import React from 'react';
import { Box, Typography } from '@mui/material';
import { RulesText } from './RulesContent';

export default function Rules({ index }: { index: number }) {
  const content = RulesText[index];
  return (
    <Box sx={{
      maxWidth: 600,
      borderRadius: 10,

    }}>
      <Typography variant='h5' component="div">
        {content.title}
      </Typography>
      <img
        src={content.img} alt="cool image"
        width='300' height='300'
      />
      <Typography component="div">
        {content.body}
      </Typography>
    </Box>
  )
}
