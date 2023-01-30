import React, { useState } from 'react';
import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import StyledInput from './StyledInput';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styles from '../Card/Card.module.css';
import { GetPercent, SetDefaultStorage } from './history'
import { Link } from 'react-router-dom';

interface CardProps {
  title?: string;
  img?: string;
  rulesLink?: string;
  gameLink?: string;
}

const Rate = (props: { title: string, percent: number }) => {
  return <Box sx={{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: 180
  }}>
    <Box sx={{ display: "flex", justifyContent: "center", padding: 5 }}>
      <CircularProgressbar
        styles={buildStyles({
          pathColor: "#a9cc8a",
          textColor: "#a9cc8a",
        })}
        text={`${props.percent}%`}
        value={props.percent}
      />
    </Box>
    <Typography textAlign="center" variant="caption">{props.title}</Typography>
  </Box>
}

export default function HistoryCard(props: CardProps) {
  //TODO: create card images (images in public/img)
  const [percent, setPercent] = useState(GetPercent());
  return (
    <Card className={styles.Card} sx={{
      maxWidth: 345, width: 200,
      minHeight: 300, margin: 5
    }}>
      <CardContent sx={{
        minHeight: "100%",
      }}>
        <Typography variant="h5" component="div" textAlign="center">
          Статистика
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Rate title={"Процент побед"} percent={percent} />
        </Box>
        <Box sx={{
          display: 'flex',
          flexDirection: "column",
          minHeight: 150,
          marginTop: 5,
          justifyContent: 'space-around',
        }}>
          <Button
            variant="outlined"
            color="secondary"
            component={Link}
            to="/statistic"
          >Подробнее</Button>
          <Button
            onClick={() => SetDefaultStorage()}
            variant="outlined"
          >Очистить</Button>
        </Box>

      </CardContent>
    </Card>
  );
}

