import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

import styles from './Card.module.css';

interface CardProps {
  title: string;
  img?: string;
}

export default function CustomCard({ title }: CardProps) {
  return (
    <Card className={styles.Card} sx={{
      maxWidth: 345, minWidth: 200,
      minHeight: 300, margin: 5
    }}>
      <CardContent sx={{
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'column'
      }}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Button>Играть</Button>
        <Button>Правила</Button>
      </CardContent>
    </Card>
  );
}
