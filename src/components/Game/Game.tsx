import React, { useState } from 'react';
import {
  Box, Card, CardHeader, Typography, Button
} from '@mui/material';
import { Link } from "react-router-dom";
import { selectRules, selectUser } from '../../features/user/userSlice';

import { useAppSelector } from '../../app/hooks';
import { GetClassic, GetSpock, GetCustom } from '../../api/bot';

import GameButton from '../GameButton/GameButton';
import Loading from './Loading';
import { Result } from './Result';

import { ELEMENTS, ELEMENTS_KEYS, IElement } from './game_elements';
import { gameResult as playTheGame } from '../../utils/game_logic';
import {
  TRules, CLASSIC_RULES, SPOCK_RULES, ALL_OBJECTS
} from '../../utils/rules';
import { addGame, resultType } from "../../utils/history";
import { CLASSIC_SIZE, SPOCK_SIZE } from '../../utils/const';

interface GameProps {
  mode: "classic" | "spock" | "custom";
}

/*
 * formatOptions()
 * generate array for best bot game
 */
function formatOptions(rules: TRules): string[] {
  let array: string[] = [];
  for (let obj of ALL_OBJECTS) {
    for (let i = 0; i < rules[obj].length; ++i) {
      array.push(obj);
    }
  }
  return array;
}

export default function Game({ mode }: GameProps) {
  const userName = useAppSelector(selectUser);
  let currentRules = useAppSelector(selectRules);
  if (mode === "spock") {
    currentRules = SPOCK_RULES;
  } else if (mode === "classic") {
    currentRules = CLASSIC_RULES;
  }
  const [gameResult, setGameResult] = useState<resultType>("no");
  const [userOption, setUserOption] = useState<IElement>(
    { name: "", color: "", img: "" }
  );
  const [botOption, setBotOption] = useState<IElement>(
    { name: "", color: "", img: "" }
  );
  const ReloadGame = () => {
    setBotOption({ name: "", color: "", img: "" });
    setUserOption({ name: "", color: "", img: "" });
    setGameResult("no");
  }

  const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

  const submitResult = async (userElement: IElement) => {
    if (userOption.name !== "") {
      return;
    }
    setUserOption(userElement);
    let res: string = "";
    switch (mode) {
      case "classic":
        res = await GetClassic();
        break;
      case "spock":
        res = await GetSpock();
        break;
      case "custom":
        res = await GetCustom(formatOptions(currentRules));
        break;
      default:
        break;
    }
    setBotOption(ELEMENTS_KEYS[res]);
    await delay(1100);
    const result = playTheGame(currentRules, userElement.name, res);
    setGameResult(result);
    addGame(userName, result);
  }

  let gameButtons: JSX.Element[] = [];
  let count = (mode === "classic") ?
    CLASSIC_SIZE : (mode === "spock") ?
      SPOCK_SIZE : ELEMENTS.length;
  for (let i = 0; i < count; ++i) {
    gameButtons.push(
      <GameButton
        key={"GameButton" + i}
        img={ELEMENTS[i].img}
        color={ELEMENTS[i].color}
        func={() => { submitResult(ELEMENTS[i]) }}
      />
    )
  }
  return (
    <Card sx={{
      minHeight: 400,
      maxWidth: 700, padding: 5
    }}>
      <CardHeader title={
        <Typography gutterBottom variant="h5" component="div">
          {mode === "classic" ? "Камень, Ножницы, Бумага" : "Камень, Ножницы, Бумага и другие"}
        </Typography>}>
      </CardHeader >
      {(gameResult === "no") ?
        <>
          <Typography variant="h6" textAlign={"center"}> Ваш выбор:</Typography>
          <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
            {gameButtons}
          </Box>
        </>
        : <Result result={gameResult} />
      }
      <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: 5 }}>
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
            /> : <Loading mode={mode} />
          }
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-around", marginTop: 5 }}>
        {(botOption.name !== "") ?
          <Button
            sx={{ borderRadius: 100, fontWeight: "bold" }}
            variant="contained" onClick={() => ReloadGame()}>Переиграть</Button>
          : <Button
            sx={{ borderRadius: 100, color: "#44475a", fontWeight: "bold" }}
            variant="contained" component={Link} to={"/about/" + mode}>
            {mode === "custom" ? "Редактировать правила" : "Правила"}
          </Button>
        }
        <Button
          sx={{ borderRadius: 100, fontWeight: "bold" }}
          variant="contained" color="secondary" component={Link} to={"/"}>Выйти</Button>
      </Box>
    </Card>
  )
}
