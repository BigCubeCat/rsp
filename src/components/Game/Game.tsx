import React, { useState } from 'react';
import {
  Box, Card, CardHeader, Typography, Button
} from '@mui/material';
import GameButton from './GameButton';
import Loading from './Loading';
import { Result } from './Result';
import { elements, IElement, elementKeys } from './GameElements';
import { GetClassic, GetSpock, GetCustom } from '../../api/bot';
import { gameResult as playTheGame } from './game_logic';
import {
  Rules, classicRules, spockRules, allObjects
} from './rules';
import { Link } from "react-router-dom";
import { addGame, resultType } from "../../utils/history";
import { useAppSelector } from '../../app/hooks';
import { selectRules, selectUser } from '../../features/user/userSlice';

interface GameProps {
  mode: "classic" | "spock" | "custom";
}

/*
 * formatOptions()
 * generate array for best bot game
 */
function formatOptions(rules: Rules): string[] {
  let array: string[] = [];
  for (let obj of allObjects) {
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
    currentRules = spockRules;
  } else if (mode === "classic") {
    currentRules = classicRules;
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
    const res: string = (mode === "classic")
      ? await GetClassic() : (mode === "spock")
        ? await GetSpock() : await GetCustom(formatOptions(currentRules));
    setBotOption(elementKeys[res]);
    await delay(1100);
    const result = playTheGame(currentRules, userElement.name, res);
    setGameResult(result);
    addGame(userName, result);
  }

  let gameButtons: JSX.Element[] = [];
  let count = (mode === "classic") ? 3 : (mode === "spock") ? 5 : elements.length;
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
        </> : <Result result={gameResult} />
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
          <Button variant="contained" onClick={() => ReloadGame()}>Переиграть</Button>
          : <Button variant="contained" component={Link} to={"/about/" + mode}>
            {mode === "custom" ? "Редактировать правила" : "Правила"}
          </Button>
        }
        <Button variant="contained" color="secondary" component={Link} to={"/"}>Выйти</Button>
      </Box>
    </Card>
  )
}
