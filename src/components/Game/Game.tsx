import React from 'react';
import {
  Box, Card, CardHeader, Typography, Button, Paper
} from '@mui/material';
import GameButton from './GameButton';
import { elements } from './GameElements';

interface GameProps {
  mode: "classic" | "spock" | "custom";
}

const styles = {
  paperContainer: {
    backgroundImage: `/img/classic.jpg`
  }
};

export default function Game({ mode }: GameProps) {
  let gameButtons: JSX.Element[] = [
  ]
  let count = (mode === "classic") ? 3 : 5;
  for (let i = 0; i < count; ++i) {
    gameButtons.push(
      <GameButton
        key={"GameButton" + i}
        img={elements[i].img}
        color={elements[i].color}
        func={() => console.log('Man...')}
      />
    )
  }
  return (
    <Card sx={{
      minWidth: 400, minHeight: 400,
      maxWidth: 700, padding: 5
    }}>
      <CardHeader title={
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>}>
      </CardHeader >
      <Typography variant="h6" textAlign={"center"}> Ваш выбор:</Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        {gameButtons}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Typography variant="h6" textAlign="center">Вы выбрали:</Typography>
        </Box>
        <Box>
          <Typography variant="h6" textAlign="center">Вы выбрали:</Typography>
        </Box>
      </Box>
    </Card>
  )
}
