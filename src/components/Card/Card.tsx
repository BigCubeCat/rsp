import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, Box } from '@mui/material';

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
        minHeight: "100%",
      }}>
        <Typography variant="h5" component="div" textAlign="center">
          {title}
        </Typography>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: 150,
          marginTop: 5,
          justifyContent: 'space-around',
        }}>
          <Button>Играть</Button>
          <Button>Правила</Button>
        </Box>
      </CardContent>
    </Card>
  );
}
