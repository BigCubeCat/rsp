import React, { useState } from 'react';
import {
  Box, Card, CardHeader, Typography, Button, Paper
} from '@mui/material';
import GameButton from './GameButton';
import { elements, IElement, elementKeys } from './GameElements';
import { GetClassic } from '../../api/bot';

interface GameProps {
  mode: "classic" | "spock" | "custom";
}

const styles = {
  paperContainer: {
    backgroundImage: `/img/classic.jpg`
  }
};

export default function Game({ mode }: GameProps) {
  const [userOption, setUserOption] = useState<IElement>(
    { name: "", color: "", img: "" }
  );
  const [botOption, setBotOption] = useState<IElement>(
    { name: "", color: "", img: "" }
  );

  const GetBotAnswer = () => {
    GetClassic().then(result => {
      for (let element of elements) {
        if (element.name == result) {
          setBotOption(element);
        }
      }
    })
  }

  let gameButtons: JSX.Element[] = [];
  let count = (mode === "classic") ? 3 : 5;
  for (let i = 0; i < count; ++i) {
    gameButtons.push(
      <GameButton
        key={"GameButton" + i}
        img={elements[i].img}
        color={elements[i].color}
        func={() => { setUserOption(elements[i]); GetBotAnswer(); }}
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
          {
            (userOption.name != "") && <GameButton
              color={userOption.color} img={userOption.img} func={() => { }}
            />
          }
        </Box>
        <Box>
          <Typography variant="h6" textAlign="center">Бот выбрал:</Typography>
          {
            (botOption.name != "") && <GameButton
              color={botOption.color} img={botOption.img} func={() => { }}
            />
          }
        </Box>
      </Box>
    </Card>
  )
}
