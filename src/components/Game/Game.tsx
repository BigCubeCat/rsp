import React from 'react';
import {
  Box, Card, CardHeader, Typography, Button, Paper
} from '@mui/material';
import GameButton from './GameButton';

interface GameProps {
  mode: "classic" | "spock" | "custom";
}

const styles = {
  paperContainer: {
    backgroundImage: `/img/classic.jpg`
  }
};

export default function Game({ mode }: GameProps) {
  return (
    <Card sx={{
      minWidth: 400, minHeight: 400,
      maxWidth: 700,
    }}>
      <CardHeader title={
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>}>
      </CardHeader >
      <Box sx={{ display: "flex" }}>
        <GameButton img="/img/lizzard.png" color={"#f4b1c0"} func={() => console.log("FUCK")} />
        <GameButton img="/img/lizzard.png" color={"#f4b1c0"} func={() => console.log("FUCK")} />
        <GameButton img="/img/lizzard.png" color={"#f4b1c0"} func={() => console.log("FUCK")} />
        <GameButton img="/img/lizzard.png" color={"#f4b1c0"} func={() => console.log("FUCK")} />
      </Box>
    </Card>
  )
}
