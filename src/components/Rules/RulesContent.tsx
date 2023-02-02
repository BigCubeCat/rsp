import React from 'react';
import {
  Box, Typography
} from "@mui/material";

import { TRuleTextObject } from './rules_content';

export default function RulesContent({ content }: {
  content: TRuleTextObject
}) {
  return (
    <Box sx={{
      maxWidth: 600, display: "flex", justifyContent: "space-between", flexWrap: "wrap"
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

  )
}
