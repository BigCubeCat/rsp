import React from 'react';
import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import StyledInput from './StyledInput';


import styles from '../Card/Card.module.css';

interface CardProps {
  title?: string;
  img?: string;
  rulesLink?: string;
  gameLink?: string;
}

export default function HistoryCard(props: CardProps) {
  //TODO: create card images (images in public/img)
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
        <StyledInput />
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
          >Подробнее</Button>
          <Button
            variant="outlined"
          >Очистить</Button>
        </Box>

      </CardContent>
    </Card>
  );
}

