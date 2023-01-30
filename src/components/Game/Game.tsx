import React, { useState } from 'react';
import {
  Box, Card, CardHeader, Typography, Alert
} from '@mui/material';
import GameButton from './GameButton';
import Loading from './Loading';
import { Result } from './Result';
import { elements, IElement } from './GameElements';
import { GetClassic } from '../../api/bot';
import { gameResult as playTheGame } from './game_logic';
import { Rules, classicRules, spockRules } from './rules';

interface GameProps {
  mode: "classic" | "spock" | "custom";
  rules?: Rules;
}

const styles = {
  paperContainer: {
    backgroundImage: `/img/classic.jpg`
  }
};

export default function Game({ mode, rules }: GameProps) {
  // 0 - no result
  // 1 - draw
  // 2 - user win
  // 3 - bot win
  let currentRules = classicRules;
  if (mode === "spock") {
    currentRules = spockRules;
  } else if (mode === "custom") {
    currentRules = {};
  }
  const [gameRules, setGameRules] = useState<Rules>(currentRules);
  const [gameResult, setGameResult] = useState<number>(0);
  const [userOption, setUserOption] = useState<IElement>(
    { name: "", color: "", img: "" }
  );
  const [botOption, setBotOption] = useState<IElement>(
    { name: "", color: "", img: "" }
  );

  const GetBotAnswer = async () => {
    const res = await GetClassic().then(result => {
      for (let element of elements) {
        if (element.name == result) {
          return element;
        }
      }
      return elements[0];
    })
    setBotOption(res);
  }

  const ReloadGame = () => {
    setBotOption({ name: "", color: "", img: "" });
    setUserOption({ name: "", color: "", img: "" });
    setGameResult(0);
  }

  const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

  const submitResult = async (userElement: IElement) => {
    setUserOption(userElement);
    const res = await GetClassic().then(result => {
      for (let element of elements) {
        if (element.name == result) {
          return element;
        }
      }
      return elements[0];
    })
    setBotOption(res);
    await delay(1100);
    const result = playTheGame(gameRules, userElement.name, res.name);
    setGameResult(result);
  }

  let gameButtons: JSX.Element[] = [];
  let count = (mode === "classic") ? 3 : 5;
  for (let i = 0; i < count; ++i) {
    gameButtons.push(
      <GameButton
        key={"GameButton" + i}
        img={elements[i].img}
        color={elements[i].color}
        func={() => { submitResult(elements[i]) }}
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
          {mode === "classic" ? "Камень, Ножницы, Бумага" : "Камень, Ножницы, Бумага и другие"}
        </Typography>}>
      </CardHeader >
      {(gameResult === 0) ?
        <>
          <Typography variant="h6" textAlign={"center"}> Ваш выбор:</Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            {gameButtons}
          </Box>
        </> : <Result result={gameResult} />
      }
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Typography variant="h6" textAlign="center">Вы выбрали:</Typography>
          {
            (userOption.name !== "") && <GameButton
              color={userOption.color} img={userOption.img} func={() => { }}
            />
          }
        </Box>
        <Box>
          <Typography variant="h6" textAlign="center">Бот выбрал:</Typography>
          {
            (botOption.name !== "") ? <GameButton
              color={botOption.color} img={botOption.img} func={() => { }}
            /> : <Loading />
          }
        </Box>
      </Box>
    </Card>
  )
}
