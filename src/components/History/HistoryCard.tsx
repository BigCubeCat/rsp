import React, { useState } from 'react';
import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { Link } from 'react-router-dom';

import StyledInput from './StyledInput';
import Clean from '../modals/Clean';

import { getPercent, setDefaultStorage } from '../../utils/history'

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
  const [percent, setPercent] = useState(getPercent());
  const [popupOpen, setPopupOpen] = useState(false);
  return (
    <Card sx={{
      maxWidth: 345, width: 200,
      minHeight: 300, margin: 5,
      transition: "2s",
      '&:hover': {
        position: "relative",
        top: "-15px",
      }
    }}>
      <CardContent sx={{
        minHeight: "100%",
      }}>
        <Typography variant="h5" component="div" textAlign="center">
          Статистика
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", marginBottom: 1 }}>
          <Rate title={""} percent={percent} />
        </Box>
        <StyledInput />
        <Box sx={{
          display: 'flex',
          flexDirection: "column",
          minHeight: 150,
          marginTop: 5,
          justifyContent: 'space-around',
        }}>
          <Button
            variant="contained"
            color="secondary"
            component={Link}
            to="/statistic"
          >Подробнее</Button>
          <Button
            onClick={() => {
              setDefaultStorage();
              setPercent(getPercent());
              setPopupOpen(true);
            }}
            variant="contained"
          >Очистить</Button>
        </Box>
      </CardContent>
      <Clean isOpen={popupOpen} handleClose={() => setPopupOpen(false)} />
    </Card>
  );
}

